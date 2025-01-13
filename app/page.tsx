import Link from 'next/link';
import { ArrowRight,Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <Sparkles className="h-12 w-12 text-primary" />
            <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Next.js Starter Kit
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              A feature-rich template to kickstart your next project with authentication, payments, and more
            </p>
            <div className="space-x-4">
              <Link href="/dashboard" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Setup Guide
            </h2>
          </div>

          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="space-y-2">
                <h3 className="font-bold">1. Initial Setup</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Merge template with AI TOOL provided code</li>
                  <li>• Reuse Clerk SignedIn/SignedOut components in navbar</li>
                  <li>• Verify only necessary shadcn/ui components</li>
                  <li>• Remove provided /ui/ folder</li>
                  <li>• Install components: npx shadcn@latest add [components]</li>
                </ul>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="space-y-2">
                <h3 className="font-bold">2. Configuration</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Set up all required ENV variables</li>
                  <li>• Test Clerk authentication with ngrok</li>
                  <li>• Configure Stripe webhooks and test events</li>
                  <li>• Connect Prisma with Supabase database</li>
                </ul>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="space-y-2">
                <h3 className="font-bold">3. Deployment Checks</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Run "npm run build" to verify build</li>
                  <li>• Fix any Prisma generate issues</li>
                  <li>• Check package.json commands</li>
                  <li>• Verify vercel.json configuration</li>
                  <li>• Review next.config.mjs settings</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}