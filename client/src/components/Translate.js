import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import TranslateAndTextToSpeech from './TranslateAndTextToSpeech';
function Translate() {
  return (
    <I18nextProvider i18n={i18n}>
      <TranslateAndTextToSpeech />
    </I18nextProvider>
  );
}

export default Translate;
