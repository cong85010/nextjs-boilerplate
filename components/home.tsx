import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Zap, Package, Layers, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 md:h-[calc(100vh-50px)] ">
        <div className="relative container px-4 md:px-6 mx-auto h-full flex items-center justify-center">
          <div className="flex flex-col justify-center items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Next.js Boilerplate
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Jumpstart your Next.js projects with our feature-rich, customizable boilerplate.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild>
                <Link href="#get-started">Get Started</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://github.com/cong85010/nextjs-boilerplate">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      >
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Features
          </h2>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader>
                <Package className="h-8 w-8 mb-2" />
                <CardTitle>Pre-configured Setup</CardTitle>
              </CardHeader>
              <CardContent>
                Hit the ground running with our carefully curated tech stack and configurations.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Layers className="h-8 w-8 mb-2" />
                <CardTitle>Modular Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                Organized project structure for scalability and maintainability.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 mb-2" />
                <CardTitle>Performance Optimized</CardTitle>
              </CardHeader>
              <CardContent>
                Built with best practices for optimal loading speeds and user experience.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="get-started" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6  mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get Started</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Clone the repository and start building your next project in minutes.
              </p>
            </div>
            <div className="w-full md:min-w-[36rem] sm:max-w-sm space-y-2">
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto dark:bg-gray-800">
                <code className="text-start">
                  <p>git clone https://github.com/cong85010/nextjs-boilerplate.git</p>
                  <p>cd nextjs-boilerplate</p>
                  <p>npm install</p>
                  <p>npm run dev</p>
                </code>
              </pre>
            </div>
            <Button asChild>
              <Link href="https://github.com/cong85010/nextjs-boilerplate">View on GitHub</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
