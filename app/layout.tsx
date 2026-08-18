import './globals.css';

export const metadata = {
  title: 'BP Soluciones - Seguridad y Conectividad',
  description: 'Infraestructura inteligente de alta gama',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}