-- BORRADOR EDUCATIVO: NO EJECUTAR EN PRODUCCIÓN.
-- Claude debe auditar, completar y corregir este modelo antes de usarlo.
-- Requiere definir correctamente roles, políticas RLS, transacciones, constraints y auditoría.

create extension if not exists pgcrypto;

create type public.product_availability as enum ('in_stock', 'on_order', 'out_of_stock');
create type public.order_status as enum (
  'received', 'under_review', 'confirmed', 'preparing',
  'in_transit', 'ready_for_pickup', 'delivered', 'cancelled'
);
create type public.payment_status as enum ('pending', 'partially_paid', 'paid', 'refunded', 'void');
create type public.payment_method as enum ('bank_transfer', 'nequi', 'cash', 'other');
create type public.sales_channel as enum ('website', 'whatsapp', 'in_person');
create type public.purchase_status as enum ('draft', 'requested', 'partially_received', 'received', 'cancelled');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  phone text,
  role text not null default 'customer' check (role in ('customer', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.categories (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid references public.categories(id) on delete restrict,
  name text not null,
  slug text not null unique,
  description text,
  image_path text,
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table public.suppliers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  contact_name text,
  phone text,
  email text,
  notes text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references public.categories(id) on delete set null,
  supplier_id uuid references public.suppliers(id) on delete set null,
  name text not null,
  slug text not null unique,
  brand text,
  description text,
  sale_price numeric(12,2) not null check (sale_price >= 0),
  availability public.product_availability not null default 'out_of_stock',
  is_published boolean not null default false,
  is_featured boolean not null default false,
  low_stock_threshold integer not null default 2 check (low_stock_threshold >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.product_variants (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  sku text unique,
  variant_name text not null,
  attributes jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table public.product_images (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  storage_path text not null,
  alt_text text,
  sort_order integer not null default 0
);

create table public.inventory (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  variant_id uuid references public.product_variants(id) on delete cascade,
  quantity_on_hand integer not null default 0 check (quantity_on_hand >= 0),
  quantity_reserved integer not null default 0 check (quantity_reserved >= 0),
  updated_at timestamptz not null default now(),
  unique(product_id, variant_id),
  check (quantity_reserved <= quantity_on_hand)
);

create table public.customer_addresses (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references public.profiles(id) on delete cascade,
  label text,
  recipient_name text not null,
  phone text not null,
  address_line text not null,
  city text not null,
  instructions text,
  created_at timestamptz not null default now()
);

create table public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number bigint generated always as identity unique,
  customer_id uuid not null references public.profiles(id),
  status public.order_status not null default 'received',
  payment_status public.payment_status not null default 'pending',
  payment_method public.payment_method,
  sales_channel public.sales_channel not null default 'website',
  delivery_method text not null check (delivery_method in ('home_delivery', 'pickup')),
  delivery_address_snapshot jsonb,
  subtotal numeric(12,2) not null default 0 check (subtotal >= 0),
  discount_total numeric(12,2) not null default 0 check (discount_total >= 0),
  delivery_fee numeric(12,2) not null default 0 check (delivery_fee >= 0),
  total numeric(12,2) not null default 0 check (total >= 0),
  customer_notes text,
  admin_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid references public.products(id) on delete set null,
  variant_id uuid references public.product_variants(id) on delete set null,
  product_name_snapshot text not null,
  variant_snapshot jsonb,
  quantity integer not null check (quantity > 0),
  unit_sale_price numeric(12,2) not null check (unit_sale_price >= 0),
  unit_cost_snapshot numeric(12,2),
  line_discount numeric(12,2) not null default 0 check (line_discount >= 0)
);

create table public.supplies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  discount_type text check (discount_type in ('percentage', 'fixed')),
  discount_value numeric(12,2) check (discount_value >= 0),
  starts_at timestamptz,
  ends_at timestamptz,
  is_active boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.purchase_orders (
  id uuid primary key default gen_random_uuid(),
  supplier_id uuid not null references public.suppliers(id),
  status public.purchase_status not null default 'draft',
  reference text,
  notes text,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  received_at timestamptz
);

create table public.purchase_order_items (
  id uuid primary key default gen_random_uuid(),
  purchase_order_id uuid not null references public.purchase_orders(id) on delete cascade,
  product_id uuid not null references public.products(id),
  variant_id uuid references public.product_variants(id),
  quantity_ordered integer not null check (quantity_ordered > 0),
  quantity_received integer not null default 0 check (quantity_received >= 0),
  unit_cost numeric(12,2) not null check (unit_cost >= 0),
  check (quantity_received <= quantity_ordered)
);

create table public.expenses (
  id uuid primary key default gen_random_uuid(),
  description text not null,
  amount numeric(12,2) not null check (amount > 0),
  category text,
  expense_date date not null default current_date,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

create table public.payments (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references public.orders(id) on delete set null,
  amount numeric(12,2) not null check (amount > 0),
  method public.payment_method not null,
  reference text,
  confirmed_by uuid references public.profiles(id),
  confirmed_at timestamptz,
  created_at timestamptz not null default now()
);

-- Faltan intencionalmente: políticas RLS completas, funciones seguras para
-- crear pedidos, reservar/liberar inventario, recibir compras, actualizar
-- estados, registrar ventas manuales, auditoría, triggers updated_at,
-- promociones/combos/cupones completos y validaciones de permisos.
-- No habilitar acceso público a estas tablas hasta completar la auditoría.
