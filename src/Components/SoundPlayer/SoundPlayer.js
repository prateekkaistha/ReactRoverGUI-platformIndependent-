import React from 'react';
import Sound from 'react-sound';
import spacesound from './spacesound.mp3';
const SoundPlayer = () => {
    return(
        <Sound
      url={spacesound}
      playStatus={Sound.status.PLAYING}
      playFromPosition={300 /* in milliseconds */}
      // onLoading={this.handleSongLoading}
      // onPlaying={this.handleSongPlaying}
      // onFinishedPlaying={this.handleSongFinishedPlaying}
    />
    );
}

export default SoundPlayer;