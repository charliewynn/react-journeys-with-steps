import { useState } from "react";
import PrevNextStepFooter from "../PrevNextStepFooter";
import "../../MultipleChoiceStep.scss";

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

  const goToNextFn = selectedChoice ? goToNext : null;
  return (
    <div className="MultipleChoiceStep">
      <div>{title}</div>
      {choices.map(renderChoice)}
      <PrevNextStepFooter goToPrev={goToPrev} goToNext={goToNextFn} />
    </div>
  );
}

export default MultipleChoiceStep;
