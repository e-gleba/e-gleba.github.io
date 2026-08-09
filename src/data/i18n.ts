import en from './en.json';
import ru from './ru.json';
import zh from './zh.json';

export const languages = { en, ru, zh } as const;
export type Language = keyof typeof languages;

export function isLanguage(value: string): value is Language {
  return value in languages;
}
