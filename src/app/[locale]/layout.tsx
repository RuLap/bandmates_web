import NavBar from '@/components/NavBar/NavBar';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Session } from 'next-auth';
import { Providers } from '../providers';
 
export default async function LocaleLayout({
  children,
  params: {locale, session}
}: {
  children: React.ReactNode;
  params: {locale: string, session: Session};
}) {
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers session={session}>
            <NavBar />
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}