# 🖼️ How to Add Your Profile Image

## Option 1: Quick Method (Recommended)

1. **Save your image** as `profile.jpg` or `profile.png`
2. **Place it** in the `public` folder
3. **Edit** `components/HolographicProfile.tsx`
4. **Uncomment** lines 105-110:

```tsx
{/* Uncomment and use your image */}
<Image
  src="/profile.jpg"  // or "/profile.png"
  alt="Profile"
  fill
  className="object-cover"
  priority
/>
```

5. **Comment out or delete** the placeholder div (lines 96-99)

---

## Option 2: Different File Name

If your image has a different name:

1. Place image in `public` folder (e.g., `public/my-photo.jpg`)
2. Update the `src` path:
   ```tsx
   src="/my-photo.jpg"
   ```

---

## Option 3: External URL

If your image is hosted online:

```tsx
<Image
  src="https://your-image-url.com/photo.jpg"
  alt="Profile"
  fill
  className="object-cover"
  priority
/>
```

**Note:** You'll need to add the domain to `next.config.mjs`:

```javascript
images: {
  domains: ['your-image-url.com'],
}
```

---

## Image Requirements

- **Format**: JPG, PNG, WebP, or AVIF
- **Size**: At least 500x500px (square recommended)
- **Aspect Ratio**: 1:1 (square) works best
- **File Size**: Under 500KB for best performance

---

## Current Effect Features

Your image will automatically have:
- ✨ 3D holographic effect
- 🎨 RGB split on glitch
- 📊 Scan line animation
- 🔄 Rotating outer rings
- 💫 Particle effects on hover
- 🖱️ Mouse tracking (subtle 3D tilt)
- ⚡ Corner brackets
- 🌈 Glowing borders
- 📱 Fully responsive

---

## Customization

### Change Image Size

In `components/HolographicProfile.tsx`, line 87:

```tsx
<div className="relative w-64 h-64 md:w-80 md:h-80">
// Change w-64/h-64 for mobile
// Change w-80/h-80 for desktop
```

### Change Border Color

Line 94:
```tsx
borderColor: isHovered ? '#ff006e' : '#3a86ff',
```

### Adjust Glitch Frequency

Line 42:
```tsx
if (Math.random() > 0.7) { // Lower = more frequent (e.g., 0.5)
```

---

## Example File Structure

```
Portfolio/
├── public/
│   ├── profile.jpg       ← YOUR IMAGE HERE
│   └── ...
└── components/
    └── HolographicProfile.tsx
```

---

## Need Help?

The placeholder (emoji) will show until you add your image. The effects will work the same either way!

