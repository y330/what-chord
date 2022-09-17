import { Microphone, X, Check } from "tabler-icons-react";
import { formatMinutes, formatSeconds } from "../utils/format-time";

export default function RecorderControls({ recorderState, handlers }) {
  const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
  const { startRecording, saveRecording, cancelRecording } = handlers;

  return (
    <>
      <style jsx>
        {`
          .controls-container {
            height: 15%;
            display: flex;
            justify-content: space-evenly;
            padding: 0.5rem;
          }

          .recorder-display {
            width: 50%;
            display: flex;
            align-items: center;
            font-size: 2rem;
          }

          @keyframes animated-block {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .recording-indicator {
            width: 10px;
            height: 10px;
            margin-right: 0.5rem;
            border-radius: 50%;
            background-color: #099fff;
            animation-name: animated-block;
            animation-duration: 2s;
            animation-iteration-count: infinite;
          }

          .recording-time {
            width: 80%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .cancel-button-container {
            width: 20%;
            display: grid;
            place-content: center;
            animation-name: animated-block;
            animation-duration: 2s;
          }

          .start-button,
          .cancel-button {
            border: none;
            border-radius: 50%;
            background-color: #fff;
            cursor: pointer;
          }

          .cancel-button:hover {
            color: #fd1c03;
          }

          .cancel-button {
            width: 25px;
            height: 25px;
          }

          .start-button-container {
            width: 15%;
            display: grid;
            place-content: center;
          }

          .start-button:hover {
            color: #41295a;
            background-color: #f2ea02;
          }

          .start-button {
            width: 40px;
            height: 40px;
          }
        `}
      </style>
      <div className="controls-container">
        <div className="recorder-display">
          <div className="recording-time">
            {initRecording && <div className="recording-indicator"></div>}
            <span>{formatMinutes(recordingMinutes)}</span>
            <span>:</span>
            <span>{formatSeconds(recordingSeconds)}</span>
          </div>
          {initRecording && (
            <div className="cancel-button-container">
              <button
                className="cancel-button"
                title="Cancel recording"
                onClick={cancelRecording}
              >
                <X/>
              </button>
            </div>
          )}
        </div>
        <div className="start-button-container">
          {initRecording ? (
            <button
              className="start-button"
              title="Save recording"
              disabled={recordingSeconds === 0}
              onClick={saveRecording}
            >
              <Check scale={2} />
            </button>
          ) : (
            <button
              className="start-button"
              title="Start listening"
              onClick={startRecording}
            >
              <Microphone scale={2} />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
