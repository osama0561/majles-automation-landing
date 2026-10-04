import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'مجلس الأتمتة+ | مساعد ذكي لمهمة حقيقية',
  description: 'مجلس الأتمتة+ يساعد الموظفين والمديرين في السعودية والخليج يبنون مساعدين أذكياء لمهام حقيقية في العمل.',
  openGraph: {
    title: 'مجلس الأتمتة+ | مساعد ذكي لمهمة حقيقية',
    description: 'ابنِ مساعدًا ذكيًا لمهمة من عملك — بدون خبرة تقنية.',
    type: 'website',
    locale: 'ar_SA',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
