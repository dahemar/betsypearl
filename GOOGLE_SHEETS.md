# Google Sheets CMS — betsy pearl

Solo **texto** e **imágenes** son editables. Posiciones, menú, colores y diseño están fijos en el código.

## Pestañas (6)

| Pestaña | Qué editar |
|---------|------------|
| **settings** | `name`, `description` del sitio (filas field / value) |
| **home** | `image` por tile (`logo`, `portfolio`, `visuals`, `about`, `contact`, `instagram`). Columna `link` solo para instagram |
| **portfolio** | `title`, `subtitle` (ej. `release / 2025`), `text`, `image` |
| **visuals** | `image` — una fila por foto, el orden de filas = orden en la galería |
| **about** | `text` |
| **contact** | `email` — una fila por correo |

## Comandos

```bash
npm run sheets:csv    # regenerar CSV desde el código
npm run sheets:push   # subir a la hoja configurada
npm run dev
```

Hoja: https://docs.google.com/spreadsheets/d/1K5nSgESCrOb-fupqKEW21SgQyDntRlRIlhrRq2FarAY/edit

Comparte la hoja: **Cualquier persona con el enlace → Lector** (para la API key).
