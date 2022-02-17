import moment from 'moment';

const getDate = (timezone) => {
  const timeZoneInMinutes = timezone / 60;
  const day = moment().utcOffset(timeZoneInMinutes).format("dddd D MMMM YYYY")

  return day;
}

export default getDate;