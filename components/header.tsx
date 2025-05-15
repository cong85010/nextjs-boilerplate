'use client';

import Image from 'next/image';
import { MobileMenu } from './mobile-menu';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const t = useTranslations('Header');
  const router = useRouter();
  const pathname = usePathname();

  function handleLocaleChange(locale: string) {
    // Remove the current locale from the pathname and add the new one
    const segments = pathname.split('/').filter(Boolean);
    if (['en', 'vi'].includes(segments[0])) {
      segments[0] = locale;
    } else {
      segments.unshift(locale);
    }
    router.push('/' + segments.join('/'));
  }

  return (
    <header className="container mx-auto py-4 px-4 md:px-6 ">
      <nav className="flex flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-bold">LOGO</div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-blue-400">
              {t('home')}
            </a>
            <a href="#" className="hover:text-blue-400">
              {t('advantages')}
            </a>
            <a href="#" className="hover:text-blue-400">
              {t('products')}
            </a>
            <a href="#" className="hover:text-blue-400">
              {t('countries')}
            </a>
            <a href="#" className="hover:text-blue-400">
              {t('referralProgram')}
            </a>
            <a href="#" className="hover:text-blue-400">
              {t('customers')}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Select defaultValue={pathname.split('/')[1] || 'en'} onValueChange={handleLocaleChange}>
            <SelectTrigger className="md:w-[180px]">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="vi">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/vi.png"
                      alt="Vietnam flag"
                      width={30}
                      height={20}
                      className="rounded"
                    />
                    <span className="hidden sm:inline"> {t('vietnamese')}</span>
                  </div>
                </SelectItem>
                <SelectItem value="en">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/en.png"
                      alt="English flag"
                      width={30}
                      height={20}
                      className="rounded"
                    />
                    <span className="hidden sm:inline"> {t('english')}</span>
                  </div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="border-white  hidden sm:flex bg-transparent">
              {t('register')}
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">{t('login')}</Button>
          </div>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
