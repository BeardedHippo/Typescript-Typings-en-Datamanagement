import { allTracks } from './tracks.js';
import { allAlbums } from './albums.js';
export class State {
    constructor() {
        this.albums = [];
        this.tracks = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new State();
        return this.instance;
    }
    addAlbum(albumObject) {
        if (albumObject.singlesList) {
            let listOfSingleIndexes = [];
            let orderedSinglesList = [];
            albumObject.singlesList.forEach((single) => {
                function findAlbumIDIndex(albumID) {
                    return albumID === albumObject.albumID;
                }
                let getAlbumIDIndex = single.albumID.findIndex(findAlbumIDIndex);
                listOfSingleIndexes.push(single.albumIndex[getAlbumIDIndex]);
            });
            listOfSingleIndexes.sort((a, b) => a - b);
            listOfSingleIndexes.forEach(index => {
                function getFilteredSingle(single) {
                    function findAlbumIDIndex(albumID) {
                        return albumID === albumObject.albumID;
                    }
                    let getAlbumIDIndex = single.albumID.findIndex(findAlbumIDIndex);
                    if (single.albumIndex[getAlbumIDIndex] === index) {
                        return single;
                    }
                }
                let filteredSingle = albumObject.singlesList.filter(getFilteredSingle);
                orderedSinglesList.push(filteredSingle[0]);
            });
            albumObject.singlesList = orderedSinglesList;
        }
        if (albumObject.tracksList) {
            let listOfTrackIndexes = [];
            let orderedTracksList = [];
            albumObject.tracksList.forEach((track) => {
                function findAlbumIDIndex(albumID) {
                    return albumID === albumObject.albumID;
                }
                let getAlbumIDIndex = track.albumID.findIndex(findAlbumIDIndex);
                listOfTrackIndexes.push(track.albumIndex[getAlbumIDIndex]);
            });
            listOfTrackIndexes.sort((a, b) => a - b);
            listOfTrackIndexes.forEach(index => {
                function getFilteredTrack(track) {
                    function findAlbumIDIndex(albumID) {
                        return albumID === albumObject.albumID;
                    }
                    let getAlbumIDIndex = track.albumID.findIndex(findAlbumIDIndex);
                    if (track.albumIndex[getAlbumIDIndex] === index) {
                        return track;
                    }
                }
                let filteredTrack = albumObject.tracksList.filter(getFilteredTrack);
                orderedTracksList.push(filteredTrack[0]);
            });
            albumObject.tracksList = orderedTracksList;
        }
        const newAlbum = albumObject;
        this.albums.push(newAlbum);
    }
    addTrack(trackObject) {
        const newTrack = trackObject;
        this.tracks.push(newTrack);
    }
}
/// Initialise state
export const state = State.getInstance();
/// Initialise all albums and tracks
allTracks();
allAlbums();
