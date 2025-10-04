# Profile Image Frame Styles Guide

## 🎨 Available Frame Styles

Your portfolio now includes **5 premium frame styles** for the profile image. You can easily switch between them!

---

## 1. ✨ **Glassmorphism** (Current/Default)

**Features:**
- Frosted glass effect with backdrop blur
- Animated rotating gradient border (Primary → Purple → Pink)
- Floating particles inside the frame
- Corner accent decorations
- Gradient overlay on hover
- "Available" floating badge
- 3D mouse-tracking tilt

**Best for:** Modern, premium, professional portfolios

---

## 2. 🔷 **Hexagon**

**Features:**
- Six-sided geometric frame
- Animated gradient border
- Futuristic tech aesthetic
- 3D tilt on mouse movement
- Clean, sharp edges

**Best for:** Tech/developer portfolios, futuristic themes

**To use:** Change variant to `"hexagon"` in ProfileFrame component

---

## 3. ⬛ **Octagon**

**Features:**
- Eight-sided geometric frame
- Gradient border
- Modern geometric look
- 3D perspective effects
- Balanced symmetry

**Best for:** Designer/creative portfolios, modern aesthetics

**To use:** Change variant to `"octagon"` in ProfileFrame component

---

## 4. 📐 **Tilted**

**Features:**
- Angled frame (rotated -5°)
- Straightens on hover
- Glowing gradient shadow
- Taller aspect ratio (portrait style)
- Dynamic hover effect

**Best for:** Creative/artistic portfolios, unique presentations

**To use:** Change variant to `"tilted"` in ProfileFrame component

---

## 5. 💫 **Neon Border** (Circular)

**Features:**
- Classic circular frame
- Pulsing neon glow effect
- Animated border brightness
- Clean, simple design
- 3D mouse tracking

**Best for:** Minimalist portfolios, when you want focus on the image

**To use:** Change variant to `"neon-border"` in ProfileFrame component

---

## 🔧 How to Switch Frame Styles

### Option 1: Quick Switch (Recommended)
Currently, the glassmorphism style is directly implemented in `Hero.tsx`. 

To switch to a different style:
1. Import the ProfileFrame component
2. Replace the current image section
3. Specify your preferred variant

### Option 2: Use ProfileFrame Component
```tsx
import { ProfileFrame } from "@/components/ProfileFrame";

// Then in your render:
<ProfileFrame
  image={headshotImage}
  alt="Abhijith S"
  mousePosition={mousePosition}
  variant="glassmorphism" // Change this!
/>
```

**Available variants:**
- `"glassmorphism"` - Default premium glass effect ✨
- `"hexagon"` - Six-sided geometric
- `"octagon"` - Eight-sided geometric
- `"tilted"` - Angled frame
- `"neon-border"` - Pulsing circular frame

---

## 🎯 Current Implementation

**Active Style:** Glassmorphism with animated gradient border

**Features enabled:**
- ✅ Animated rotating gradient (5s cycle)
- ✅ Background glow that pulses
- ✅ Floating particles (6 animated dots)
- ✅ Corner accent decorations
- ✅ Gradient overlay on hover
- ✅ 3D mouse-tracking tilt
- ✅ "Available" badge with spring animation
- ✅ Smooth hover scale (1.05x)

---

## 💡 Design Philosophy

### Glassmorphism (Current)
- **Professional & Modern**: Perfect for portfolios targeting tech companies
- **Engaging**: Multiple layers of animation keep it interesting
- **Depth**: 3D effects and layering create visual hierarchy
- **Brand consistency**: Matches the gradient theme (Primary → Purple → Pink)

### Why It Works:
1. **Frosted glass** = Premium, modern aesthetic
2. **Animated gradient border** = Eye-catching, matches site theme
3. **Particles** = Subtle motion, doesn't distract
4. **Corner accents** = Professional frame detail
5. **Available badge** = Clear call-to-action

---

## 🎨 Customization Options

### Change Border Colors:
Modify the gradient in the border animation:
```tsx
background: "linear-gradient(135deg, hsl(var(--primary)), #8b5cf6, #ec4899, hsl(var(--primary)))"
```

### Adjust Animation Speed:
Change duration in the border animation:
```tsx
transition={{ duration: 5 }} // Make faster or slower
```

### Modify Frame Shape:
Change `rounded-3xl` to:
- `rounded-full` for perfect circle
- `rounded-2xl` for less rounding
- `rounded-none` for sharp corners

### Add/Remove Particles:
Change the array size:
```tsx
{[...Array(6)].map((_, i) => ...)} // 6 particles
{[...Array(10)].map((_, i) => ...)} // 10 particles
```

### Change Badge Text:
Modify the floating badge:
```tsx
<motion.div className="...">
  ✨ Available // Change this!
</motion.div>
```

---

## 📊 Performance Notes

All frame styles are optimized:
- ✅ GPU-accelerated transforms
- ✅ Hardware-accelerated animations
- ✅ No layout thrashing
- ✅ 60fps smooth performance
- ✅ Mobile-friendly

---

## 🚀 Quick Tips

1. **Keep it consistent**: Match your frame style to your overall design theme
2. **Test on mobile**: All styles are responsive, but test to be sure
3. **Consider your photo**: Some shapes work better with certain photo compositions
4. **Brand alignment**: Your current gradient theme works perfectly with glassmorphism

---

**Current choice (Glassmorphism) is perfect for a modern, professional dev portfolio!** ✨
