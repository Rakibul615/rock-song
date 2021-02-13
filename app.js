const searchSongs= () =>{
    const searchText=document.getElementById('search-field').value;
    const url=`https://api.lyrics.ovh/suggest/:${searchText}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displaySong(data.data))
}
const displaySong= data=>{
    data.forEach(data => {console.log(data.title)
        
    });
}