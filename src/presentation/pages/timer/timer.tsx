import { useState } from "react";
import "./timer.styles.scss";

import { Header } from "@presentation/components/header/header";
import { Pause, Play } from "lucide-react";
import { useTimer } from "../../../application/hooks/use-timer.ts";
import { TIMES } from "@domain/constants/Timers";
import { formatTime } from "@domain/timer/formatTime";
import { SCHOOL_SUBJECTS } from "@domain/constants/Subjects.ts";

export default function Timer() {
  const [subject, setSubject] = useState("");

  const { selectedMinutes, timeLeft, isRunning, start, toggle } = useTimer();

  function handleTimeSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    start(Number(e.target.value));
  }

  return (
    <>
      <Header />

      <div className="timer-container">
        <div className="selectors">
          <select value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option value="">Matéria</option>

            {SCHOOL_SUBJECTS.map((subject) => (
              <option key={subject.value} value={subject.value}>
                {subject.label}
              </option>
            ))}
          </select>

          <select value={selectedMinutes} onChange={handleTimeSelect}>
            <option value="">Tempo de estudo</option>

            {TIMES.map((time) => (
              <option key={time} value={time}>
                {time} min
              </option>
            ))}
          </select>
        </div>

        <div className="study-label">Estudando</div>

        <div className="time-main">{formatTime(timeLeft)}</div>

        <button
          className="play-button"
          onClick={toggle}
          disabled={!subject || !selectedMinutes}
        >
          {isRunning ? <Pause /> : <Play />}
        </button>
      </div>
    </>
  );
}
