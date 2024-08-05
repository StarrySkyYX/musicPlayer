// var track1 = {
//     url: require('./assets/test.mp3'),
//     title: 'Avaritia',
//     artist: 'deadmau5',
//     album: 'while(1<2)',
//     genre: 'Progressive House, Electro House',
//     date: '2014-05-20T07:00:00+00:00', // RFC 3339
//     artwork: 'http://example.com/cover.png', // Load artwork from the network
//     duration: 402 // Duration in seconds
//   };

import TrackPlayer, { State } from "react-native-track-player";

export const addToQueue = () => {

}

const initPlayer = async() => {
    let ready = checkState()
    if (!ready){
        await TrackPlayer.setupPlayer()
        await TrackPlayer.add(track1)
        console.log("Initialize successfull.")
    } else {
        console.log("Player is already initialized.")
    }
}

 
const checkState = async() => {
    try{
        const playbackState = await TrackPlayer.getPlaybackState();
        const { state } = playbackState;
        if(state === State.None) return false;
        else return true;
    } catch (error) {
        console.log("Failed to get playback state:", error);
        return false;
    }
}

export const playMusic = () =>{
    if (async() => { return (await checkState()) }) TrackPlayer.play();
 }

export const pauseMusic = () => {
    if (async() => { return (await checkState()) }) TrackPlayer.pause()
}
  
initPlayer()