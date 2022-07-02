import NoticeStep from "../JourneySteps/NoticeStep";

const LostJourney = {
  name: "lost",
  steps: [
    {
      step: NoticeStep,
      props: {
        noticeTitle: "Did you notice?",
        noticeText: "This step doesn't have any input. It just has some info.",
      },
    },
  ],
};

export default LostJourney;
