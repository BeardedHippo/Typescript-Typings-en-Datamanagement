import { AlbumOnlySingles, AlbumOnlyTracks, AlbumSinglesAndTracks } from './albumClasses.js';
export function allAlbums() {
    //// All Albums with only singles 
    new AlbumOnlySingles('Herzeleid', "Herzeleid was released on CD in many countries; The US and Canadian versions had alternative front covers, and were released by Slash Records, but still retained the same songs as on the German version. XIII Bis Records in France released Herzeleid on CD, as well as most of Rammstein's releases before 1999.", false, false, false, false, 'personal', 10);
    new AlbumOnlySingles('Herzeleid', "Herzeleid was released on CD in many countries; The US and Canadian versions had alternative front covers, and were released by Slash Records, but still retained the same songs as on the German version. XIII Bis Records in France released Herzeleid on CD, as well as most of Rammstein's releases before 1999.", false, false, false, false, 'personal', 10);
    //// All Albums with only tracks
    new AlbumOnlyTracks('Herzeleid', "Herzeleid was released on CD in many countries; The US and Canadian versions had alternative front covers, and were released by Slash Records, but still retained the same songs as on the German version. XIII Bis Records in France released Herzeleid on CD, as well as most of Rammstein's releases before 1999.", false, false, false, false, 'personal', 10);
    //// All Albums with singles and tracks
    new AlbumSinglesAndTracks('Herzeleid', "Herzeleid was released on CD in many countries; The US and Canadian versions had alternative front covers, and were released by Slash Records, but still retained the same songs as on the German version. XIII Bis Records in France released Herzeleid on CD, as well as most of Rammstein's releases before 1999.", false, false, false, false, 'personal', 10);
}
