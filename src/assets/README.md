# Dónde poner las fotos y el logo

Copia los archivos reales en estas carpetas, con estos nombres exactos, y luego dímelo para conectarlos en el código (ahora mismo se muestran bloques placeholder en su lugar):

```
src/assets/
├── logo/
│   └── logo.svg (o logo.png)      → logo real de ROOLFiX (header + footer)
│
└── images/
    ├── hero.jpg                    → foto grande del Hero (portada)
    ├── about.jpg                   → foto de "Sobre ROOLFiX" (equipo / instalaciones)
    └── gallery/
        ├── limpieza-1.jpg
        ├── antes-despues-1.jpg
        ├── comunidades-1.jpg
        ├── zonas-comunes-1.jpg
        ├── mantenimiento-1.jpg
        └── reformas-1.jpg
```

Notas:

- No hace falta que estén todas para empezar — con las que tengas ya puedo ir sustituyendo placeholders.
- Para añadir más fotos a la galería más adelante, basta con añadir el archivo aquí y una línea nueva en `src/data/gallery.ts`.
- Usa fotografías reales de ROOLFiX, no de stock (ver CLAUDE.md §22).
- Formato recomendado: `.jpg` o `.webp`, ya optimizadas/comprimidas para web si es posible (no hace falta que sea perfecto, yo puedo optimizarlas después).
