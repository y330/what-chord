import { Trash, ExclamationMark } from "tabler-icons-react";
import useRecordingsList from "../hooks/use-recordings-list";

export default function RecordingsList({ audio }) {
  const { recordings, deleteAudio } = useRecordingsList(audio);

  return (
    <>
      <style jsx>
        {`
          .recordings-container {
            height: 85%;
            padding: 0 2rem;
          }

          .recordings-container h1 {
            margin-bottom: 1rem;
            text-align: center;
          }

          .no-records {
            height: 100%;
            display: grid;
            place-content: center;
            place-items: center;
            font-size: 2rem;
            text-align: center;
          }

          .recordings-list::-webkit-scrollbar {
            width: 5px;
          }

          .recordings-list::-webkit-scrollbar-track {
            background: #e4d3cf;
          }

          .recordings-list::-webkit-scrollbar-thumb {
            background: #099fff;
          }

          .recordings-list {
            max-height: 85%;
            display: grid;
            justify-content: center;
            overflow-y: auto;
          }

          .record {
            display: flex;
            justify-content: space-evenly;
            padding: 0.5rem;
          }

          .record audio {
            min-width: 80%;
            max-width: 60%;
          }

          .delete-button-container {
            min-width: 20%;
            max-width: 10%;
            display: grid;
            place-content: center;
          }

          .delete-button {
            width: 25px;
            height: 25px;
            border: none;
            border-radius: 50%;
            background-color: #fff;
            cursor: pointer;
          }

          .delete-button:hover {
            color: #fd1c03;
          }
        `}
      </style>
      <div className="recordings-container">
        {recordings.length > 0 ? (
          <>
            <h1>Recorded guitar riffs</h1>
            <div className="recordings-list">
              {recordings.map((record) => (
                <div className="record" key={record.key}>
                  <audio controls src={record.audio} />
                  <div className="delete-button-container">
                    <button
                      className="delete-button"
                      title="Delete this audio"
                      onClick={() => deleteAudio(record.key)}
                    >
                      <Trash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="no-records">
            <ExclamationMark scale={2} color="#f2ea02" />
            <span>You don't have records</span>
          </div>
        )}
      </div>
    </>
  );
}
