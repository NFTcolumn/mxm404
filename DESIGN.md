# MimeXMime Design System & Branding (v3)

A minimalist, brutalist aesthetic defined by sharp contrasts, character-driven storytelling, and a clean monochrome palette.

## 🎨 Visual Identity

### Color Palette
- **Primary Background**: `#FFFFFF` (White)
- **Primary Text/Borders**: `#000000` (Black)
- **Hover/Interactions**: `#F9FAFB` (Subtle Gray-50)

### Aesthetics & Patterns
- **Dashed Borders**: The core visual signature. All containers, dividers, and interactive blocks use `border-dashed` to create a "blueprint" or "sketch" feel.
- **Brutalist Layout**: Heavy use of borders, clear sections, and non-traditional positioning.
- **White Space**: Generous margins and padding to let characters and typography breathe.

## ✍️ Character & Assets

### Key Brand Assets
- **Word Logo**: The primary typographic identity.
- **MIMEY**: The core narrative character, often placed as a floating or offset element.
- **Marcel Outline**: A sketch-style character representing the project's artistic roots.
- **Hand Logo**: A signature icon, often used in footers or as a floating micro-animation.
- **Chat**: Speech bubble icon for community/social links.

## 🏃 Motion & Micro-interactions

### Signature Animations
- **Floating Hand**: The hand logo uses a subtle `animate-float` keyframe (Y-axis oscillation) to feel "alive".
- **Entrances**: Smooth `fade-in` and `fade-up` transitions for page elements to avoid abrupt loading.
- **Hover States**: Interactive dashed boxes shift background color slightly (`transition-colors`) to provide tactical feedback.

## 🛠 Technical Implementation

### Tailwind Integration
The project uses a standard Tailwind setup with custom keyframes in `index.css`:
- `border-dashed border-black`: Applied to headers, footers, and main blocks.
- `tracking-tight`: Used for large typographic statements (like 404).

### Responsive Strategy
- **Mobile**: Stacks elements vertically, reducing the intensity of desktop-specific absolute positioning.
- **Desktop**: Utilizes absolute positioning for characters (Mimey/Marcel) to create a more dynamic, "scene-like" composition.
