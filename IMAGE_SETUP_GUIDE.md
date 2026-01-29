# Image Setup Guide for Presence Page

The Presence page is now configured to use images with specific names. To complete the setup, you need to add the following image files to the `src/assets/` folder:

## Pakistan Cities Images (JPG format)

Add these image files for Pakistani cities:

1. **karachi.jpg** - Image of Karachi (Main Headquarters)
2. **peshawar.jpg** - Image of Peshawar
3. **lahore.jpg** - Image of Lahore
4. **islamabad.jpg** - Image of Islamabad
5. **quetta.jpg** - Image of Quetta
6. **multan.jpg** - Image of Multan
7. **faisalabad.jpg** - Image of Faisalabad

**Recommended dimensions:** 400x300px or larger (will be displayed at 180px height)

## International Countries Images (GIF format)

Add these GIF files for international countries:

1. **uae.gif** - GIF for United Arab Emirates
2. **saudi.gif** - GIF for Saudi Arabia
3. **uk.gif** - GIF for United Kingdom
4. **canada.gif** - GIF for Canada
5. **usa.gif** - GIF for United States

**Recommended dimensions:** 400x300px or larger (will be displayed at 180px height)

## File Structure

After adding the images, your `src/assets/` folder should contain:

```
src/assets/
├── karachi.jpg
├── peshawar.jpg
├── lahore.jpg
├── islamabad.jpg
├── quetta.jpg
├── multan.jpg
├── faisalabad.jpg
├── uae.gif
├── saudi.gif
├── uk.gif
├── canada.gif
├── usa.gif
└── (other existing files)
```

## How to Add Images

1. Prepare your images in JPG format for cities and GIF format for countries
2. Name them exactly as listed above (case-sensitive on Linux/Mac)
3. Place them in the `src/assets/` folder
4. The page will automatically display them

## Image Display

- **City cards:** Display at 180px height with cover fit
- **Country cards:** Display at 180px height with cover fit
- **Hover effect:** Images zoom in slightly on hover
- **Fallback:** If images are missing, a gradient background will show

## Notes

- Images will be automatically optimized by the build process
- Use high-quality images for best results
- Ensure images are properly named (exact spelling and case)
- GIF format is recommended for country images to add visual interest
- JPG format is recommended for city images for better compression
