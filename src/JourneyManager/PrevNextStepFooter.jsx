function PrevNextStepFooter({ goToPrev, goToNext, nextDisabled }) {
  return (
    <div className="PrevNextStepFooter">
      {goToPrev && (
        <button className="btn btn-secondary" onClick={() => goToPrev()}>
          Previous
        </button>
      )}
      {goToNext && (
        <button
          disabled={nextDisabled}
          className="btn btn-primary"
          onClick={() => goToNext()}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default PrevNextStepFooter;
