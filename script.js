const handleChangeTable = () => {
  for (let item of document.querySelectorAll(".Main__card")) {
    item.classList.toggle("hidden");
  }
  document.querySelector(".Main__right-button").classList.toggle("invisible");
  document.querySelector(".Main__left-button").classList.toggle("invisible");
};

const mobileTableContainer = () => {
  document.querySelector(".Main__left-button").classList.remove("hidden");
  document.querySelector(".Main__right-button").classList.remove("hidden");
  document.querySelector(".Main__left-button").classList.add("invisible");
  document.querySelector(".Main__right-button").classList.remove("invisible");
  document.getElementById("CurrenciesCard").classList.remove("hidden");
  document.getElementById("CommissionsCard").classList.add("hidden");

  const plansContainer = document.querySelector(".Main__plans-section");
  const planWidth = plansContainer.children[0].offsetWidth;

  plansContainer.scrollLeft = planWidth / 2;
};

const tabletTableContainer = () => {
  document.querySelector(".Main__right-button").classList.add("hidden");
  document.querySelector(".Main__left-button").classList.add("hidden");
  document.getElementById("CurrenciesCard").classList.remove("hidden");
  document.getElementById("CommissionsCard").classList.remove("hidden");
};

window.addEventListener("load", () => {
  const media = window.matchMedia(`(min-width: 800px)`);

  media.addEventListener("change", (e) => {
    if (e.matches) {
      tabletTableContainer();
    } else {
      mobileTableContainer();
    }
  });

  if (media.matches) {
    tabletTableContainer();
  } else {
    mobileTableContainer();
  }
});
