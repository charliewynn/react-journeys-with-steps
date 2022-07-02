import { useState } from "react";
import PrevNextStepFooter from "./PrevNextStepFooter";

import "../MultipleChoice.scss";
import AllJournies from "./Journeys/AllJournies";

function JourneyChooser({ goToNext }) {
  const [currentJourney, setCurrentJourney] = useState(null);

  const renderJourney = (journey) => {
    const currentJourneyName = currentJourney ? currentJourney.name : null;
    const isSelected = currentJourneyName === journey.name;
    return (
      <div
        key={journey.name}
        onClick={() => setCurrentJourney(journey)}
        className={isSelected ? "selected" : ""}
      >
        {journey.name}
      </div>
    );
  };
  return (
    <div className="JourneyChooser">
      <div>Select a journey</div>
      <div className="MultipleChoiceSelector">
        {AllJournies.map(renderJourney)}
      </div>

      <PrevNextStepFooter
        nextDisabled={!currentJourney}
        goToNext={() => goToNext(currentJourney)}
      />
    </div>
  );
}

export default JourneyChooser;
