import NavBar from '@/components/NavBar/NavBar';
import customTheme from '@/utils/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Session } from 'next-auth';
import { AuthProvider } from '../providers';
 
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
        <AuthProvider session={session}>
          <NextIntlClientProvider messages={messages}>
            <ChakraProvider theme={customTheme}>
              <NavBar />
              {children}
            </ChakraProvider>
          </NextIntlClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}