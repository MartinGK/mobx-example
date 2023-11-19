'use client';

export default function PatternLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 justify-center">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex text-black">
        {children}
      </div>
    </main>
  )
}
