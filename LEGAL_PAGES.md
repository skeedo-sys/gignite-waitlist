# Legal Pages Implementation Guide

This document explains the new legal pages system implemented in the Gignite project.

## Overview

The project now includes a comprehensive legal framework with the following pages:

1. **Legal Hub** - Central directory of all legal documents
2. **Terms of Service** - Usage terms and service conditions  
3. **Privacy Policy** - Data collection and protection practices
4. **Cookie Policy** - Information about cookies and tracking

## File Structure

```
components/
├── LegalDocument.tsx      # Reusable legal document layout component
├── LegalHub.tsx          # Central legal documentation hub
├── TermsOfService.tsx    # Terms of Service page
├── PrivacyPolicy.tsx     # Privacy Policy page
├── CookiePolicy.tsx      # Cookie Policy page
└── Footer.tsx            # Updated with legal links

types/
└── legal.ts              # TypeScript types for legal documents

App.tsx                    # Updated with hash-based routing
```

## Navigation & Routing

The legal pages use **hash-based routing** for navigation:

- `#legal` - Opens the Legal Hub page
- `#tos` - Opens Terms of Service
- `#privacy` - Opens Privacy Policy  
- `#cookies` - Opens Cookie Policy

### How It Works

1. The `App.tsx` component listens for hash changes using the `hashchange` event
2. When a user clicks a link or navigates to a hash, the page updates accordingly
3. All layout (Navbar, Footer) remains consistent across pages

### Updating Links

To link to legal pages anywhere in your app:

```tsx
// Link to Legal Hub
<a href="#legal">View All Legal Documents</a>

// Link to specific document
<a href="#tos">Terms of Service</a>
<a href="#privacy">Privacy Policy</a>
<a href="#cookies">Cookie Policy</a>
```

## Component Architecture

### LegalDocument.tsx

A reusable layout component that handles the presentation of all legal documents.

**Props:**
- `documentTitle: string` - Main heading (e.g., "Gignite Terms of Service")
- `documentType: string` - Type for breadcrumb (e.g., "Terms of Service")
- `lastUpdated: string` - Date when document was last updated
- `sections: ContentSection[]` - Array of document sections
- `onNavigateHome?: () => void` - Callback to navigate back to legal hub

**Features:**
- Sticky table of contents sidebar (desktop only)
- Print and PDF download buttons
- Smooth scroll navigation between sections
- Mobile-responsive design
- Helper card with contact information

### LegalHub.tsx

Central directory listing all legal documents with:
- Document cards with descriptions
- Privacy and rights information sections
- FAQ accordion-style display
- Contact section

### Specific Document Components

Each legal document (TermsOfService.tsx, PrivacyPolicy.tsx, CookiePolicy.tsx) exports a component that:

1. Defines content sections as an array of `ContentSection` objects
2. Passes data to the `LegalDocument` component
3. Handles navigation callbacks

## ContentSection Interface

```typescript
interface ContentSection {
  id: string;           // Unique identifier for the section (used in anchors)
  icon: string;         // Material Symbols Outlined icon name
  title: string;        // Section heading
  content: React.ReactNode;  // Section content (can include JSX)
}
```

## Styling

All legal pages use:
- **Tailwind CSS** for styling
- **Material Symbols Outlined** for icons
- **Primary color**: `#0df259` (Gignite green)
- **Text color**: `#0d1c12` (Dark green)
- **Responsive design** for mobile, tablet, and desktop

### Key Classes Used

- `prose-section` - Typography styles for content
- `glass-nav` - Frosted glass effect for navbar
- `-scroll-mt-28` - Offset for sticky sidebar scroll anchors

## Updating Legal Content

To update the content of any legal document:

1. Open the respective component file (e.g., `TermsOfService.tsx`)
2. Find the `sections` array
3. Edit the relevant `ContentSection` object
4. Update the `lastUpdated` prop if needed

Example:

```tsx
const sections: ContentSection[] = [
  {
    id: 'section-id',
    icon: 'icon_name',
    title: 'Section Title',
    content: (
      <>
        <p>Your content here...</p>
        <ul className="list-disc">
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </>
    ),
  },
  // ... more sections
];
```

## Adding New Legal Documents

To add a new legal document:

1. Create a new component file in `components/` (e.g., `AUP.tsx`)
2. Import `LegalDocument` and create sections array
3. Export component that renders `LegalDocument`
4. Add to the documents array in `LegalHub.tsx`
5. Update `LegalDocumentType` in `types/legal.ts` if needed
6. Add corresponding hash route handling in `App.tsx`

## Customization

### Colors

The document uses theme colors defined in `index.html`:
- Primary: `#0df259` (green)
- Background: `#f5f8f6` (light)
- Text: `#0d1c12` (dark)

Change these in the Tailwind config within `index.html`.

### Icons

All icons use Google's Material Symbols Outlined font. Browse available icons at:
https://fonts.google.com/icons

### Breaking Content Into Columns

Use Tailwind grid utilities:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {/* Content */}
</div>
```

### Styling Content Cards

```tsx
<div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
  {/* Content */}
</div>
```

## Browser Compatibility

The legal pages work on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

Smooth scroll behavior is CSS-based with JavaScript fallback for hash navigation.

## Performance Considerations

- Legal documents are code-split by route (only loaded when navigation occurs)
- Static content means minimal re-renders
- Sidebar navigation is sticky but optimized for performance
- Mobile menu hides sticky sidebar for better UX

## Accessibility

- Semantic HTML structure with proper heading hierarchy
- ARIA labels on navigation elements
- Keyboard navigation support via standard links
- High contrast colors meet WCAG AA standards
- Color-independent iconography

## Testing

To test the legal pages:

1. Start the dev server: `npm run dev`
2. Navigate to `http://localhost:5173/#legal`
3. Click on document cards to view pages
4. Test table of contents navigation
5. Try print functionality
6. Test on mobile devices

## Future Enhancements

Potential improvements:
- PDF download functionality for legal documents
- Versioning system for document history
- Multi-language support (English/Bangla)
- Document signature/acceptance tracking
- Rich text editor for admins to update content
- Export to PDF with proper formatting
- Search functionality across documents
- Changelog/version history display
