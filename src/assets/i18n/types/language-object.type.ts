import { TranslateKey } from '../enums/translate-key.enum';

export type LanguageObject = {
  [K in TranslateKey]: K extends 'SYMBOL_ERROR'
    ? `${string}${'{{symbol}}'}${string}`
    : string;
};
