import type { Metadata } from "next";
import { Inter, Noto_Sans_Telugu, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const notoTelugu = Noto_Sans_Telugu({
  variable: "--font-noto-telugu",
  subsets: ["telugu", "latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akkaskitchen.com"),
  title: "AKKAS KITCHEN · అక్క ఇంటి వంట | Homemade Cloud Kitchen, Madhapur Hyderabad",
  description:
    "Authentic homestyle food in Madhapur, Hyderabad. Fresh hand-rolled phulkas on tawa, small-pot pressure cooker chicken curry, steamed rice, and Dum Biryani. WhatsApp: 9703235395.",
  keywords: [
    "Akka's Kitchen",
    "అక్క ఇంటి వంట",
    "homemade food Madhapur",
    "cloud kitchen HITEC City",
    "home cooked chicken curry Hyderabad",
    "phulkas delivery Madhapur",
    "homemade biryani Hyderabad",
    "Telugu home food delivery",
  ],
  authors: [{ name: "AKKAS KITCHEN" }],
  creator: "AKKAS KITCHEN",
  publisher: "AKKAS KITCHEN",
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    title: "AKKAS KITCHEN · అక్క ఇంటి వంట | Authentic Homemade Food in Madhapur",
    description:
      "Craving real home-cooked food? Hand-rolled phulkas, authentic spicy chicken curry, and steamed rice cooked just like akka makes it at home. Order on WhatsApp.",
    url: "https://akkaskitchen.com",
    siteName: "AKKAS KITCHEN",
    images: [
      {
        url: "/images/meal.jpg",
        width: 720,
        height: 940,
        alt: "Akka's Kitchen Signature Meal - Chicken Curry, Phulkas and Rice",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AKKAS KITCHEN · అక్క ఇంటి వంట · Madhapur",
    description:
      "Fresh, authentic homemade food delivered in Madhapur & HITEC City. Order easily on WhatsApp.",
    images: ["/images/meal.jpg"],
  },
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "AKKAS KITCHEN",
  alternateName: "అక్క ఇంటి వంట",
  description:
    "Authentic homemade food cloud kitchen in Madhapur, Hyderabad. Small-batch pressure cooked curries and hand-rolled tawa phulkas.",
  telephone: "+919703235395",
  servesCuisine: ["South Indian", "Andhra", "Telugu", "Homemade"],
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Madhapur, Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.4483,
    longitude: 78.3915,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "11:30",
      closes: "22:30",
    },
  ],
  hasMenu: "https://akkaskitchen.com/#menu",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable} ${notoTelugu.variable}`}
    >
      <head>
        {/* Hide .reveal content only when JS runs; un-hide after 4s if the reveal script never starts */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(d){d.classList.add('js');setTimeout(function(){if(!window.__revealReady)d.classList.remove('js')},4000)})(document.documentElement)",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
