import React from 'react';
import { Button } from '@material-ui/core';

const getMedia = async () => {
  const constraints = {audio: true, video: true };

  try {
    //getUserMediaのプロミス(resolve, reject)が返ってくるまで待機する。
    return await navigator.mediaDevices.getUserMedia(constraints);
    /* ストリームを使用 */
  } catch(err) {
    /* エラーを処理 */
  }
}

getMedia();

const App = () => {
  return <Button color='primary' variant='contained'>Hello, World!</Button>;
}

export default App;
