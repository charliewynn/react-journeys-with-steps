import { useState } from "react";

import JourneyChooser from "./JourneyChooser";

function JourneyManager() {
  const [currentJourney, setCurrentJourney] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const changeJourney = (newJourney) => {
    setCurrentJourney(newJourney);
    setCurrentStep(0);
  };

  const handleNextStep = (lastStepData) => {
    console.log("Done with step: " + currentStep);
    console.log("Data from step: ", lastStepData);

    // need to see if journey is over
    setCurrentStep(currentStep + 1);
  };
  const errorStep = (error) => (
    <div>
      Something went wrong. You're on Journey "{currentJourney.name}"; Step:
      {currentStep};
    </div>
  );

  let activeStep = <div>unknown step</div>;
  if (currentJourney == null) {
    // if there isn't a journey - render the chooser
    activeStep = <JourneyChooser goToNext={changeJourney} />;
  } else {
    try {
      const journeyStep = currentJourney.steps[currentStep];
      const journeyStepProps = { ...journeyStep.props };
      journeyStepProps.goToNext = handleNextStep;
      if (currentStep == 0) {
        journeyStepProps.goToPrev = () => setCurrentJourney(null);
      } else {
        journeyStepProps.goToPrev = () => setCurrentStep(currentStep - 1);
      }

      activeStep = journeyStep.step(journeyStepProps);
    } catch (error) {
      console.error(error);
      activeStep = errorStep(error);
    }
  }

  if (activeStep == null) {
    activeStep = errorStep("Missing Step in Journey");
  }
  return <div className="JourneyManager">{activeStep}</div>;
}

export default JourneyManager;
