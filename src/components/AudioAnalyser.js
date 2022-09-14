import { useState, useEffect } from "react";

const AudioAnalyser = (props) => {
  // ....
  const [audioData, setAudioData] = useState(new Uint8Array(0));

  const tick = () => {
    // ...
    analyser.getByteTimeDomainData(dataArray);
    setAudioData(dataArray);
    rafId = requestAnimationFrame(tick);
  };

  useEffect(() => {
    // componentDidMount
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    dataArray = new Uint8Array(analyser.frequencyBinCount);
    source = audioContext.createMediaStreamSource(props.audio);
    source.connect(analyser);
    rafId = requestAnimationFrame(tick);

    return () => {
      // componentWillUnmount
      cancelAnimationFrame(rafId);
      analyser.disconnect();
      source.disconnect();
    };
  });
  return <textarea value={audioData} />;
}

export default AudioAnalyser;
