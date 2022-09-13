import { Header } from "./components/Header"
import { Clock } from "./components/Clock"
import { Footer } from "./components/Footer"
import { useState } from "react"

// custom styling using styled-components!

const App = () => {
  const [audio, setAudio] = useState(null)

  const getMicrophone = async () => {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
    setAudio({ audio });
  }

  const stopMicrophone = () => {
    audio.getTracks().forEach(track => track.stop());
    setAudio(null);
  }
  const toggleMicrophone = () => {
    if (audio) {
      stopMicrophone();
    } else {
      getMicrophone();
    }
  }



  return (
    <main>
      <div className="controls">
        <button onClick={toggleMicrophone}>
          {audio ? 'Stop microphone' : 'Get microphone input'}
        </button>
      </div>

      {/* <Header /> */}
      {/* <Clock /> */}
      {/* <Footer /> */}
    </main>
  );
}

export default App;
