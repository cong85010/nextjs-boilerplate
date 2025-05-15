'use client';
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';
// import { useEffect } from 'react';
// import { useTranslations } from 'next-intl';

// export default function GlobalError({
//   error,
//   reset,
// }: {
//   error: Error & { digest?: string };
//   reset: () => void;
// }) {
//   useEffect(() => {
//     // Log the error to an error reporting service
//     console.error(error);
//   }, [error]);

//   const t = useTranslations('GlobalError');

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="text-center p-8 bg-white rounded-lg shadow-md">
//         <h1 className="text-6xl font-bold text-gray-800 mb-4">500</h1>
//         <h2 className="text-2xl font-semibold text-gray-600 mb-4">{t('pageError')}</h2>
//         <p className="text-gray-500 mb-8">{t('oops')}</p>
//         <Link href="/">
//           <Button variant="outline">{t('goBackHome')}</Button>
//         </Link>
//         <Button variant="default" onClick={reset} style={{ marginLeft: 10 }}>
//           {t('reload')}
//         </Button>
//       </div>
//     </div>
//   );
// }

import React from 'react';

export default function globalError() {
  return <div></div>;
}
