import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OBS Studio Mobile - Gravação e Streaming Profissional',
  description: 'Aplicativo oficial de gravação e streaming com suporte a PNGtuber/VTuber, screen capture e transmissão ao vivo para Discord, WhatsApp e outras plataformas.',
  keywords: 'OBS, streaming, gravação, mobile, Android, PNGtuber, VTuber, Discord, WhatsApp',
  authors: [{ name: 'OBS Studio Mobile' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://obs-studio-mobile.com.br',
    title: 'OBS Studio Mobile',
    description: 'Gravação e streaming profissional no seu celular',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
