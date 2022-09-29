import I18next from 'i18next';
import en from './Locales/en.json';
import * as RNLocalize from 'react-native-localize';

const languageDetector = {
    type: 'languageDetector', // If this is set to true, your detect function receives a callback function that you should call with your language, useful to retrieve your language stored in AsyncStorage for example
    async: true,
    detect: (callback: any) => {
        /* return detected language */
        /* callback('en'); */
        return callback(RNLocalize.getLocales()[0]?.languageCode);
    },
    init: () => {
        /* use services and options */
    },
    cacheUserLanguage: () => {
        /* cache language */
    }
};

I18next.use(languageDetector).init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en', //Should the app fallback to English if user locale doesn't exists
    resources: {
        en: en
    },
    react: {
        useSuspense: false
    }
});

/**
 * @param name pass name of string
 * @param params params are for dynamic value, its optional
 * @returns
 * The method we'll use instead of a regular string
 */
export function strings(name: string, params = {}) {
    return I18next.t(name, params);
}

export default I18next;
