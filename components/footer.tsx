export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          Designed and built with precision. Loosely inspired by modern developer portfolios, coded in Next.js with
          Tailwind CSS, and deployed on Vercel.
        </p>
        <p className="mt-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Md. Enamul Hoque Marzun. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
