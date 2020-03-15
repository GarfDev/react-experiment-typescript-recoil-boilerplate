export function tikiParser(data: string) {
  const titleRegex = /meta name="title" content="(.*?)"/;
  const priceRegex = /<span class="product-price__current-price">(.*?)</;
  const imageRegex = /large_url":"(.*?)"/;
  return {
    title: titleRegex.exec(data)?.[1],
    price: priceRegex.exec(data)?.[1],
    imgURL: imageRegex.exec(data)?.[1],
  };
}
