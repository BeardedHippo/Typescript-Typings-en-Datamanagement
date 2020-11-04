import { AlbumInterface, AlbumStateInterface, TrackInterface } from './interfaces.js';

export class InitAllAlbums {
    constructor(public allNewAlbums: AlbumInterface[]) {
        let fullAlbumList = [] as AlbumStateInterface[];

        allNewAlbums.forEach((albumObject: AlbumInterface) => {            
            let newAlbum = new CreateAlbum(
                5,
                albumObject.albumName,
                albumObject.albumDesc,
                albumObject.specialEdition,
                albumObject.demo,
                albumObject.karaoke,
                albumObject.live,
                albumObject.label,
                albumObject.totalTracks,
                albumObject.albumType
            )
            fullAlbumList.push(newAlbum)
        })
    }
}

export class CreateAlbum implements AlbumStateInterface {

    constructor(
        public albumID: number,
        public albumName: string,
        public albumDesc: string,
        public specialEdition: boolean,
        public demo: boolean,
        public karaoke: boolean,
        public live: boolean,
        public label: 'personal' | 'unlabeled',
        public totalTracks: number,
        public albumType: 'single-album' | 'track-album' | 'mix-album',
        public singlesList?: TrackInterface[],
        public tracksList?: TrackInterface[]
        ) {
        
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
                }]
            } else if (this.albumType === 'track-album'){
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
                }]
            }else if (this.albumType === 'mix-album'){
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
                }]

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
                }]
            }
    }
}

export abstract class Album implements AlbumInterface {
    constructor(

        public albumName: string,
        public albumDesc: string,
        public specialEdition: boolean,
        public demo: boolean,
        public karaoke: boolean,
        public live: boolean,
        public label: 'personal' | 'unlabeled',
        public totalTracks: number,
        public albumType: 'single-album' | 'track-album' | 'mix-album',
    ) {}
}

export class AlbumOnlySingles extends Album {
    
    constructor(
        public albumName: string,
        public albumDesc: string,
        public specialEdition: boolean,
        public demo: boolean,
        public karaoke: boolean,
        public live: boolean,
        public label: 'personal' | 'unlabeled',
        public totalTracks: number,
        public albumType: 'single-album' | 'track-album' | 'mix-album',
    ) {
        super(albumName, albumDesc, specialEdition, demo, karaoke, live, label, totalTracks, albumType);
    }
}

export  class AlbumOnlyTracks extends Album {
    
    constructor(
        public albumName: string,
        public albumDesc: string,
        public specialEdition: boolean,
        public demo: boolean,
        public karaoke: boolean,
        public live: boolean,
        public label: 'personal' | 'unlabeled',
        public totalTracks: number,
        public albumType: 'single-album' | 'track-album' | 'mix-album',
    ) {
        super(albumName, albumDesc, specialEdition, demo, karaoke, live, label, totalTracks, albumType);
    }
}

export class AlbumSinglesAndTracks extends Album {
    
    constructor(
        public albumName: string,
        public albumDesc: string,
        public specialEdition: boolean,
        public demo: boolean,
        public karaoke: boolean,
        public live: boolean,
        public label: 'personal' | 'unlabeled',
        public totalTracks: number,
        public albumType: 'single-album' | 'track-album' | 'mix-album',

    ) {
        super(albumName, albumDesc, specialEdition, demo, karaoke, live, label, totalTracks, albumType);
    }
}