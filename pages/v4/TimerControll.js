import { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";

import ToogleTimerElement from "./ToogleTimerElement";
import { useAppState } from "./stateService";
import ControleTimer from "./ControleTimer";

export default () => {
  const { dispatchUpdate } = useAppState(); // Use o hook personalizado

  const [editComponent, setEditComponent] = useState(false);
  const handleOpen = () => setEditComponent(true);
  const handleClose = () => setEditComponent(false);

  const limitTime = useSelector((state) => state.timer.limitTime);
  const showTimer = useSelector((state) => state.timer.showTimer);
  const timerTitle = useSelector((state) => state.timer.timerTitle);
  const timerSubtitle = useSelector((state) => state.timer.timerSubtitle);
  const timerTextSize = useSelector((state) => state.timer.timerTextSize);
  const audioEnableTimer = useSelector((state) => state.timer.audioEnable);
  const timerTextColor = useSelector((state) => state.timer.timerTextColor);
  const timerRemainTitle = useSelector((state) => state.timer.timerRemainTitle);
  const timerRemainSubtitle = useSelector(
    (state) => state.timer.timerRemainSubtitle
  );

  const audioEnable = useSelector((state) => state.timer.audioEnable);

  // this function increments the limitTime value
  function handlePlusTime(moreTime) {
    const time = moment(limitTime, "HH:mm:ss");

    // Add the specified number of minutes
    time.add(moreTime, "minutes");

    // Format the updated time string with leading zeros
    const formattedTime = time.format("HH:mm:ss");
    dispatchUpdate({ target: { value: formattedTime } }, "setLimitTime");
  }

  function handlePlusMinute() {
    handlePlusTime(1);
  }

  function handlePlusFiveMinutes() {
    handlePlusTime(5);
  }

  function handlePlusTenMinutes() {
    handlePlusTime(10);
  }

  function handlePlusThirtyMinutes() {
    handlePlusTime(30);
  }

  return (
    <>
      <ToogleTimerElement
        fnPlusOne={handlePlusMinute}
        fnPlusFive={handlePlusFiveMinutes}
        fnPlusTen={handlePlusTenMinutes}
        fnPlusThirty={handlePlusThirtyMinutes}
        showTimer={showTimer}
        fnShowTimer={() =>
          dispatchUpdate({ target: { value: !showTimer } }, "setShowTimer")
        }
        audioEnable={audioEnable}
        fnAudioEnable={() =>
          dispatchUpdate({ target: { value: !audioEnable } }, "setAudioEnable")
        }
        modalFn={handleOpen}
      />
      <Modal
        open={editComponent}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ControleTimer
          limitTime={limitTime}
          showTimer={showTimer}
          timerTitle={timerTitle}
          timerSubtitle={timerSubtitle}
          timerRemainTitle={timerRemainTitle}
          timerRemainSubtitle={timerRemainSubtitle}
          timerTextSize={timerTextSize}
          audioEnable={audioEnableTimer}
          timerTextColor={timerTextColor}
          fnTimerTextColor={(e) => dispatchUpdate(e, "setTimerTextColor")}
          fnTextSize={(e) => dispatchUpdate(e, "setTimerTextSize")}
          fnLimitTime={(e) => dispatchUpdate(e, "setLimitTime")}
          fnPlusOne={handlePlusMinute}
          fnPlusFive={handlePlusFiveMinutes}
          fnPlusTen={handlePlusTenMinutes}
          fnPlusThirty={handlePlusThirtyMinutes}
          fnShowTimer={() =>
            dispatchUpdate({ target: { value: !showTimer } }, "setShowTimer")
          }
          fnAudioEnable={() =>
            dispatchUpdate(
              { target: { value: !audioEnable } },
              "setAudioEnable"
            )
          }
          fnTitle={(e) => dispatchUpdate(e, "setTimerTitle")}
          fnSubtitle={(e) => dispatchUpdate(e, "setTimerSubtitle")}
          fnTitleRemain={(e) => dispatchUpdate(e, "setTimerTitleRemain")}
          fnSubtitleRemain={(e) => dispatchUpdate(e, "setTimerSubtitleRemain")}
        />
      </Modal>
    </>
  );
};
