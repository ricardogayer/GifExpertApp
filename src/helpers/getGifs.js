export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=CNA5URgrHYLhJUvM4U1NcotCsujjK3Bi&q=${ encodeURI(category) }&limit=50&offset=0&rating=g&lang=pt`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
    }))

    return gifs;

}