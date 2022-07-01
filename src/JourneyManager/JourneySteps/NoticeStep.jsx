import PrevNextStepFooter from "../PrevNextStepFooter";

function NoticeStep({ noticeTitle, noticeText, goToPrev, goToNext }) {
  return (
    <div className="NoticeStep">
      <div>{noticeTitle}</div>
      <p>{noticeText}</p>
      <PrevNextStepFooter goToPrev={goToPrev} goToNext={goToNext} />
    </div>
  );
}

export default NoticeStep;
