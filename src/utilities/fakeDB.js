const addToDB = (time) => {
  localStorage.setItem("time", time);
};

const getTime = () => {
  const time = localStorage.getItem("time");
  return time;
};

export { addToDB, getTime };
