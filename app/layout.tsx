// C:\Users\Abod\Downloads\WebPsych\app\layout.tsx
import './global.css'; // Import your global styles

// Optional: Define metadata for SEO
export const metadata = {
  title: 'WebPsych App', // Change to your desired title
  description: 'My awesome webpsych application', // Change description
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}