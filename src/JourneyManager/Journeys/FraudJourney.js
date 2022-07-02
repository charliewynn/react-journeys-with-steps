import MultipleChoiceStep from "../JourneySteps/MultipleChoiceStep";
import NoticeStep from "../JourneySteps/NoticeStep";
import YesNoCustom from "../JourneySteps/YesNoCustom";
import AdditionalString from "../JourneySteps/CustomSubComponents/AdditionalString";

export default {
  name: "fraud",
  steps: [
    {
      step: YesNoCustom,
      props: {
        title: "You need to say yes or no...",
      },
    },
    {
      step: YesNoCustom,
      props: {
        title: "If you say 'yes' you need to explain yourself",
        yesCustomComponent: {
          component: AdditionalString,
          props: {
            title: "Just type anything and I'll let you through...",
          },
        },
      },
    },
    {
      step: NoticeStep,
      props: {
        noticeTitle: "Did you notice?",
        noticeText: "This step doesn't have any input. It just has some info.",
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
    {
      step: NoticeStep,
      props: {
        noticeTitle: "Last notice step",
        noticeText:
          "You've already seen one of these - this is the last one :)",
      },
    },
  ],
};
