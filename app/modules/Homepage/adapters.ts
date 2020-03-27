import { TikiRegexs } from './constants';

export function tikiParser(data: string) {
  return {
    title: TikiRegexs.titleRegex.exec(data)?.[1],
    price: TikiRegexs.priceRegex.exec(data)?.[1],
    imgURL: TikiRegexs.imageRegex.exec(data)?.[0] || TikiRegexs.imageRegex2.exec(data)?.[0],
  };
}
