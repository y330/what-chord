import { useState, useEffect } from "react";
import AudioVisualiser from "./AudioVisualiser";

const AudioAnalyser = (props) => {
  // ....
  const [audioData, setAudioData] = useState(new Uint8Array(0));

  useEffect(() => {
  
    function tick () {
      // ...
      analyser.getByteTimeDomainData(dataArray);
      setAudioData(dataArray);
      const rafId = requestAnimationFrame(tick);
    };


    // componentDidMount
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    const source = audioContext.createMediaStreamSource(props.audio);
    source.connect(analyser);
    const rafId = requestAnimationFrame(tick);

    return () => {
      // componentWillUnmount
      cancelAnimationFrame(rafId);
      analyser.disconnect();
      source.disconnect();
    };

  });

  return <AudioVisualiser audioData={audioData} />;

}

export default AudioAnalyser;
