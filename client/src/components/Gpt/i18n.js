import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Language resources
const resources = {
  en: {
    translation: {
      Greeting: 'Hello',
      goodbye: 'Goodbye',
      text:'Cross Origin is driven by a powerful vision to bridge the gap between students and valuable job/internship opportunities they often miss out on. We, a dynamic platform. Cross Origin is driven by a powerful vision to bridge the gap between students and valuable job/internship opportunities they often miss out on. We, a dynamic platform'
    },
  },
  bn: {
    translation: {
      Greeting: 'হ্যালো',
      goodbye: 'বিদায়',
      text:'ক্রস অরিজিন শিক্ষার্থীদের এবং মূল্যবান চাকরি/ইন্টার্নশিপের সুযোগগুলি প্রায়শই মিস করে তাদের মধ্যে ব্যবধান দূর করার জন্য একটি শক্তিশালী দৃষ্টি দ্বারা চালিত হয়। আমরা, একটি গতিশীল প্ল্যাটফর্ম। ক্রস অরিজিন শিক্ষার্থীদের এবং মূল্যবান চাকরি/ইন্টার্নশিপের সুযোগগুলি প্রায়শই মিস করে তাদের মধ্যে ব্যবধান দূর করার জন্য একটি শক্তিশালী দৃষ্টি দ্বারা চালিত হয়। আমরা, একটি গতিশীল প্ল্যাটফর্ম'
    },
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Fallback language if translation is not available for the current language
    debug: true, // Enable debug mode for development
    resources,
    interpolation: {
      escapeValue: false, // Disable HTML escaping of translated strings
    },
  });

export default i18n;
