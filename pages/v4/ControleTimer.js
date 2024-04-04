import FormTimerControll from "./FormTimerControll";

export default ({
  limitTime,
  timerTitle,
  timerSubtitle,
  timerRemainTitle,
  timerRemainSubtitle,
  textSize,
  audioEnable,
  timerTextColor,
  fnTextSize,
  fnTimerTextColor,
  fnLimitTime,
  fnPlusOne,
  fnPlusFive,
  fnPlusTen,
  fnPlusThirty,
  showTimer,
  fnShowTimer,
  fnAudioEnable,
  fnTitle,
  fnSubtitle,
  fnTitleRemain,
  fnSubtitleRemain,
}) => {
  return (
    <FormTimerControll
      limitTime={limitTime}
      title={timerTitle}
      titleRemain={timerRemainTitle}
      subtitle={timerSubtitle}
      subtitleRemain={timerRemainSubtitle}
      textSize={textSize}
      audioEnable={audioEnable}
      timerTextColor={timerTextColor}
      fnTextSize={fnTextSize}
      fnTimerTextColor={fnTimerTextColor}
      fnLimitTime={fnLimitTime}
      fnPlusOne={fnPlusOne}
      fnPlusFive={fnPlusFive}
      fnPlusTen={fnPlusTen}
      fnPlusThirty={fnPlusThirty}
      showTimer={showTimer}
      fnShowTimer={fnShowTimer}
      fnAudioEnable={fnAudioEnable}
      fnTitle={fnTitle}
      fnSubtitle={fnSubtitle}
      fnTitleRemain={fnTitleRemain}
      fnSubtitleRemain={fnSubtitleRemain}
    />
  );
};
