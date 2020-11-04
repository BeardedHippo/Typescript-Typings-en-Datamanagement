import { state } from './state.js';
export class Album {
    constructor(albumName, albumDesc, specialEdition, demo, karaoke, live, label, totalTracks) {
        this.albumName = albumName;
        this.albumDesc = albumDesc;
        this.specialEdition = specialEdition;
        this.demo = demo;
        this.karaoke = karaoke;
        this.live = live;
        this.label = label;
        this.totalTracks = totalTracks;
    }
    getAlbumID() {
        let stateAlbums = state.albums;
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
    getSinglesList(albumID) {
        function getSingles(object) {
            if (object.single === true
                && object.albumID.includes(albumID) === true) {
                return object;
            }
        }
        return state.tracks.filter(getSingles);
    }
    getTracksList(albumID) {
        function getTracks(object) {
            if (object.albumID.includes(albumID) === true) {
                return object;
            }
        }
        return state.tracks.filter(getTracks);
    }
}
export class AlbumOnlySingles extends Album {
    constructor(albumName, albumDesc, specialEdition, demo, karaoke, live, label, totalTracks) {
        super(albumName, albumDesc, specialEdition, demo, karaoke, live, label, totalTracks);
        this.albumName = albumName;
        this.albumDesc = albumDesc;
        this.specialEdition = specialEdition;
        this.demo = demo;
        this.karaoke = karaoke;
        this.live = live;
        this.label = label;
        this.totalTracks = totalTracks;
        let albumID = this.getAlbumID();
        let singlesList = this.getSinglesList(albumID);
        let newAlbum = {
            albumName: albumName,
            albumDesc: albumDesc,
            specialEdition: specialEdition,
            demo: demo,
            karaoke: karaoke,
            live: live,
            label: label,
            totalTracks: totalTracks,
            singlesList: singlesList,
            albumID: albumID
        };
        state.addAlbum(newAlbum);
    }
}
export class AlbumOnlyTracks extends Album {
    constructor(albumName, albumDesc, specialEdition, demo, karaoke, live, label, totalTracks) {
        super(albumName, albumDesc, specialEdition, demo, karaoke, live, label, totalTracks);
        this.albumName = albumName;
        this.albumDesc = albumDesc;
        this.specialEdition = specialEdition;
        this.demo = demo;
        this.karaoke = karaoke;
        this.live = live;
        this.label = label;
        this.totalTracks = totalTracks;
        let albumID = this.getAlbumID();
        let tracksList = this.getTracksList(albumID);
        let newAlbum = {
            albumName: albumName,
            albumDesc: albumDesc,
            specialEdition: specialEdition,
            demo: demo,
            karaoke: karaoke,
            live: live,
            label: label,
            totalTracks: totalTracks,
            tracksList: tracksList,
            albumID: albumID
        };
        state.addAlbum(newAlbum);
    }
}
export class AlbumSinglesAndTracks extends Album {
    constructor(albumName, albumDesc, specialEdition, demo, karaoke, live, label, totalTracks) {
        super(albumName, albumDesc, specialEdition, demo, karaoke, live, label, totalTracks);
        this.albumName = albumName;
        this.albumDesc = albumDesc;
        this.specialEdition = specialEdition;
        this.demo = demo;
        this.karaoke = karaoke;
        this.live = live;
        this.label = label;
        this.totalTracks = totalTracks;
        let albumID = this.getAlbumID();
        let singlesList = this.getSinglesList(albumID);
        let tracksList = this.getTracksList(albumID);
        let newAlbum = {
            albumName: albumName,
            albumDesc: albumDesc,
            specialEdition: specialEdition,
            demo: demo,
            karaoke: karaoke,
            live: live,
            label: label,
            totalTracks: totalTracks,
            singlesList: singlesList,
            tracksList: tracksList,
            albumID: albumID
        };
        state.addAlbum(newAlbum);
    }
}
