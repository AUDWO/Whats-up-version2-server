const dateFormKorean = (timeString: string) => {
  let date = new Date(timeString);

  let formattedDate =
    date.getUTCFullYear() +
    "년 " +
    (date.getUTCMonth() + 1) +
    "월 " +
    date.getUTCDate() +
    "일";

  return formattedDate;
};

export default dateFormKorean;
