import Guitar from "./Guitar";
import RecorderControls from "./RecorderControls";
import RecordingsList from "./RecordingsList";
import useRecorder from "../hooks/useRecorderControls";

export default function App() {
  const { recorderState, ...handlers } = useRecorder();
  const { audio } = recorderState;

  return (
    <main>
      <style jsx>
        {`
          .voice-recorder {
            min-height: 100vh;
            display: grid;
            place-content: center;
          }

          .title {
            margin-bottom: 2rem;
            font-size: 3rem;
            text-align: center;
          }

          .recorder-container {
            min-width: 300px;
            width: 30vw;
            height: 70vh;
            border-radius: 1rem;
            background: linear-gradient(to right, #41295a, #2f0743);
            color: #fff;
          }
        `}
      </style>
      <section className="voice-recorder">
        <h1 className="title">What Chord?</h1>
        <div className="guitar">
          <Guitar />
        </div>
        <div className="recorder-container">
          <RecorderControls recorderState={recorderState} handlers={handlers} />
          <RecordingsList audio={audio} />
        </div>
      </section>
    </main>
  );
}
