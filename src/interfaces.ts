export interface AlbumStateInterface {
    albumID: number,
    albumName: string,
    albumDesc: string,
    specialEdition: boolean,
    demo: boolean,
    karaoke: boolean,
    live: boolean,
    label: 'personal' | 'unlabeled',
    totalTracks: number,
    albumType: 'single-album' | 'track-album' | 'mix-album'
    singlesList?: TrackInterface[],
    tracksList?: TrackInterface[]
}

export interface AlbumInterface {
    albumName: string,
    albumDesc: string,
    specialEdition: boolean,
    demo: boolean,
    karaoke: boolean,
    live: boolean,
    label: 'personal' | 'unlabeled',
    totalTracks: number,
    albumType: 'single-album' | 'track-album' | 'mix-album',
    singlesList?: TrackInterface[],
    tracksList?: TrackInterface[]
}

type videoFormats = 'MXF' | 'MOV' | 'MP4' | 'WEBM' | 'AVCHD' | 'AVI';
type audioFormats = 'MP3' | 'WAV';

export interface TrackInterface {
    trackName: string,
    albumID: number[],
    albumIndex: number[],
    live: boolean,
    demo: boolean,
    single: boolean,
    video?: boolean,
    tv?: boolean,
    videoStream?: boolean,
    dvdVideo?: boolean,
    blueray?: boolean,
    videoFormat?: [
        videoFormats?,
        videoFormats?,
        videoFormats?,
        videoFormats?,
        videoFormats?,
        videoFormats?
    ]
    streaming?: boolean,
    radio?: boolean,
    cdDvdAudio?: boolean,
    lp?: boolean,
    audioFormat?: [
        audioFormats?,
        audioFormats?
    ]
    
}