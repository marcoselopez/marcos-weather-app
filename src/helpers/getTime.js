import moment from "moment";

const getTime = (timezone) => {
  const timezoneInMinutes = timezone / 60;
  const currTime = moment().utcOffset(timezoneInMinutes).format("h:mm A");

  return currTime;
}

export default getTime;