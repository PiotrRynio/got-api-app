import { remove } from 'diacritics';

export const normalizeAndSquashText = (text: string): string =>
  remove(text.trim().toLowerCase().replaceAll(' ', ''));
