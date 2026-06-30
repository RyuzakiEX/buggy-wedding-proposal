import { useState } from "react";
import Proposal from "./components/Proposal.jsx";
import Celebration from "./components/Celebration.jsx";

export default function App() {
  const [accepted, setAccepted] = useState(false);

  return accepted ? (
    <Celebration />
  ) : (
    <Proposal onYes={() => setAccepted(true)} />
  );
}
