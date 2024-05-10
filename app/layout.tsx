import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Zote UI',
    default: 'Zote UI',
  },
  description: 'The greatest TTRPG note-taking app of all time.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-slate-800`}>{children}</body>
    </html>
  );
}