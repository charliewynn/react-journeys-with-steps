import { useState } from "react";
import PrevNextStepFooter from "../PrevNextStepFooter";
import "../../MultipleChoice.scss";

function MultipleChoiceStep({ title, choices, goToPrev, goToNext }) {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const renderChoice = (choice) => {
    const selectedChoiceId = selectedChoice ? selectedChoice.id : null;
    const isSelected = selectedChoiceId == choice.id;
    return (
      <div
        key={choice.id}
        className={isSelected ? "selected" : ""}
        onClick={() => setSelectedChoice(choice)}
      >
        {choice.text}
      </div>
    );
  };

  // if they go to next, we choose which data to pass in to the step data
  // in this case we will pass in the choice id
  const goToNextFn = selectedChoice ? () => goToNext(selectedChoice.id) : null;
  return (
    <div className="MultipleChoiceStep">
      <div>{title}</div>
      <div className="MultipleChoiceSelector">{choices.map(renderChoice)}</div>
      <PrevNextStepFooter goToPrev={goToPrev} goToNext={goToNextFn} />
    </div>
  );
}

export default MultipleChoiceStep;
