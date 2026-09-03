# ROOLFiX — Web pública

Landing page corporativa de ROOLFiX (React + TypeScript + Vite + CSS).

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Despliegue

Pensado para GitHub Pages con dominio propio `roolfix.com` (ver `public/CNAME`).

## Pendiente antes de publicar

Ver `CLAUDE.md` para el detalle completo. Resumen de lo que falta por definir:

- **Logo real**: de momento se usa un wordmark de texto ("ROOLFiX") como placeholder en el header y el footer.
- **Fotografías reales**: hero, sección "Sobre ROOLFiX" y galería de trabajos usan bloques placeholder (`.img-placeholder`) claramente marcados — sustituir por fotografía real de ROOLFiX.
- **Datos de contacto**: teléfono, email, WhatsApp y zona de servicio están marcados como `[POR DEFINIR]` en `src/data/contactInfo.ts`.
- **Historia / filosofía de la empresa**: sección "Sobre ROOLFiX" (`src/components/About.tsx`) tiene un aviso `[POR DEFINIR]` a la espera de información real.
- **Opiniones de clientes**: `src/data/testimonials.ts` está vacío a propósito — no se han inventado reseñas. Añadir ahí las reseñas reales cuando existan.
- **Backend del formulario de contacto**: el formulario de `src/components/Contact.tsx` no envía datos a ningún sitio todavía (a la espera de decidir Formspree / Resend / Supabase / email propio).
- **Textos legales**: aviso legal, política de privacidad y política de cookies del footer están pendientes.
- **Imagen Open Graph**: `og:image` en `index.html` apunta a `/og-image.jpg`, que aún no existe.
