import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'User List',
  description: 'A simple user list fetched from our backend API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}