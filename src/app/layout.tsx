import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ChronoCore™ | 6-Hour Autonomous Dog Enrichment & Gnaw Capsule",
  description:
    "Battery-free autonomous foraging capsule that keeps dogs happily engaged for 4–6 hours while you are away.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f172a] text-slate-100 min-h-screen flex flex-col selection:bg-amber-500/30 selection:text-amber-200`}
      >
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#0f172a]/90 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-transform">
                  <span className="text-slate-950 font-black text-sm tracking-tighter">CC</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg tracking-tight text-white leading-tight">ChronoCore™</span>
                  <span className="text-[10px] text-amber-400 font-mono tracking-wider uppercase">6-Hour Gnaw Capsule</span>
                </div>
              </Link>

              <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
                <Link href="/#mechanism" className="transition-colors hover:text-amber-400">
                  How It Works
                </Link>
                <Link href="/#customizer" className="transition-colors hover:text-amber-400">
                  Customize
                </Link>
                <Link href="/#reviews" className="transition-colors hover:text-amber-400">
                  Reviews
                </Link>
                <Link href="/#faq" className="transition-colors hover:text-amber-400">
                  FAQ
                </Link>
                <Link
                  href="/checkout"
                  className="px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-semibold hover:bg-amber-400 transition-all shadow-md shadow-amber-500/20"
                >
                  Checkout
                </Link>
                <Link
                  href="/order-tracking"
                  className="px-3.5 py-1.5 rounded-lg border border-slate-700 text-slate-300 hover:border-amber-500 hover:text-amber-300 transition-colors"
                >
                  Track Order
                </Link>
              </nav>

              <div className="flex md:hidden items-center gap-3">
                <Link
                  href="/checkout"
                  className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 text-xs font-semibold"
                >
                  Checkout
                </Link>
                <Link
                  href="/order-tracking"
                  className="px-3 py-1.5 rounded-lg border border-slate-700 text-slate-300 text-xs"
                >
                  Track
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-slate-800 bg-[#090d16] py-12 px-6">
          <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <span className="text-[10px] font-black text-slate-950">CC</span>
              </div>
              <span className="font-bold text-white text-sm">ChronoCore™ Autonomous Dog Enrichment</span>
            </div>
            <p className="text-xs text-slate-400 text-center">
              Designed for Happy While Away Hackathon • 100% Battery-Free Gyroscopic Pendulum Engineering
            </p>
            <div className="flex gap-4 text-slate-400 text-xs">
              <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              <Link href="/checkout" className="hover:text-amber-400 transition-colors">Checkout</Link>
              <Link href="/order-tracking" className="hover:text-amber-400 transition-colors">Order Tracking</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
