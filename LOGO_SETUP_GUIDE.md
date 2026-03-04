# 🎨 Logo Setup Guide

## Option 1: Use Your Actual Logo Image (Recommended)

### Step 1: Save Your Logo
1. Save your logo image as `logo.png` or `logo.svg`
2. Recommended: Use PNG with transparent background or SVG

### Step 2: Add to Project
Copy your logo file to:
```
frontend/src/assets/images/logo.png
```

Or if you have SVG:
```
frontend/src/assets/images/logo.svg
```

### Step 3: Update Logo Component

Replace the content of `frontend/src/app/shared/components/logo/logo.component.ts` with:

```typescript
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="'logo-wrapper ' + sizeClass">
      <img [src]="logoSrc" [alt]="alt" [style.filter]="colorFilter">
    </div>
  `,
  styles: [`
    .logo-wrapper {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    
    img {
      display: block;
      width: 100%;
      height: auto;
    }
    
    .size-sm { width: 50px; }
    .size-md { width: 80px; }
    .size-lg { width: 120px; }
    .size-xl { width: 180px; }
  `]
})
export class LogoComponent {
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() alt: string = 'G Samuel & Co Logo';
  @Input() invertColor: boolean = false;
  
  logoSrc = 'assets/images/logo.png'; // or logo.svg
  
  get sizeClass(): string {
    return `size-${this.size}`;
  }
  
  get colorFilter(): string {
    return this.invertColor ? 'brightness(0) invert(1)' : 'none';
  }
}
```

### Step 4: Create assets folder
```bash
mkdir -p frontend/src/assets/images
```

### Step 5: Copy your logo
```bash
# Copy your logo file to the assets folder
cp /path/to/your/logo.png frontend/src/assets/images/logo.png
```

---

## Option 2: Download Logo from Your Website

If you have the logo on another website:

```bash
# Download the logo
curl -o frontend/src/assets/images/logo.png https://your-website.com/logo.png
```

---

## Option 3: Use the Original Image You Shared

Since you shared the logo image, you can:

1. **Right-click** on the logo in your original image
2. **Save image as** → `logo.png`
3. **Copy** to `frontend/src/assets/images/logo.png`

---

## Usage Examples

### In Header (Small)
```html
<app-logo [size]="'sm'" />
```

### In Hero (Large)
```html
<app-logo [size]="'xl'" />
```

### White Logo (for dark backgrounds)
```html
<app-logo [size]="'md'" [invertColor]="true" />
```

---

## Alternative: Use Logo with Text

If you want logo + text side by side:

```typescript
template: `
  <div class="flex items-center gap-3">
    <img src="assets/images/logo.png" [class]="sizeClass" alt="G Samuel & Co">
    <div class="flex flex-col">
      <span class="font-bold text-lg" style="font-family: Georgia, serif;">
        G Samuel & Co
      </span>
      <span class="text-xs text-gray-600">
        PESO Licensing & Certification
      </span>
    </div>
  </div>
`
```

---

## Quick Fix: Use Current Simple Logo

The current logo component has a simple shield with "G". If you want to keep it simple for now:

**It's already working!** Just check your browser at http://localhost:49386/

---

## Need Help?

If you can't add the image file, I can:
1. Create a better SVG version
2. Help you extract the logo from your image
3. Create a simpler placeholder

Let me know what works best for you!
