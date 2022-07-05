import { useState } from "react";
import FinalDisclosureStep from "./FinalDisclosureStep";

import JourneyChooser from "./JourneyChooser";

function JourneyManager() {
  const [currentJourney, setCurrentJourney] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentJourneyData, setCurrentJourneyData] = useState({});

  const changeJourney = (newJourney) => {
    setCurrentJourney(newJourney);

    //start over at step 0, reset the journey data
    setCurrentStep(0);
    setCurrentJourneyData({});
  };

  const submitJourneyResults = () => {
    const resultData = { ...currentJourneyData, journey: currentJourney.name };
    console.log("Journey Results...", resultData);
    alert(
      "Great, all done. Going back to beginning. (this should be an api call - not an alert...)"
    );
    changeJourney(null);
  };

  const handlePrevStep = () => {
    if (currentStep == 0) {
      setCurrentJourney(null);
    } else {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleNextStep = (lastStepData) => {
    console.log("Done with step: " + currentStep);
    console.log("Data from step: ", lastStepData);

    //merge the data we just got from that step with the data we have so far
    const currentData = { ...currentJourneyData };
    currentData["step_" + currentStep] = lastStepData;
    setCurrentJourneyData(currentData);
    setCurrentStep(currentStep + 1);
  };

  const errorStep = (error) => (
    <div>
      Something went wrong: {error}. You're on Journey "{currentJourney.name}";
      Step:
      {currentStep};
    </div>
  );

  let activeStep = <div>unknown step</div>;
  if (currentJourney == null) {
    // if there isn't a journey - render the chooser
    activeStep = <JourneyChooser goToNext={changeJourney} />;
  } else if (currentJourney.steps.length === currentStep) {
    activeStep = <FinalDisclosureStep goToNext={submitJourneyResults} />;
  } else {
    try {
      const journeyStep = currentJourney.steps[currentStep];
      const journeyStepProps = { ...journeyStep.props };
      journeyStepProps.goToNext = handleNextStep;
      journeyStepProps.goToPrev = handlePrevStep;

      // if you don't set the "key" here and you render two steps
      // back to back with the same component...
      // they will end up with the same state
      activeStep = <journeyStep.step key={currentStep} {...journeyStepProps} />;
    } catch (error) {
      console.error(error);
      activeStep = errorStep(error);
    }
  }

  if (activeStep == null) {
    activeStep = errorStep("Missing Step in Journey");
  }
  return (
    <div className="JourneyManager">
      <div>{activeStep}</div>
      <hr />
      <div>Here's some info about what's going on...</div>
      <div>Data collected for this journey:</div>
      <div>{JSON.stringify(currentJourneyData)}</div>
    </div>
  );
}

export default JourneyManager;
