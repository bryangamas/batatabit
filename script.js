const handleChangeTable = () => {
  for (let item of document.querySelectorAll(".Main__card")) {
    item.classList.toggle("d-none");
  }
  document.querySelector(".Main__right-button").classList.toggle("hidden");
  document.querySelector(".Main__left-button").classList.toggle("hidden");
};
