import { useState } from "react";
import PrevNextStepFooter from "./PrevNextStepFooter";

function FinalDisclosureStep({ goToNext }) {
  return (
    <div className="FinalDisclosureStep">
      <h1>You made it!</h1>
      <div>Click next to submit everything...</div>

      <PrevNextStepFooter goToNext={goToNext} />
    </div>
  );
}

export default FinalDisclosureStep;
