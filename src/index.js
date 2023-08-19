import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './components/locales/en/translation.json';
import ruTranslation from './components/locales/ru/translation.json';
import uaTranslation from './components/locales/ua/translation.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslation },
            ua: { translation: uaTranslation },
            ru: { translation: ruTranslation }
        },
        lng: 'en', // Установите язык по умолчанию
        fallbackLng: 'en', // Язык, используемый при отсутствии перевода
        interpolation: { escapeValue: false } // Разрешает использовать HTML-теги в переводах
    });

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
      />
    </BrowserRouter>
  </React.StrictMode>
);


