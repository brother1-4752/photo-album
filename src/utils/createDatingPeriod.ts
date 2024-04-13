const createDatingPeriod = () => {
  const firstDate = new Date("2023-12-31");
  const today = new Date();
  const dfTime = today.getTime() - firstDate.getTime();
  const dfDays = Math.floor(dfTime / (1000 * 3600 * 24)) + 1;
  const result = `${dfDays}일`;

  return result;
};

export default createDatingPeriod;
