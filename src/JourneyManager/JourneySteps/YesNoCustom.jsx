import { useState } from "react";
import PrevNextStepFooter from "../PrevNextStepFooter";
import "../../MultipleChoice.scss";

function YesNoCustom({ title, yesCustomComponent, goToPrev, goToNext }) {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [customComponentData, setCustomComponentData] = useState(null);

  const selectChoice = (choice, customComponent) => {
    setSelectedChoice(choice);
    if (customComponent) {
      setCustomComponentData({ valid: false });
    } else {
      setCustomComponentData(null);
    }
  };
  const renderChoice = (choice, customComponent) => {
    const isSelected = selectedChoice == choice;
    return (
      <div
        key={choice}
        className={isSelected ? "selected" : ""}
        onClick={() => selectChoice(choice, customComponent)}
      >
        {choice}
        {customComponent && isSelected && (
          <customComponent.component
            {...customComponent.props}
            updateParent={setCustomComponentData}
          />
        )}
      </div>
    );
  };

  let goToNextFn = null;
  if (selectedChoice) {
    if (!customComponentData) {
      goToNextFn = () => goToNext(selectedChoice);
    } else {
      goToNextFn = customComponentData.valid
        ? () =>
            goToNext({ choice: selectedChoice, data: customComponentData.data })
        : null;
    }
  }

  return (
    <div className="YesNoCustom">
      <div>{title}</div>
      <div className="MultipleChoiceSelector">
        {renderChoice("Yes", yesCustomComponent)}
        {renderChoice("No")}
      </div>
      <PrevNextStepFooter goToPrev={goToPrev} goToNext={goToNextFn} />
      <hr />
      <div>{JSON.stringify(customComponentData)}</div>
    </div>
  );
}

export default YesNoCustom;
