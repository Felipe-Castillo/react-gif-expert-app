export const getGifs=async(category)=>{

        
    const url=`https:api.giphy.com/v1/gifs/search?api_key=1j76Z5aOYhMs4D8idobnhz0f3D2pIyQN&q=${encodeURI(category)}&limit=5`;
    const resp=await fetch (url);
    const {data} = await resp.json();

    const gifs=data.map(img=>{
        return{
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    })


    return gifs;
}