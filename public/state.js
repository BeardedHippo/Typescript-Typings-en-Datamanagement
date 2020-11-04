import { allNewTracks } from './tracks.js';
import { allNewAlbums } from './albums.js';
import { InitAllAlbums, CreateAlbum } from './albumClasses.js';
import { InitAllTracks } from './trackClasses.js';
export class State {
    constructor() {
        this.albums = [];
        this.tracks = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        return new State();
    }
    createAlbumID() {
        let stateAlbums = this.albums;
        let albumID = 0;
        if (stateAlbums.length !== 0) {
            let listOfAlbumIDs = [];
            stateAlbums.forEach((album) => {
                listOfAlbumIDs.push(album.albumID);
            });
            let whileValidator = listOfAlbumIDs.includes(albumID);
            while (whileValidator === true) {
                albumID = albumID + 1;
                if (listOfAlbumIDs.includes(albumID) === false) {
                    whileValidator = false;
                }
            }
        }
        return albumID;
    }
    getTrackOrSinglesListByID(albumID, listType) {
        function getTracksOrSingles(track) {
            if (track.single === true && track.albumID.includes(albumID) === true && listType === 'singlesList') {
                return track;
            }
            else if (track.albumID.includes(albumID) === true && listType === 'tracksList') {
                return track;
            }
        }
        return state.getAllTracks.filter(getTracksOrSingles);
    }
    addAlbum(albumObject, sortType) {
        let listOfSingleOrTrackIDs = []; // List with all ID's from all songs, that are connected to an album
        let orderedSinglesList = []; // List that will contain singles
        let orderedTracksList = []; // List that will contain tracks
        let orderedSingleOrTrackList = []; // List that will contain a sortedd single or track
        // Function to sort a single or track
        function sortAlbumSinglesOrTracks(listType) {
            let allSinglesOrTracks = albumObject[listType];
            listOfSingleOrTrackIDs = []; // Reset the list
            orderedSingleOrTrackList = []; // Reset the list
            // Function that returns the index of the current album ID within the array of album IDs of a song or track
            function findAlbumIDIndex(albumID) {
                return albumID === albumObject.albumID;
            }
            // Foreach loop to push all album IDs of singles or tracks that are connected to the current album
            allSinglesOrTracks.forEach((singleOrTrack) => {
                let getAlbumIDIndex = singleOrTrack.albumID.findIndex(findAlbumIDIndex);
                let singleOrTrackAlbumID = singleOrTrack.albumIndex[getAlbumIDIndex];
                listOfSingleOrTrackIDs.push(singleOrTrackAlbumID);
            });
            // Sorts all the album IDs from ascending
            listOfSingleOrTrackIDs.sort((a, b) => a - b);
            // Function that iterates on every track or single to find the track or single whose album ID, with corresponding index, 
            // matches the ID from the sorted list thats being iterated on
            function getFilteredSingleOrTrack(index) {
                function filterAllSinglesOrTracks(singleOrTrack) {
                    let AlbumIDIndexOfSingleOrTrack = singleOrTrack.albumID.findIndex(findAlbumIDIndex);
                    if (singleOrTrack.albumIndex[AlbumIDIndexOfSingleOrTrack] === index) {
                        return singleOrTrack;
                    }
                }
                // Returns an array with one track or single which gets pushed into an ordered list
                let filteredSingleOrTrack = allSinglesOrTracks.filter(filterAllSinglesOrTracks);
                return filteredSingleOrTrack[0];
            }
            // Conditioners with foreach loops to control when tracks or singles get pushed and send to the state
            // It's done by a foreach that calls a filter function on each iterated item in the list of sorted album IDs, that are connected to the tracks or singles
            if (sortType === 'tracksAndSinglesList') {
                listOfSingleOrTrackIDs.forEach(index => {
                    orderedSingleOrTrackList.push(getFilteredSingleOrTrack(index));
                });
            }
            else if (albumObject.tracksList) {
                listOfSingleOrTrackIDs.forEach(index => {
                    orderedTracksList.push(getFilteredSingleOrTrack(index));
                });
            }
            else if (albumObject.singlesList) {
                listOfSingleOrTrackIDs.forEach(index => {
                    orderedSinglesList.push(getFilteredSingleOrTrack(index));
                });
            }
        }
        // Conditioners to control when a property of the albumObject (the object thats being pushed into the state) gets changed
        if (sortType === 'tracksAndSinglesList') {
            sortAlbumSinglesOrTracks('singlesList');
            albumObject.singlesList = orderedSingleOrTrackList;
            sortAlbumSinglesOrTracks('tracksList');
            albumObject.tracksList = orderedSingleOrTrackList;
        }
        else if (sortType === 'singlesList') {
            sortAlbumSinglesOrTracks('singlesList');
            albumObject.singlesList = orderedSinglesList;
        }
        else if (sortType === 'tracksList') {
            sortAlbumSinglesOrTracks('tracksList');
            albumObject.tracksList = orderedTracksList;
        }
        // Update the state
        this.albums.push(albumObject);
    }
    addTrack(arrayOfTracks) {
        this.tracks.push(...arrayOfTracks);
    }
    initTracks() {
        let initAllTracks = new InitAllTracks(allNewTracks);
        this.addTrack(initAllTracks.allNewTracks);
    }
    initAlbums() {
        let initAllAlbums = new InitAllAlbums(allNewAlbums);
        initAllAlbums.allNewAlbums.forEach((albumObject) => {
            let sortType = '';
            let newAlbumID = this.createAlbumID();
            let newAlbum = new CreateAlbum(newAlbumID, albumObject.albumName, albumObject.albumDesc, albumObject.specialEdition, albumObject.demo, albumObject.karaoke, albumObject.live, albumObject.label, albumObject.totalTracks, albumObject.albumType, albumObject?.singlesList, albumObject?.tracksList);
            if (albumObject.albumType === "single-album") {
                sortType = 'singlesList';
                newAlbum.singlesList = this.getTrackOrSinglesListByID(newAlbumID, 'singlesList');
            }
            else if (albumObject.albumType === "track-album") {
                sortType = 'tracksList';
                newAlbum.tracksList = this.getTrackOrSinglesListByID(newAlbumID, 'tracksList');
            }
            else if (albumObject.albumType === "mix-album") {
                sortType = 'tracksAndSinglesList';
                newAlbum.singlesList = this.getTrackOrSinglesListByID(newAlbumID, 'singlesList');
                newAlbum.tracksList = this.getTrackOrSinglesListByID(newAlbumID, 'tracksList');
            }
            this.addAlbum(newAlbum, sortType);
        });
    }
    get getAllAlbums() {
        return this.albums;
    }
    get getAllTracks() {
        return this.tracks;
    }
}
/// Initialise state
export const state = State.getInstance();
/// Initialise all tracks
state.initTracks();
/// Initialise all albums
state.initAlbums();
