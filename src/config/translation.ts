import i18n from 'i18n-js';
import {I18nManager} from 'react-native';
import * as RNLocalize from 'react-native-localize';

import ptBr from './ptBr';

i18n.translations = {
  'pt-BR': {
    ...ptBr,
  },
};

i18n.fallbacks = true;

const defaultLanguage = {languageTag: 'pt-BR', isRTL: false};
const availableLanguages = Object.keys(i18n.translations);
const {languageTag, isRTL} =
  RNLocalize.findBestAvailableLanguage(availableLanguages) || defaultLanguage;

I18nManager.forceRTL(isRTL);
i18n.locale = languageTag;

export default i18n;
