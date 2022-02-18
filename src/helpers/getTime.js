import moment from "moment";

/* HELPER TO GET TIME ON CITY (HOUR, MINUTES, PM OR ARM) */
const getTime = (timezone) => {
  const timezoneInMinutes = timezone / 60;
  const currTime = moment().utcOffset(timezoneInMinutes).format("h:mm A");

  return currTime;
}

export default getTime;