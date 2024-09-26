import createMiddleware from 'next-intl/middleware';
import {routing} from '@/i18n/routing';
import { CustomMiddleware } from './chain';

export function withI18nMiddleware(middleware: CustomMiddleware): CustomMiddleware { 
  return createMiddleware(routing);
}

export const config = {
  matcher: ['/', '/(ru|en)/:path*']
};