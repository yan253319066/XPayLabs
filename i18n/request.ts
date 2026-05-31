import { getRequestConfig } from 'next-intl/server';
import { en } from '../lib/translations/en';

export default getRequestConfig(async () => {
  return {
    locale: 'en',
    messages: en,
  };
});
