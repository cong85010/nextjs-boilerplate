import { Zap } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import ThemeButton from './themeButton';

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 z-10 bg-white/50 shadow-md dark:bg-gray-900 backdrop-blur-sm">
      <Link className="flex items-center justify-center" href="#">
        <Zap className="h-6 w-6" />
        <span className="sr-only">Next.js Boilerplate</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#get-started"
        >
          Get Started
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="https://github.com/cong85010/nextjs-boilerplate"
        >
          GitHub
        </Link>
        <ThemeButton />
      </nav>
    </header>
  );
}
