# Wiki - Windows Server 2025

Esta aplicación ha sido convertida a una wiki que muestra las imágenes ubicadas en `src/assets/img_pasos` organizadas por secciones (cada subcarpeta es una sección).

Publicación en Vercel: https://wiki-rivpat.vercel.app/

## Cómo ejecutar

Instala dependencias y ejecuta en modo desarrollo:

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` (o la dirección que Vite indique).

## Estructura

- Las imágenes están en: `src/assets/img_pasos/` (subcarpetas `Paso_0`, `Paso_A`, ...).
- La UI principal que genera las secciones está en: `src/App.jsx`.

## Notas

- Las descripciones de imágenes se generan automáticamente a partir del nombre de archivo. Puedes editar `src/App.jsx` si deseas descripciones personalizadas.
