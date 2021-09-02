import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './en.json'
import ru from './ru.json'
import uk from './uk.json'
/*
let count = 0;
setInterval( ()=> {
  count++;
  const lang = (count==1) ? "ru" : (count==2) ? "ua" : "en";
  if(count>=3) count=0;
  i18n.changeLanguage(lang)
}, 2000)
*/
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: en,
      ru: ru,
      uk: uk
    },
    lng: 'ru',
    fallbackLng: 'ru',

    interpolation: {
      escapeValue: false
    }
  })
