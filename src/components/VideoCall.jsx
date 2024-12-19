import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

//random id generate

function randomID(len) {
  let result = '';
  if (result) return result;
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}
//get user url params
export function getUrlParams(
  url = window.location.href
) {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

const roomID = getUrlParams().get('roomID') || randomID(5);
let myMeeting = async (element) => {
// generate Kit Token
const appID = 1443650344;
const serverSecret = "7489cff35d1ce99da3eb3e8df8eb84e1";
const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  randomID(5),  randomID(5));


// Create instance object from Kit Token.
const zp = ZegoUIKitPrebuilt.create(kitToken);
// start the call
zp.joinRoom({
  container: element,
  sharedLinks: [
    {
      name: 'Personal link',
      url:
       window.location.protocol + '//' + 
       window.location.host + window.location.pathname +
        '?roomID=' +
        roomID,
    },
  ],
  scenario: {
    mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
  },
});


};
const VideoCall = () => {
  return (
    <div
    className="myCallContainer"
    ref={myMeeting}
    style={{ width: '100vw', height: '100vh' }}
  ></div>
  )
}

export default VideoCall