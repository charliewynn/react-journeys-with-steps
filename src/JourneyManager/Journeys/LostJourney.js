import NoticeStep from "../JourneySteps/NoticeStep";

export default {
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