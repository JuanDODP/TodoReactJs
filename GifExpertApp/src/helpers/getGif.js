export const getGif=async(category)=>{
    const url =`https://api.giphy.com/v1/gifs/search?api_key=7DUm6n0obc22QqJqM5dyUqhxTKA0qfew&q=${category}&limit=10`
    const resp =await fetch(url);
    const {data=[]}=await resp.json()
    const  gifData=data.map(o=>({
        id:o.id,
        title:o.title,
        uriImage:o.images.downsized_medium.url
    }))
    // console.log(gifData)
    return gifData;
}