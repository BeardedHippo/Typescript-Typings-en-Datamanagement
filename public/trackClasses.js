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
    }
}
export class InitAllTracks {
    constructor(allNewTracks) {
        this.allNewTracks = allNewTracks;
    }
}
