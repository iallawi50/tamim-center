// prices
// *******************************************************
console.log("Last Updated at : 2023/3/5");
let price = {
  // BLACK AND WHITE PRICES
  black: {
    oneFace: 7, // ONE FACE ONLY
    twoFace: 8, // TWO FACE
  },
  color: {
    oneFace: 2.5, // ONE FACE ONLY
    twoFace: 3, // TWO FACE
  },
  colorPlus: {
    oneFace: 1.5, // ONE FACE ONLY
    twoFace: 1.5, // TWO FACE
  },
  spring: 7,
};
// *******************************************************

let inputs = document.querySelectorAll("input");
inputs.forEach((el) => {
  el.addEventListener("input", () => {
    calculator();
  });
});

// document.querySelector(".reset").addEventListener("click", () => {
//   inputs.forEach((el) => (el.value = ""));
//   inputs.forEach((el) => (el.checked = false));
// });
function Coercion(num) {
  if (num == 9) {
    return 10;
  }

  if (num > 30) {
    num = num.toString().split("");
    if (num[num.length - 1] > 0 && num[num.length - 1] < 5) {
      num[num.length - 1] = 5;
    } else if (num[num.length - 1] > 5 && num[num.length - 1] <= 9) {
      num[num.length - 1] = 0;
      num[num.length - 2] = +num[num.length - 2] + 1;
    }

    return +num.join("");
  } else {
    return num;
  }
}
function calculator() {
  var total;
  let pageCounter = document.querySelector("#pages").value;

  let pages = document.querySelectorAll("input[name=typePage]");

  let typeColor = document.querySelectorAll("input[name=typeColor]");

  let faces = document.querySelectorAll("input[name=faces]");

  let copies = document.querySelector("#copies");
  // SLIDE ON PAGE
  if (pages[1].checked == true) {
    total = pageCounter / 2;
  } else if (pages[2].checked == true) {
    total = pageCounter / 4;
  } else {
    total = pageCounter / 1;
  }
  total = Math.ceil(total);

  if (typeColor[0].checked == true) {
    if (faces[0].checked) {
      total /= price.black.oneFace;
    } else {
      total /= price.black.twoFace;
    }
  } else if (typeColor[1].checked == true) {
    if (faces[0].checked) {
      total /= price.color.oneFace;
    } else {
      total /= price.color.twoFace;
    }
  } else if (typeColor[2].checked == true) {
    if (faces[0].checked) {
      total /= price.colorPlus.oneFace;
    } else {
      total /= price.colorPlus.twoFace;
    }
  }
  total = Math.ceil(total);

  total = Coercion(Math.ceil(total));
  if (document.querySelector("input[name=spring]").checked) {
    total += price.spring;
  }
  total = Coercion(total);

  if (copies.value != "") {
    total *= copies.value;
    // total = Coercion(total)
  }
  document.querySelectorAll(".layer, .total").forEach((el) => {
    el.textContent = `المجموع : ${total} ريال`;
  });
  // document.querySelector(".total").textContent = `المجموع : ${total} ريال`;
}
