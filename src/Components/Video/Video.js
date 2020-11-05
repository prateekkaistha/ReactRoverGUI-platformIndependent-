import React from 'react';
import { Player } from 'video-react';

export default props => {
  return (
    // <Player
    //   playsInline
    //   poster="/assets/poster.png"
    //   src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    // //   src="http://192.168.43.74:8080/stream_viewer?topic=/usb_cam_hd/image_raw"
    // />
    <iframe style={{width:'100%',height:'90vh'}} src="http://192.168.43.74:8080/stream_viewer?topic=/usb_cam_hd/image_raw" allow="camera; microphone;"/>
  );
};
