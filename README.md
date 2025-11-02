## Landing page - Banca Universitaria

Proyecto de ejemplo (landing page) creado con React + Bootstrap como entrega para la universidad.

Tecnologías usadas:
- HTML
- CSS
- JavaScript
- React
- Bootstrap (CDN)

Estructura mínima del proyecto:

```
.
├─ index.html
├─ package.json
├─ public/
│  └─ assets/
│     ├─ logo.svg
│     └─ hero-illustration.svg
└─ src/
	├─ main.jsx
	├─ App.jsx
	├─ styles.css
	└─ components/
		├─ Header.jsx
		├─ Hero.jsx
		├─ Features.jsx
		├─ CTA.jsx
		└─ Footer.jsx
```

Cómo ejecutar (Windows PowerShell):

1. Abrir PowerShell y ubicarse en la carpeta del proyecto:

```powershell
cd "C:\Users\Mijha\OneDrive\Escritorio\uni\lab 2\Lab2Project"
```

2. Instalar dependencias:

```powershell
npm install
```

3. Iniciar servidor de desarrollo (Vite):

```powershell
npm run dev
```

4. Abrir en el navegador: http://localhost:5173

Notas:
- El proyecto usa Vite como servidor de desarrollo. Si no tienes Node.js/NPM instalado, instálalo desde https://nodejs.org/
- Bootstrap está incluido mediante CDN en `index.html`. Si prefieres instalarlo localmente, añade la dependencia y importa en `src/main.jsx`.
- Archivos a editar: `src/components/*` y `src/styles.css` para personalizar la landing.

Si quieres, puedo:
- Añadir formularios y validación para apertura de cuenta.
- Integrar autenticación simulada o mock API.
- Convertir el proyecto para desplegar en GitHub Pages o Netlify.

---
# Lab2Project
UCLA Laboratory 2 Front-end Assignment and Project
