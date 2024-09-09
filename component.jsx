/**
 * v0 by Vercel.
 * @see https://v0.dev/t/QAoAF5yIeTy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 * newwwwwwwww
 * 
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] text-[#0f172a]">
      <header className="container mx-auto flex items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <DiamondIcon className="h-8 w-8 text-[#4f46e5]" />
          <span className="text-2xl font-bold">Swooshed</span>
        </Link>
        <nav className="hidden space-x-4 sm:flex">
          <Link
            href="#"
            className="rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-[#4f46e5]/20"
            prefetch={false}
          >
            How It Works
          </Link>
          <Link
            href="#"
            className="rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-[#4f46e5]/20"
            prefetch={false}
          >
            Library
          </Link>
          <Link
            href="#"
            className="rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-[#4f46e5]/20"
            prefetch={false}
          >
            What We Authenticate
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="#"
            className="rounded-lg p-2 text-sm font-medium transition-colors hover:bg-[#4f46e5]/20"
            prefetch={false}
          >
            <InstagramIcon className="h-6 w-6" />
          </Link>
          <Link
            href="#"
            className="rounded-lg p-2 text-sm font-medium transition-colors hover:bg-[#4f46e5]/20"
            prefetch={false}
          >
            <PhoneIcon className="h-6 w-6" />
          </Link>
          <Link
            href="#"
            className="rounded-lg p-2 text-sm font-medium transition-colors hover:bg-[#4f46e5]/20"
            prefetch={false}
          >
            <PhoneIcon className="h-6 w-6" />
          </Link>
        </div>
      </header>
      <main>
        <section className="container mx-auto flex flex-col items-center justify-center gap-8 px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Authenticate Your Luxury Goods
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[#64748b]">
              Our cutting-edge platform empowers you to verify the authenticity of your luxury items with ease.
              Experience the future of product authentication.
            </p>
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] px-8 py-4 text-lg font-medium text-[#f8fafc] shadow-lg transition-colors hover:from-[#3730a3] hover:to-[#6d28d9]"
          >
            Start Authentication
          </Button>
        </section>
        <section className="container mx-auto grid grid-cols-1 gap-8 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="rounded-2xl bg-[#f8fafc]/50 p-6 backdrop-blur-lg">
            <ScanIcon className="h-12 w-12 text-[#4f46e5]" />
            <h3 className="mt-4 text-2xl font-bold">Scan & Upload</h3>
            <p className="mt-2 text-[#64748b]">
              Scan your product's unique identifier and upload the image to our secure platform.
            </p>
          </div>
          <div className="rounded-2xl bg-[#f8fafc]/50 p-6 backdrop-blur-lg">
            <BadgeCheckIcon className="h-12 w-12 text-[#4f46e5]" />
            <h3 className="mt-4 text-2xl font-bold">Verify Authenticity</h3>
            <p className="mt-2 text-[#64748b]">
              Our advanced AI-powered algorithms analyze your product's details and provide a comprehensive authenticity
              report.
            </p>
          </div>
          <div className="rounded-2xl bg-[#f8fafc]/50 p-6 backdrop-blur-lg">
            <BadgeIcon className="h-12 w-12 text-[#4f46e5]" />
            <h3 className="mt-4 text-2xl font-bold">Receive Certificate</h3>
            <p className="mt-2 text-[#64748b]">
              Once your product is verified, you'll receive a digital certificate to showcase its authenticity.
            </p>
          </div>
        </section>
        <section className="container mx-auto grid grid-cols-1 gap-8 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="rounded-2xl bg-[#f8fafc]/50 p-6 backdrop-blur-lg">
            <CrownIcon className="h-12 w-12 text-[#4f46e5]" />
            <h3 className="mt-4 text-2xl font-bold">Luxury Brands</h3>
            <p className="mt-2 text-[#64748b]">
              We authenticate a wide range of luxury brands, including handbags, watches, jewelry, and more.
            </p>
          </div>
          <div className="rounded-2xl bg-[#f8fafc]/50 p-6 backdrop-blur-lg">
            <LibraryIcon className="h-12 w-12 text-[#4f46e5]" />
            <h3 className="mt-4 text-2xl font-bold">Extensive Library</h3>
            <p className="mt-2 text-[#64748b]">
              Our extensive library of product data and AI models ensures accurate and reliable authentication.
            </p>
          </div>
          <div className="rounded-2xl bg-[#f8fafc]/50 p-6 backdrop-blur-lg">
            <ShieldIcon className="h-12 w-12 text-[#4f46e5]" />
            <h3 className="mt-4 text-2xl font-bold">Secure Platform</h3>
            <p className="mt-2 text-[#64748b]">
              Your product data is stored securely, and our platform adheres to the highest security standards.
            </p>
          </div>
        </section>
      </main>
      <footer className="container mx-auto flex flex-col items-center justify-between gap-4 border-t border-[#f8fafc]/50 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-[#64748b]">&copy; 2024 Swooshed. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="rounded-lg p-2 text-sm font-medium transition-colors hover:bg-[#4f46e5]/20"
            prefetch={false}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="rounded-lg p-2 text-sm font-medium transition-colors hover:bg-[#4f46e5]/20"
            prefetch={false}
          >
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  )
}

function BadgeCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}


function BadgeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  )
}


function CrownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
      <path d="M5 21h14" />
    </svg>
  )
}


function DiamondIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LibraryIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 6 4 14" />
      <path d="M12 6v14" />
      <path d="M8 8v12" />
      <path d="M4 4v16" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function ScanIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    </svg>
  )
}


function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}