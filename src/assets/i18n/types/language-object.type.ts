import { TranslateKey } from '../enums/translate-key.enum';
import { ReplaceKeywords } from '../enums/replace-keywords.enum';

export type LanguageObject = {
  [K in TranslateKey]: K extends 'SYMBOL_ERROR'
    ? `${string}${ReplaceKeywords.SYMBOL}${string}`
    : K extends 'EMPTY'
    ? ''
    : string;
};
