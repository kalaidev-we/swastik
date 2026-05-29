import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "Swastik & Company | Premium Hardware & Interior Solutions Erode",
  description: "Swastik Trading Company – Mr. Locks is Erode's premium hardware store supplying modular kitchen fittings, handles, architectural hinges, security locks, and wood adhesives since 1991.",
  keywords: "Best Hardware Shop in Erode, Premium Hardware Store Tamil Nadu, Modular Kitchen Fittings, Locks and Handles Erode, Architectural Hardware Supplier, Interior Hardware Solutions",
  metadataBase: new URL("https://swastikandcompany.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Swastik & Company | Premium Hardware & Interior Solutions",
    description: "Swastik Trading Company – Mr. Locks is Erode's premium hardware store supplying modular kitchen fittings, handles, architectural hinges, security locks, and wood adhesives since 1991.",
    url: "https://swastikandcompany.in",
    siteName: "Swastik & Company",
    images: [
      {
        url: "/hero_showroom.png",
        width: 1200,
        height: 630,
        alt: "Swastik & Company Premium Showroom",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Swastik Trading Company - Mr. Locks",
    "image": "https://swastikandcompany.in/hero_showroom.png",
    "telephone": "919962470959",
    "email": "swastiktradingcompany1991@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "20, Muthusamy Street, Sathy Road",
      "addressLocality": "Erode",
      "addressRegion": "Tamil Nadu",
      "postalCode": "638001",
      "addressCountry": "IN"
    },
    "url": "https://swastikandcompany.in/",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:30",
      "closes": "20:00"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="antialiased select-none bg-bg-main text-text-main overflow-x-hidden">
        {/* Custom cursor active only on hoverable desktop platforms */}
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
