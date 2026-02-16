# Assets Folder

This folder contains all static assets for the DigitalHousePower website.

## Structure

- **logos/** - Company logos for the client slider and branding
- **images/** - General images, backgrounds, and other graphics

## Usage

To use assets in your components:

### Images
```tsx
import Image from 'next/image';

<Image 
  src="/assets/images/example.png" 
  alt="Description"
  width={500}
  height={300}
/>
```

### Logos in Slider
```tsx
const logos = [
  { src: "/assets/logos/company1.svg", alt: "Company 1" },
  { src: "/assets/logos/company2.svg", alt: "Company 2" },
];
```

## File Format Guidelines

- **Logos**: SVG format recommended for scalability
- **Images**: WebP or PNG format
- Use descriptive filenames (e.g., `vercel-logo.svg`, `hero-background.webp`)
