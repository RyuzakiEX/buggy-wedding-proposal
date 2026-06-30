import { PROPOSAL_QUESTION } from "../config.js";
import DodgingButton from "./DodgingButton.jsx";

export default function Proposal({ onYes }) {
  return (
    <div className="proposal-screen">
      <div className="ring-emoji">💍</div>
      <h1 className="proposal-question">{PROPOSAL_QUESTION}</h1>
      <div className="buttons-row">
        <button className="btn btn-yes" onClick={onYes}>
          Yes 💕
        </button>
        <DodgingButton />
      </div>
    </div>
  );
}
