// Dit is een voorbeeld van een basis front-end waarin de state geimporteerd wordt voor alle data.

import { state } from './state.js'

function getPersonalAlbums(album: any) {
    if (album.label === 'personal') {
        return album;
    }
}

let getFilteredAlbum = state.getAllAlbums.filter(getPersonalAlbums);

console.log(state); /// De hele state object
// console.log(getFilteredAlbum); /// Een filter