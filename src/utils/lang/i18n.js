import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translations: {
        // landing page
        menu: 'menu',
        contact_us: 'contact us',
        Wello_Horld: 'Wello Horld',
        our_partners: 'our partners',
        // Home Page
        add: '+  ADD',
      },
    },
    ja: {
      translations: {
        // landing page
        menu: 'アカウント',
        contact_us: 'お問い合わせ',
        Wello_Horld: 'QRコードをスキャン',
        our_partners: '私たちのパートナー',
        // Home Page
        add: '+  追加する',
      },
    },
  },
  fallbackLng: 'en',
  debug: true,
  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: false, // we use content as keys
  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
  },
  react: {
    wait: true,
  },
});

export default i18n;
