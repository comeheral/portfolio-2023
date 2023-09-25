/* import { Inter } from 'next/font/google' */
import '@/styles/main.scss';

/* const inter = Inter({ subsets: ['latin'] }) */

export const metadata = {
  title: 'Côme Héral - Coming soon',
  description: 'Côme Héral portfolio - Coming soon',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="h-full">
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  )
}
