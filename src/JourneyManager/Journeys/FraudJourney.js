import MultipleChoiceStep from "../JourneySteps/MultipleChoiceStep";
import NoticeStep from "../JourneySteps/NoticeStep";

export default {
  name: "fraud",
  steps: [
    {
      step: NoticeStep,
      props: {
        noticeTitle: "Did you notice?",
        noticeText: "This step doesn't have any input. It just has some info.",
      },
    },
    {
      step: NoticeStep,
      props: {
        noticeTitle: "Last notice step",
        noticeText:
          "You've already seen one of these - this is the last one :)",
      },
    },
    {
      step: MultipleChoiceStep,
      props: {
        title: "Multiple Choice",
        choices: [
          { id: 1, text: "First Choice" },
          { id: 2, text: "Second Choice" },
          { id: 3, text: "Third Choice" },
          { id: 4, text: "Last Choice" },
        ],
      },
    },
  ],
};
