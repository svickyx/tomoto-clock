import React, { useState, useEffect } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faCog,
  faUserCircle,
  faEllipsisV,
  faPlusCircle,
  faLock,
  faStepForward,
  faTrashAlt,
  faCheck,
  faPlus,
  faSave,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

import Header from "./header/header";
import ControlPanel from "./control-panel/control-panel";
import Clock from "./clock/clock";
import StartButton from "./start-button/start-button";
import Task from "./task/task";

import "./App.css";

const App = () => {
  const [action, setAction] = useState("pomodoro");
  const [timer, setTimer] = useState(1500);
  const [description, setDescription] = useState("Time to work!");
  const [countDownActive, setCountDownActive] = useState(false);
  const [showTaskPopup, setShowTaskPopup] = useState(false);
  const [addTaskPanel, setAddTaskPanel] = useState(true);

  useEffect(() => {
    if (action === "pomodoro") {
      setTimer(1500);
      setCountDownActive(false);
      setDescription("Time to work!");
    }
    if (action === "short") {
      setTimer(300);
      setCountDownActive(false);
      setDescription("Time for a break!");
    }
    if (action === "long") {
      setTimer(900);
      setCountDownActive(false);
      setDescription("Time for a break!");
    }
  }, [action]);

  useEffect(() => {
    let timeoutTag;
    if (countDownActive && timer > 0) {
      timeoutTag = setTimeout(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    }
    return () => clearTimeout(timeoutTag);
  }, [countDownActive, timer]);

  const formatTime = () => {
    let getSeconds = `${timer % 60}`;
    let getMinutes = `${Math.floor(timer / 60)}`;

    if (getSeconds <= 9) {
      getSeconds = `0${timer % 60}`;
    }
    if (getMinutes <= 9) {
      getMinutes = `0${Math.floor(timer / 60)}`;
    }

    return `${getMinutes}:${getSeconds}`;
  };

  const toggleTaskPopup = () => {
    setShowTaskPopup(!showTaskPopup);
  };

  const switchToPomodoro = () => {
    confirmAlert({
      title: "Confirm to submit",
      message: "The timer is still running, are you sure you want to switch?",
      buttons: [
        {
          label: "Yes",
          onClick: () => setAction("pomodoro"),
        },
        {
          label: "No",
        },
      ],
    });
  };
  const switchToShort = () => {
    confirmAlert({
      title: "Confirm to submit",
      message: "The timer is still running, are you sure you want to switch?",
      buttons: [
        {
          label: "Yes",
          onClick: () => setAction("short"),
        },
        {
          label: "No",
        },
      ],
    });
  };
  const switchToLong = () => {
    confirmAlert({
      title: "Confirm to submit",
      message: "The timer is still running, are you sure you want to switch?",
      buttons: [
        {
          label: "Yes",
          onClick: () => setAction("long"),
        },
        {
          label: "No",
        },
      ],
    });
  };
  return (
    <div>
      <div
        style={{
          backgroundColor:
            action === "short"
              ? "rgb(70, 142, 145)"
              : action === "long"
              ? "rgb(67, 126, 168)"
              : "",
        }}
        className="homepage-container"
      >
        <Header />
        <div>
          <div className="timer-container">
            <ControlPanel
              action={action}
              setAction={setAction}
              countDownActive={countDownActive}
              switchToPomodoro={switchToPomodoro}
              switchToShort={switchToShort}
              switchToLong={switchToLong}
            />
            <Clock formatTime={formatTime} />
            <StartButton
              action={action}
              countDownActive={countDownActive}
              setCountDownActive={setCountDownActive}
            />
          </div>
          <div className="description-container">
            <h3>{description}</h3>
          </div>
          <Task
            showTaskPopup={showTaskPopup}
            toggleTaskPopup={toggleTaskPopup}
            addTaskPanel={addTaskPanel}
            setAddTaskPanel={setAddTaskPanel}
          />
        </div>
      </div>
    </div>
  );
};

library.add(
  fas,
  far,
  faFileAlt,
  faCog,
  faUserCircle,
  faEllipsisV,
  faPlusCircle,
  faLock,
  faStepForward,
  faTrashAlt,
  faCheck,
  faSave,
  faPlus,
  faCheckCircle
);

export default App;
