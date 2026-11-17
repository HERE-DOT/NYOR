# Subir NYOR a GitHub (versión simple)

## Paso 1 — Arrastrar
1. Abre github.com/HERE-DOT/NYOR (la página principal, donde ves la carpeta `nyor-store`).
2. **Add file → Upload files**.
3. Abre esta carpeta en tu computador y arrastra, **a la vez**, estas DOS cosas:
   - la carpeta `nyor-store`
   - la carpeta `.github`
   (No arrastres `SI-FALTAN-ARCHIVOS-CON-PUNTO` ni este LEEME.)
4. Espera a que termine de cargar, escribe un mensaje como "Actualizar proyecto" y pulsa **Commit changes**.

Los archivos que ya existen se reemplazan; los nuevos se añaden.

## Paso 2 — Comprobar que subieron los archivos con punto
Esto falló la primera vez. En GitHub, entra a la carpeta `nyor-store` y busca:
`.gitignore`, `.env.example`, `.prettierrc.json`, `.prettierignore`.
Y en la raíz del repositorio, la carpeta `.github`.

- Si **están todos**, listo.
- Si **falta alguno**, créalo a mano con el Plan B: Add file → Create new file, escribe el nombre con el punto, pega el contenido del `.txt` de la carpeta `SI-FALTAN-ARCHIVOS-CON-PUNTO` y pulsa Commit. Equivalencias:
  - `1_gitignore.txt` → `nyor-store/.gitignore`
  - `2_env.example.txt` → `nyor-store/.env.example`
  - `3_prettierrc.json.txt` → `nyor-store/.prettierrc.json`
  - `4_prettierignore.txt` → `nyor-store/.prettierignore`
  - `5_ci.yml.txt` → `.github/workflows/ci.yml` (en la raíz, NO dentro de nyor-store)

## Paso 3 — Borrar un archivo sobrante
En `nyor-store/` abre `next-env.d.ts`, pulsa el icono de papelera y confirma. Next lo vuelve a generar solo.

## Importante
- Cada commit en `main` hace que Vercel recompile; es normal.
- El CI (carpeta `.github`) corre por primera vez y no pude probarlo. Si en la pestaña Actions sale en rojo, copia el mensaje y lo reviso; no afecta al sitio.
- Nunca subas `node_modules`, `.next` ni un archivo `.env.local`.
