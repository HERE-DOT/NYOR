import type { ReactNode } from "react";

/** Estado vacío honesto: no se inventan productos mientras no existan. */
export function EmptyState({
  title,
  children,
  action,
}: {
  title: string;
  children: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="border-chocolate/20 mx-auto flex max-w-xl flex-col items-center rounded-t-[999px] rounded-b-3xl border bg-white/50 px-8 pt-20 pb-12 text-center">
      <span aria-hidden className="bg-dorado mb-6 h-px w-10" />
      <h2 className="text-3xl sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-md">{children}</p>
      {action ? <div className="mt-8">{action}</div> : null}
    </div>
  );
}
