import { state } from './state.js';
// export interface TrackInterface {
//     trackName: string,
//     albumID: 'none' | number[],
//     albumIndex: 'none' | number[],
//     live: boolean,
//     demo: boolean,
//     video: boolean,
//     tv?: boolean,
//     videoStream?: boolean,
//     dvdVideo?: boolean,
//     blueray?: boolean,
//     videoFormat?: [
//         videoFormats?,
//         videoFormats?,
//         videoFormats?,
//         videoFormats?,
//         videoFormats?,
//         videoFormats?
//     ]
//     streaming?: boolean,
//     radio?: boolean,
//     cdDvdAudio?: boolean,
//     lp?: boolean,
//     audioFormat?: [
//         audioFormats?,
//         audioFormats?
//     ]
// }
export class Track {
    constructor(trackName, albumID, albumIndex, live, demo, single) {
        this.trackName = trackName;
        this.albumID = albumID;
        this.albumIndex = albumIndex;
        this.live = live;
        this.demo = demo;
        this.single = single;
    }
}
export class TracksAudioOnly extends Track {
    constructor(trackName, albumID, albumIndex, live, demo, single, streaming, radio, cdDvdAudio, lp, audioFormat) {
        super(trackName, albumID, albumIndex, live, demo, single);
        this.trackName = trackName;
        this.albumID = albumID;
        this.albumIndex = albumIndex;
        this.live = live;
        this.demo = demo;
        this.single = single;
        this.streaming = streaming;
        this.radio = radio;
        this.cdDvdAudio = cdDvdAudio;
        this.lp = lp;
        this.audioFormat = audioFormat;
        let newTrack = {
            trackName: trackName,
            albumID: albumID,
            albumIndex: albumIndex,
            live: live,
            demo: demo,
            single: single,
            streaming: streaming,
            radio: radio,
            cdDvdAudio: cdDvdAudio,
            lp: lp,
            audioFormat: audioFormat
        };
        state.addTrack(newTrack);
    }
}
export class TracksWithVideo extends Track {
    constructor(trackName, albumID, albumIndex, live, demo, single, video, tv, videoStream, dvdVideo, blueray, videoFormat) {
        super(trackName, albumID, albumIndex, live, demo, single);
        this.trackName = trackName;
        this.albumID = albumID;
        this.albumIndex = albumIndex;
        this.live = live;
        this.demo = demo;
        this.single = single;
        this.video = video;
        this.tv = tv;
        this.videoStream = videoStream;
        this.dvdVideo = dvdVideo;
        this.blueray = blueray;
        this.videoFormat = videoFormat;
        let newTrack = {
            trackName: trackName,
            albumID: albumID,
            albumIndex: albumIndex,
            live: live,
            demo: demo,
            single: single,
            video: video,
            tv: tv,
            videoStream: videoStream,
            dvdVideo: dvdVideo,
            blueray: blueray,
            videoFormat: videoFormat
        };
        state.addTrack(newTrack);
    }
}
