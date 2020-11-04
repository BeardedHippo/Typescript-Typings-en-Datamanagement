import { state } from './state.js';
function getPersonalAlbums(object) {
    if (object.label === 'personal') {
        return object;
    }
}
let getFilteredObject = state.albums.filter(getPersonalAlbums);
console.log(state); /// De hele state object
console.log(getFilteredObject); /// Een filter
