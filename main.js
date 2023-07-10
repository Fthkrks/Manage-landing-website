const navbtnDOM = document.querySelector(".header-bar");
const headerModal = document.querySelector(".header-modal");
const modalCloseDOM = document.querySelector(".modal-close");



navbtnDOM.addEventListener("click", ()=>{
  headerModal.classList.add("active");
});


modalCloseDOM.addEventListener("click", ()=>{
  headerModal.classList.remove("active");
})

document.addEventListener("click", function(e){
  if (!e.composedPath().includes(navbtnDOM)){
      headerModal.classList.remove("active");
  };
});




const slider = new A11YSlider(document.querySelector(".slider-list"), {
  adaptiveHeight: false,
  dots: true,
  centerMode: true,
  arrows: false,
  responsive: {
    480: {
      dots: false, // dots enabled 1280px and up
    },
  },
});