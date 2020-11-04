import { state } from './state.js';
function getPersonalAlbums(album) {
    if (album.label === 'personal') {
        return album;
    }
}
let getFilteredAlbum = state.getAllAlbums.filter(getPersonalAlbums);
console.log(state); /// De hele state object
// console.log(getFilteredAlbum); /// Een filter
