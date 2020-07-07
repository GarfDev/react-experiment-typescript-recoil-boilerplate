import { atom } from 'recoil';

export const currentSearchKeywords = atom({
  key: 'CurrentKeywords',
  default: '',
});
