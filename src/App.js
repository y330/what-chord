import {AudioAnalyser} from "./AudioAnalyser";
import { useState } from "react";

// custom styling using styled-components!

function App() {
  const [audio, setAudio] = useState(null);

  const getMicrophone = async () => {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    });
    setAudio({ audio });
  };

  const stopMicrophone = () => {
    audio.getTracks().forEach((track) => track.stop());
    setAudio(null);
  };
  const toggleMicrophone = () => {
    if (audio) {
      stopMicrophone();
    } else {
      getMicrophone();
    }
  };

  return (
    <main>
      <div className="controls">
        <button onClick={toggleMicrophone}>
          {audio ? "Stop microphone" : "Get microphone input"}
        </button>
        {audio ? <AudioAnalyser audio={audio} /> : ""}
      </div>

      {/* <Header /> */}
      {/* <Clock /> */}
      {/* <Footer /> */}
    </main>
  );
}

export default App;
