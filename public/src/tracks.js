import { TracksAudioOnly } from './trackClasses.js';
export function allTracks() {
    new TracksAudioOnly('stringA', [0, 2], [0, 1], false, false, true, false, false, false, false, ['MP3', 'WAV']);
    new TracksAudioOnly('string', [0], [1], false, false, true, false, false, false, false, ['MP3', 'WAV']);
    new TracksAudioOnly('string', [0], [2], false, false, true, false, false, false, false, ['MP3', 'WAV']);
    new TracksAudioOnly('stringB', [0, 2], [5, 0], false, false, true, false, false, false, false, ['MP3', 'WAV']);
    new TracksAudioOnly('string', [0], [3], false, false, true, false, false, false, false, ['MP3', 'WAV']);
    new TracksAudioOnly('string', [0], [4], false, false, true, false, false, false, false, ['MP3', 'WAV']);
    new TracksAudioOnly('string', [1], [0], false, false, true, false, false, false, false, ['MP3', 'WAV']);
    new TracksAudioOnly('string', [1], [1], false, false, true, false, false, false, false, ['MP3', 'WAV']);
    new TracksAudioOnly('string', [1], [2], false, false, true, false, false, false, false, ['MP3', 'WAV']);
    new TracksAudioOnly('string', [1], [5], false, false, true, false, false, false, false, ['MP3', 'WAV']);
    new TracksAudioOnly('string', [1], [3], false, false, true, false, false, false, false, ['MP3', 'WAV']);
    new TracksAudioOnly('string', [1], [4], false, false, true, false, false, false, false, ['MP3', 'WAV']);
}
