export const viewports = {
  ZERO: 0,
  MIN: 320,
  XS: 400,
  S: 640,
  M: 768,
  L: 1024,
  XL: 1280,
  XXL: 1440,
  XXXL: 1536,
};

export const breakpoints = {
  ZERO: `(min-width: ${viewports.ZERO}px)`,
  MIN: `(min-width: ${viewports.MIN}px)`,
  // small phones
  XS: `(min-width: ${viewports.XS}px)`,
  // phones
  S: `(min-width: ${viewports.S}px)`,
  // portrait tablets
  M: `(min-width: ${viewports.M}px)`,
  // landscape tablets
  L: `(min-width: ${viewports.L}px)`,
  // laptops
  XL: `(min-width: ${viewports.XL}px)`,
  // desktops
  XXL: `(min-width: ${viewports.XXL}px)`,
  // large desktops
  XXXL: `(min-width: ${viewports.XXXL}px)`,
};

// const fallbackImage =
//   'https://stylizedbay.com/wp-content/uploads/2018/02/unknown-avatar.jpg'
// const apiKey = 'AIzaSyCzb6SI_JRrp6xLLYV617Ary6n59h36ros'
// const cx = '004286675445984025592:ypgpkv9fjd4'
// const baseUrl = `https://www.googleapis.com/customsearch/v1`

// const getCharacterImage = async (name) => {
//   const url = `${baseUrl}?key=${apiKey}&cx=${cx}&searchType=image&q=image::ghibli%20${name}`
//   const request = await fetch(url)
//   const result = await request.json()
//   const characterImage = result?.items[0]?.link
//   return characterImage || fallbackImage
// }
