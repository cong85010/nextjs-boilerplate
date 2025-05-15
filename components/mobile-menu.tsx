'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6 min-w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-[#0a0a20] text-white border-r-gray-800">
        <nav className="flex flex-col gap-4 mt-8">
          <a href="#" className="px-2 py-1 hover:text-blue-400">
            Trang chủ
          </a>
          <a href="#" className="px-2 py-1 hover:text-blue-400">
            Ưu điểm
          </a>
          <a href="#" className="px-2 py-1 hover:text-blue-400">
            Sản phẩm
          </a>
          <a href="#" className="px-2 py-1 hover:text-blue-400">
            Quốc gia
          </a>
          <a href="#" className="px-2 py-1 hover:text-blue-400">
            Chương trình giới thiệu
          </a>
          <a href="#" className="px-2 py-1 hover:text-blue-400">
            Khách hàng
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
