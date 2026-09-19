import "./globals.css";

export const metadata = {
  title: "Neithal Creative Minds | AI Ad Films & Social Media",
  description:
    "Neithal Creative Minds creates cinematic AI-powered ad films, brand videos and social media content for modern businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
