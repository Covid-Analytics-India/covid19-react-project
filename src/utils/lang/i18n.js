import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translations: {
        // Page Tabs
        Home: 'Home',
        News: 'News',
        Sort_By: 'Sort By',
        Top_Headlines: 'Top Headlines',
        Latest_News: 'Latest News',
        Test_Yourself: 'Test Yourself',
      },
    },
    hi: {
      translations: {
        // Page Tabs
        Home: 'घर',
        News: 'समाचार',
        Sort_By: 'क्रमबद्ध करें',
        Top_Headlines: 'शीर्ष सुर्खियाँ',
        Latest_News: 'ताज़ा खबर',
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
