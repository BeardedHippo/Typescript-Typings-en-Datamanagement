export class InitAllAlbums {
    constructor(allNewAlbums) {
        this.allNewAlbums = allNewAlbums;
        let fullAlbumList = [];
        allNewAlbums.forEach((albumObject) => {
            let newAlbum = new CreateAlbum(5, albumObject.albumName, albumObject.albumDesc, albumObject.specialEdition, albumObject.demo, albumObject.karaoke, albumObject.live, albumObject.label, albumObject.totalTracks, albumObject.albumType);
            fullAlbumList.push(newAlbum);
        });
    }
}
export class CreateAlbum {
    constructor(albumID, albumName, albumDesc, specialEdition, demo, karaoke, live, label, totalTracks, albumType, singlesList, tracksList) {
        this.albumID = albumID;
        this.albumName = albumName;
        this.albumDesc = albumDesc;
        this.specialEdition = specialEdition;
        this.demo = demo;
        this.karaoke = karaoke;
        this.live = live;
        this.label = label;
        this.totalTracks = totalTracks;
        this.albumType = albumType;
        this.singlesList = singlesList;
        this.tracksList = tracksList;
        if (this.albumType === 'single-album') {
            this.singlesList = [{
                    albumID: [0, 2, 3],
                    albumIndex: [0, 1, 3],
                    audioFormat: ["MP3", "WAV"],
                    cdDvdAudio: false,
                    demo: false,
                    live: false,
                    lp: false,
                    radio: false,
                    single: true,
                    streaming: false,
                    trackName: "stringA",
                }];
        }
        else if (this.albumType === 'track-album') {
            this.tracksList = [{
                    albumID: [0, 2, 3],
                    albumIndex: [0, 1, 3],
                    audioFormat: ["MP3", "WAV"],
                    cdDvdAudio: false,
                    demo: false,
                    live: false,
                    lp: false,
                    radio: false,
                    single: true,
                    streaming: false,
                    trackName: "stringA",
                }];
        }
        else if (this.albumType === 'mix-album') {
            this.singlesList = [{
                    albumID: [0, 2, 3],
                    albumIndex: [0, 1, 3],
                    audioFormat: ["MP3", "WAV"],
                    cdDvdAudio: false,
                    demo: false,
                    live: false,
                    lp: false,
                    radio: false,
                    single: true,
                    streaming: false,
                    trackName: "stringA",
                }];
            this.tracksList = [{
                    albumID: [0, 2, 3],
                    albumIndex: [0, 1, 3],
                    audioFormat: ["MP3", "WAV"],
                    cdDvdAudio: false,
                    demo: false,
                    live: false,
                    lp: false,
                    radio: false,
                    single: true,
                    streaming: false,
                    trackName: "stringA",
                }];
        }
    }
}
export class Album {
    constructor(albumName, albumDesc, specialEdition, demo, karaoke, live, label, totalTracks, albumType) {
        this.albumName = albumName;
        this.albumDesc = albumDesc;
        this.specialEdition = specialEdition;
        this.demo = demo;
        this.karaoke = karaoke;
        this.live = live;
        this.label = label;
        this.totalTracks = totalTracks;
        this.albumType = albumType;
    }
}
export class AlbumOnlySingles extends Album {
    constructor(albumName, albumDesc, specialEdition, demo, karaoke, live, label, totalTracks, albumType) {
        super(albumName, albumDesc, specialEdition, demo, karaoke, live, label, totalTracks, albumType);
        this.albumName = albumName;
        this.albumDesc = albumDesc;
        this.specialEdition = specialEdition;
        this.demo = demo;
        this.karaoke = karaoke;
        this.live = live;
        this.label = label;
        this.totalTracks = totalTracks;
        this.albumType = albumType;
    }
}
export class AlbumOnlyTracks extends Album {
    constructor(albumName, albumDesc, specialEdition, demo, karaoke, live, label, totalTracks, albumType) {
        super(albumName, albumDesc, specialEdition, demo, karaoke, live, label, totalTracks, albumType);
        this.albumName = albumName;
        this.albumDesc = albumDesc;
        this.specialEdition = specialEdition;
        this.demo = demo;
        this.karaoke = karaoke;
        this.live = live;
        this.label = label;
        this.totalTracks = totalTracks;
        this.albumType = albumType;
    }
}
export class AlbumSinglesAndTracks extends Album {
    constructor(albumName, albumDesc, specialEdition, demo, karaoke, live, label, totalTracks, albumType) {
        super(albumName, albumDesc, specialEdition, demo, karaoke, live, label, totalTracks, albumType);
        this.albumName = albumName;
        this.albumDesc = albumDesc;
        this.specialEdition = specialEdition;
        this.demo = demo;
        this.karaoke = karaoke;
        this.live = live;
        this.label = label;
        this.totalTracks = totalTracks;
        this.albumType = albumType;
    }
}
