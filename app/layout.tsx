import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'مجلس الأتمتة+ | لا تكن الموظف الذي يستبدله AI',
  description: 'مجلس الأتمتة+ يساعد الموظفين والمديرين في السعودية والخليج يتعلمون AI داخل وظائفهم، يبنون مساعدين عمليين، ويقوون ملفاتهم بشهادات مهنية.',
  openGraph: {
    title: 'مجلس الأتمتة+ | تعلم AI داخل وظيفتك',
    description: 'لا تكن الموظف الذي يستبدله AI. كن الموظف الذي يستخدمه في عمله ويثبت مهارته.',
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
