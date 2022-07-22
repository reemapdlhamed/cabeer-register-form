const wrapper = document.querySelector(".wrapper");
const cancelBtn = document.querySelector("#cancel-btn");
const fileName = document.querySelector(".file-name");
const defaultBtn = document.querySelector("#default-btn");
const img = document.querySelector(".img-one");
let regExp = /[0-9a-zA-Z\^\&\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_]+$/;
function defaultActiveBtn() {
  defaultBtn.click();
}
defaultBtn.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const result = reader.result;
      img.src = result;
      wrapper.classList.add("active");
    };
    cancelBtn.addEventListener("click", function () {
      img.src = "";
      wrapper.classList.remove("active");
    });
    reader.readAsDataURL(file);
  }
  if (this.value) {
    let valueStored = this.value.match(regExp);
    fileName.textContent = valueStored;
  }
});
//********************************
const cancelBtnTwo = document.querySelector("#cancel-btn-2");
const wrapperTwo = document.querySelector(".wrapper-two");
const fileNameTwo = document.querySelector(".file-name-two");
const imgTwo = document.querySelector(".img-two");
const defaultBtnTwo = document.querySelector("#default-btn-two");
function defaultActiveBtnTwo() {
  defaultBtnTwo.click();
}
defaultBtnTwo.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const result = reader.result;
      imgTwo.src = result;
      wrapperTwo.classList.add("active");
    };
    cancelBtnTwo.addEventListener("click", function () {
      imgTwo.src = "";
      wrapperTwo.classList.remove("active");
    });
    reader.readAsDataURL(file);
  }
  if (this.value) {
    let valueStored = this.value.match(regExp);
    fileNameTwo.textContent = valueStored;
  }
});
//*************************
const cancelBtnThree = document.querySelector("#cancel-btn-3");
const wrapperThree = document.querySelector(".wrapper-3");
const fileNameThree = document.querySelector(".file-name-3");
const imgThree = document.querySelector(".img-3");
const defaultBtnThree = document.querySelector("#default-btn-3");

function defaultActiveBtnThree() {
  defaultBtnThree.click();
}
defaultBtnThree.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const result = reader.result;
      imgThree.src = result;
      wrapperThree.classList.add("active");
    };
    cancelBtnThree.addEventListener("click", function () {
      imgThree.src = "";
      wrapperThree.classList.remove("active");
    });
    reader.readAsDataURL(file);
  }
  if (this.value) {
    let valueStored = this.value.match(regExp);
    fileNameThree.textContent = valueStored;
  }
});
//*************************
const cancelBtnFour = document.querySelector("#cancel-btn-4");

const wrapperFour = document.querySelector(".wrapper-4");
const fileNameFour = document.querySelector(".file-name-4");
const imgFour = document.querySelector(".img-4");
const defaultBtnFour = document.querySelector("#default-btn-4");

function defaultActiveBtnFour() {
  defaultBtnFour.click();
}
defaultBtnFour.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const result = reader.result;
      imgFour.src = result;
      wrapperFour.classList.add("active");
    };
    cancelBtnFour.addEventListener("click", function () {
      imgFour.src = "";
      wrapperFour.classList.remove("active");
    });
    reader.readAsDataURL(file);
  }
  if (this.value) {
    let valueStored = this.value.match(regExp);
    fileNameFour.textContent = valueStored;
  }
});
//*******************************
const cancelBtnFive = document.querySelector("#cancel-btn-5");

const wrapperFive = document.querySelector(".wrapper-5");
const fileNameFive = document.querySelector(".file-name-5");
const imgFive = document.querySelector(".img-5");
const defaultBtnFive = document.querySelector("#default-btn-5");

function defaultActiveBtnFive() {
  defaultBtnFive.click();
}
defaultBtnFive.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const result = reader.result;
      imgFive.src = result;
      wrapperFive.classList.add("active");
    };
    cancelBtnFive.addEventListener("click", function () {
      imgFive.src = "";
      wrapperFive.classList.remove("active");
    });
    reader.readAsDataURL(file);
  }
  if (this.value) {
    let valueStored = this.value.match(regExp);
    fileNameFive.textContent = valueStored;
  }
});
//**********************************
const cancelBtnSix = document.querySelector("#cancel-btn-6");
const wrapperSix = document.querySelector(".wrapper-6");
const fileNameSix = document.querySelector(".file-name-6");
const imgSix = document.querySelector(".img-6");
const defaultBtnSix = document.querySelector("#default-btn-6");

function defaultActiveBtnSix() {
  defaultBtnSix.click();
}
defaultBtnSix.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const result = reader.result;
      imgSix.src = result;
      wrapperSix.classList.add("active");
    };
    cancelBtnSix.addEventListener("click", function () {
      imgSix.src = "";
      wrapperSix.classList.remove("active");
    });
    reader.readAsDataURL(file);
  }
  if (this.value) {
    let valueStored = this.value.match(regExp);
    fileNameSix.textContent = valueStored;
  }
});
//**************** */
const cancelBtnSeven = document.querySelector("#cancel-btn-7");
const wrapperSeven = document.querySelector(".wrapper-7");
const fileNameSeven = document.querySelector(".file-name-6");
const imgSeven = document.querySelector(".img-7");
const defaultBtnSeven = document.querySelector("#default-btn-7");

function defaultActiveBtnSeven() {
  defaultBtnSeven.click();
}
defaultBtnSeven.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const result = reader.result;
      imgSeven.src = result;
      wrapperSeven.classList.add("active");
    };
    cancelBtnSeven.addEventListener("click", function () {
      imgSeven.src = "";
      wrapperSeven.classList.remove("active");
    });
    reader.readAsDataURL(file);
  }
  if (this.value) {
    let valueStored = this.value.match(regExp);
    fileNameSeven.textContent = valueStored;
  }
});//**************** */
const cancelBtnEight = document.querySelector("#cancel-btn-8");
const wrapperEight = document.querySelector(".wrapper-8");
const fileNameEight= document.querySelector(".file-name-8");
const imgEight = document.querySelector(".img-8");
const defaultBtnEight = document.querySelector("#default-btn-8");

function defaultActiveBtnEight() {
  defaultBtnEight.click();
}
defaultBtnEight.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const result = reader.result;
      imgEight.src = result;
      wrapperEight.classList.add("active");
    };
    cancelBtnEight.addEventListener("click", function () {
      imgEight.src = "";
      wrapperEight.classList.remove("active");
    });
    reader.readAsDataURL(file);
  }
  if (this.value) {
    let valueStored = this.value.match(regExp);
    fileNameEight.textContent = valueStored;
  }
});
//***************************** */
const cancelBtnNine = document.querySelector("#cancel-btn-9");
const wrapperNine = document.querySelector(".wrapper-9");
const fileNamenine= document.querySelector(".file-name-9");
const imgNine = document.querySelector(".img-9");
const defaultBtnNine = document.querySelector("#default-btn-9");

function defaultActiveBtnNine() {
  defaultBtnNine.click();
}
defaultBtnNine.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const result = reader.result;
      imgNine.src = result;
      wrapperNine.classList.add("active");
    };
    cancelBtnNine.addEventListener("click", function () {
      imgNine.src = "";
      wrapperNine.classList.remove("active");
    });
    reader.readAsDataURL(file);
  }
  if (this.value) {
    let valueStored = this.value.match(regExp);
    fileNamenine.textContent = valueStored;
  }
});
//***************************** */
const cancelBtnTen = document.querySelector("#cancel-btn-10");
const wrapperTen = document.querySelector(".wrapper-10");
const fileNametTen= document.querySelector(".file-name-10");
const imgTen = document.querySelector(".img-10");
const defaultBtnTen = document.querySelector("#default-btn-10");

function defaultActiveBtnTen() {
  defaultBtnTen.click();
}
defaultBtnTen.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const result = reader.result;
      imgTen.src = result;
      wrapperTen.classList.add("active");
    };
    cancelBtnTen.addEventListener("click", function () {
      imgTen.src = "";
      wrapperTen.classList.remove("active");
    });
    reader.readAsDataURL(file);
  }
  if (this.value) {
    let valueStored = this.value.match(regExp);
    fileNametTen.textContent = valueStored;
  }
});