import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://neithalcreativeminds.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Neithal Creative Minds | AI Ad Films, Brand Videos & Social Media",
    template: "%s | Neithal Creative Minds",
  },

  description:
    "Neithal Creative Minds is an AI-powered creative studio creating cinematic AI ad films, brand videos, product videos, social media content and creative campaigns for modern businesses.",

  keywords: [
    "Neithal Creative Minds",
    "AI ad film",
    "AI advertisement",
    "AI video production",
    "AI film production",
    "ad film production",
    "advertising agency",
    "creative agency",
    "brand video production",
    "product video production",
    "social media management",
    "social media marketing",
    "creative strategy",
    "AI marketing",
    "cinematic advertisement",
    "AI creative studio",
    "Ad Film",
    "Business Promotion",
    "Instagram Marketing",
    "Instagram Ads",
    "Facebook Marketing",
    "Facebook Ads",
    "Whatsapp Marketing",
  ],

  authors: [
    {
      name: "Neithal Creative Minds",
    },
  ],

  creator: "Neithal Creative Minds",
  publisher: "Neithal Creative Minds",

  applicationName: "Neithal Creative Minds",

  category: "creative agency",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Neithal Creative Minds",

    title:
      "Neithal Creative Minds | AI Ad Films, Brand Videos & Social Media",

    description:
      "Cinematic AI-powered ad films, brand videos, product content and social media creative solutions for modern businesses.",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Neithal Creative Minds",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Neithal Creative Minds | AI Ad Films & Creative Content",

    description:
      "AI-powered ad films, brand videos, product content and social media creative solutions.",

    images: ["/logo.png"],
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",

    name: "Neithal Creative Minds",

    url: siteUrl,

    description:
      "AI-powered creative studio creating cinematic ad films, brand videos, product videos, social media content and creative campaigns.",

    image: `${siteUrl}/logo.png`,

    brand: {
      "@type": "Brand",
      name: "Neithal Creative Minds",
    },

    sameAs: [],
  };

  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}