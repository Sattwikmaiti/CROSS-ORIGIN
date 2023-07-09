import React from 'react';
import { useTranslation } from 'react-i18next';
function TranslateAndTextToSpeech() {
    const { t } = useTranslation();
  
    const handleTextToSpeech = () => {
        console.log('Translate and text to speech')
      const text = t(
        'text'
      );
      const speech = new SpeechSynthesisUtterance(text);
     // speech.lang = 'bn-BD'; 
      speech.lang = 'bn-IN';// Use the Bengali (Bangladesh) language code
      speech.volume = 1;
      speech.rate = 1;
      speech.pitch = 1;
      window.speechSynthesis.speak(speech);
    };
  
    return (
      <div>
        <div>{t('text')}</div>
        <button onClick={handleTextToSpeech}>Text to Speech</button>
      </div>
    );
  }
  
  export default TranslateAndTextToSpeech;
  