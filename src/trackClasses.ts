import { TrackInterface } from './interfaces.js';

export abstract class Track implements TrackInterface {
    constructor(
        public trackName: string,
        public albumID: number[],
        public albumIndex: number[],
        public live: boolean,
        public demo: boolean,
        public single: boolean
    ) {}
    
}

type audioFormats = 'MP3' | 'WAV';

export class TracksAudioOnly extends Track {
    constructor(
        public trackName: string,
        public albumID: number[],
        public albumIndex: number[],
        public live: boolean,
        public demo: boolean,
        public single: boolean,
        public streaming: boolean,
        public radio: boolean,
        public cdDvdAudio: boolean,
        public lp: boolean,
        public audioFormat: [
            audioFormats,
            audioFormats?
        ]
    ) {
        super(trackName, albumID, albumIndex, live, demo, single);
    }
}

type videoFormats = 'MXF' | 'MOV' | 'MP4' | 'WEBM' | 'AVCHD' | 'AVI';
export class TracksWithVideo extends Track {
    constructor(
        public trackName: string,
        public albumID: number[],
        public albumIndex: number[],
        public live: boolean,
        public demo: boolean,
        public single: boolean,
        public video: boolean,
        public tv: boolean,
        public videoStream: boolean,
        public dvdVideo: boolean,
        public blueray: boolean,
        public videoFormat: [
            videoFormats?,
            videoFormats?,
            videoFormats?,
            videoFormats?,
            videoFormats?,
            videoFormats?
        ]
    ) {
        super(trackName, albumID, albumIndex, live, demo, single);
    }
}

export class InitAllTracks {
    constructor(public allNewTracks: TrackInterface[]) {}
}