const searchSongs= () =>{
    const searchText=document.getElementById('search-field').value;
    const url=`https://api.lyrics.ovh/suggest/:${searchText}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displaySong(data.data))
}
const displaySong=songs=>{
    console.log(songs);
    const songList= document.getElementById('song-list');
    songs.forEach(element => {
        const songDiv=document.createElement('div');
        songDiv.className='single-result row align-items-center my-3 p-3';
        songDiv.innerHTML=` <div class="col-md-9">
        <h3 class="lyrics-name">${element.title}</h3>
        <p class="author lead">Album by <span>${element.artist.name}</span></p>
    </div>
    <div class="col-md-3 text-md-right text-center">
        <button class="btn btn-success">Get Lyrics</button>
    </div>`;
        songList.appendChild(songDiv);
        
    });

}