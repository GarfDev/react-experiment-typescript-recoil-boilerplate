import axios from 'axios';
import { selector } from 'recoil';
import { currentSearchKeywords } from './atoms';

export const searchMusic = selector({
  key: 'searchMusicSelector',
  get: async ({ get }) => {
    const keywords = get(currentSearchKeywords);
    const newUrl = `https://chiasenhac.vn/search/real?q=${keywords}&type=json&rows=3&view_all=true`;
    const response = await axios.get(newUrl);
    return response.data[0].music.data;
  },
});
