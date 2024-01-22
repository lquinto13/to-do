import { useState } from "react";
import { days, months } from "../constants/index";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";

function Calendar() {
  const INITIAL_YEAR = dayjs().format("YYYY");
  const INITIAL_MONTH = dayjs().format("M");
  const [month, setMonth] = useState(Number(INITIAL_MONTH));
  const [monthWords, setMonthWords] = useState(
    dayjs()
      .month(INITIAL_MONTH - 1)
      .format("MMMM")
  );

  const [year, setYear] = useState(Number(INITIAL_YEAR));

  var weekday = require("dayjs/plugin/weekday");
  var weekOfYear = require("dayjs/plugin/weekOfYear");

  dayjs.extend(weekOfYear);
  dayjs.extend(weekday);

  // const [monthNum, setMonthNum] = useState(date.getMonth());
  // const [year, setYear] = useState(date.getFullYear());
  // const [monthWord, setMonthWord] = useState(months[date.getMonth()]);
  function incrementMonthAndYear() {
    let nextMonth = month + 1;

    if (nextMonth === 12) {
      nextMonth = 1;
      setYear(year + 1);
      setMonth(nextMonth);
      setMonthWords(
        dayjs()
          .month(nextMonth - 1)
          .format("MMMM")
      );
    } else {
      setMonth(nextMonth);
      setMonthWords(
        dayjs()
          .month(nextMonth - 1)
          .format("MMMM")
      );
    }
  }

  function decrementMonthAndYear() {
    let nextMonth = month - 1;
    let nextYear = year;

    if (nextMonth === 0) {
      nextMonth = 12;
      setYear(nextYear - 1);
      setMonth(nextMonth);
      setMonthWords(
        dayjs()
          .month(nextMonth - 1)
          .format("MMMM")
      );
    } else {
      setMonth(nextMonth);

      setMonthWords(
        dayjs()
          .month(nextMonth - 1)
          .format("MMMM")
      );
    }
  }

  function getNumberOfDaysInMonth(year, month) {
    return dayjs(`${year}-${month}-01`).daysInMonth();
  }

  function createDaysForCurrentMonth(year, month) {
    return [...Array(getNumberOfDaysInMonth(year, month))].map((day, index) => {
      return {
        dateString: dayjs(`${year}-${month}-${index + 1}`).format("YYYY-MM-DD"),
        dayOfMonth: index + 1,
        isCurrentMonth: true,
      };
    });
  }

  function createDaysForPreviousMonth(year, month, currentMonthDays) {
    const firstDayOfTheMonthWeekday = getWeekday(
      currentMonthDays[0].dateString
    );
    const previousMonth = dayjs(`${year}-${month}-01`).subtract(1, "month");

    const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday;

    const previousMonthLastMondayDayOfMonth = dayjs(
      currentMonthDays[0].dateString
    )
      .subtract(visibleNumberOfDaysFromPreviousMonth, "day")
      .date();

    return [...Array(visibleNumberOfDaysFromPreviousMonth)].map((_, index) => {
      return {
        dateString: dayjs(
          `${previousMonth.year()}-${previousMonth.month() + 1}-${
            previousMonthLastMondayDayOfMonth + index
          }`
        ).format("YYYY-MM-DD"),
        dayOfMonth: previousMonthLastMondayDayOfMonth + index,
        isCurrentMonth: false,
        isPreviousMonth: true,
      };
    });
  }

  function createDaysForNextMonth(year, month, currentMonthDays) {
    const lastDayOfTheMonthWeekday = getWeekday(
      `${year}-${month}-${currentMonthDays.length}`
    );
    const nextMonth = dayjs(`${year}-${month}-01`).add(1, "month");
    const visibleNumberOfDaysFromNextMonth = 6 - lastDayOfTheMonthWeekday;

    return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
      return {
        dateString: dayjs(
          `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`
        ).format("YYYY-MM-DD"),
        dayOfMonth: index + 1,
        isCurrentMonth: false,
        isNextMonth: true,
      };
    });
  }

  function getWeekday(dateString) {
    return dayjs(dateString).weekday();
  }
  let currentMonthDays = createDaysForCurrentMonth(year, month);

  let previousMonthDays = createDaysForPreviousMonth(
    year,
    month,
    currentMonthDays
  );

  let nextMonthDays = createDaysForNextMonth(year, month, currentMonthDays);
  let calendarGridDayObjects = [
    ...previousMonthDays,
    ...currentMonthDays,
    ...nextMonthDays,
  ];

  return (
    <div className="flex flex-col p-4 items-center w-screen">
      <span className="flex gap-5 items-center fa-lg select-none">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={decrementMonthAndYear}
          className="cursor-pointer"
        />
        <h1 className="flex text-4xl w-96 justify-center ">
          <strong>
            {monthWords} {year}
          </strong>
        </h1>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="cursor-pointer"
          onClick={incrementMonthAndYear}
        />
      </span>
      <div>
        <ol className="grid grid-cols-7 border-4 gap-3 mt-2">
          {days.map((day) => (
            <li key={day} className="text-2xl ">
              <strong>{day}</strong>
            </li>
          ))}
          {calendarGridDayObjects.map((days, index) => (
            <l1 className="h-24" key={index}>
              {days.dayOfMonth}
            </l1>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Calendar;