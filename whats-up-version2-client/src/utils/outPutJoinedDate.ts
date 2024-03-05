const outPutJoinedDate = (timeString: string) => {
  let date = new Date(timeString);

  date.setUTCDate(date.getUTCDate() - 1);

  let formattedDate =
    date.getUTCFullYear() +
    "." +
    (date.getUTCMonth() + 1) +
    "." +
    date.getUTCDate();

  return formattedDate;
};

export default outPutJoinedDate;
