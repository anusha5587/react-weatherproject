import React from "react";

export default function FormatDate(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const originalDate = new Date(props.date);
  if (isNaN(originalDate.getTime())) {
    console.error("Invalid date:", props.date);
    return <div>Invalid Date</div>;
  }

  const timezoneOffsetSeconds = parseFloat(props.timeZone);
  if (isNaN(timezoneOffsetSeconds)) {
    console.error("Invalid timeZone:", props.timeZone);
    return <div>Invalid TimeZone</div>;
  }
  const adjustedDate = new Date(
    originalDate.getTime() + timezoneOffsetSeconds * 1000
  );

  const formattedDate = `${days[adjustedDate.getUTCDay()]}, ${
    months[adjustedDate.getUTCMonth()]
  } ${adjustedDate.getUTCDate()},  ${adjustedDate
    .getUTCHours()
    .toString()
    .padStart(2, "0")}:${adjustedDate
    .getUTCMinutes()
    .toString()
    .padStart(2, "0")}`;

  return <div>{formattedDate}</div>;
}
