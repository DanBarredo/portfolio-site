// copyright date

const Date = () => {
  const date = document.getElementById("date-year");
  date.innerHTML = new Date().getFullYear();
};

export default Date;
