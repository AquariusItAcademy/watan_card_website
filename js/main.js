var Pages = document.querySelectorAll(".page"),
  starterbtn = document.querySelectorAll(".starterbtn"),
  sp = document.querySelectorAll(".sp"),
  square = document.querySelectorAll(".Square");
bar = document.querySelectorAll(".bar");
set = document.querySelectorAll(".set");
back = document.querySelectorAll(".back");
barcode = document.querySelectorAll(".barcode");
console.log(starterbtn);
Pages.forEach((el) => {
  el.style.display = "none";
  Pages[0].classList.add("active");
});
starterbtn[0].addEventListener("click", () => {
  Pages[0].classList.remove("active");
  Pages[1].classList.add("active");
});
starterbtn[1].addEventListener("click", () => {
  Pages[0].classList.remove("active");
  Pages[2].classList.add("active");
});
starterbtn[2].addEventListener("click", () => {
  Pages[1].classList.remove("active");
  Pages[3].classList.add("active");
});
starterbtn[3].addEventListener("click", () => {
  Pages[2].classList.remove("active");
  Pages[3].classList.add("active");
});
square.forEach((sq) => {
  if (sq.classList.contains("s-2")) {
    sq.style.display = "none";
  }
  sp[0].classList.add("activespan");
});
sp[0].addEventListener("click", () => {
  square.forEach((sq) => {
    if (sq.classList.contains("s-2")) {
      sq.style.display = "none";
    } else {
      sq.style.display = "flex";
    }
    sp[1].classList.remove("activespan");
    sp[0].classList.add("activespan");
  });
});
sp[1].addEventListener("click", () => {
  square.forEach((sq) => {
    if (sq.classList.contains("s-2")) {
      sq.style.display = "flex";
    } else {
      sq.style.display = "none";
    }
    sp[0].classList.remove("activespan");
    sp[1].classList.add("activespan");
  });
});
back[0].addEventListener("click", () => {
  Pages[1].classList.remove("active");
  Pages[0].classList.add("active");
});
back[1].addEventListener("click", () => {
  Pages[2].classList.remove("active");
  Pages[0].classList.add("active");
});
back[2].addEventListener("click", () => {
  Pages[4].classList.remove("active");
  Pages[3].classList.add("active");
});
back[3].addEventListener("click", () => {
  Pages[5].classList.remove("active");
  Pages[3].classList.add("active");
});
back[4].addEventListener("click", () => {
  Pages[6].classList.remove("active");
  Pages[3].classList.add("active");
});
back[5].addEventListener("click", () => {
  Pages[7].classList.remove("active");
  Pages[3].classList.add("active");
});
bar[0].addEventListener("click", () => {
  Pages[3].classList.remove("active");
  Pages[4].classList.add("active");
});
set[0].addEventListener("click", () => {
  Pages[3].classList.remove("active");
  Pages[5].classList.add("active");
});
barcode[0].addEventListener("click", () => {
  Pages[3].classList.remove("active");
  Pages[6].classList.add("active");
});
// square[0].addEventListener("click", () => {
//   Pages[3].classList.remove("active");
//   Pages[7].classList.add("active");
// });
// square[1].addEventListener("click", () => {
//   Pages[3].classList.remove("active");
//   Pages[7].classList.add("active");
// });
// square[2].addEventListener("click", () => {
//   Pages[3].classList.remove("active");
//   Pages[7].classList.add("active");
// });
// square[3].addEventListener("click", () => {
//   Pages[3].classList.remove("active");
//   Pages[7].classList.add("active");
// });
// square[4].addEventListener("click", () => {
//   Pages[3].classList.remove("active");
//   Pages[7].classList.add("active");
// });
// square[5].addEventListener("click", () => {
//   Pages[3].classList.remove("active");
//   Pages[7].classList.add("active");
// });
// square[6].addEventListener("click", () => {
//   Pages[3].classList.remove("active");
//   Pages[7].classList.add("active");
// });
// square[7].addEventListener("click", () => {
//   Pages[3].classList.remove("active");
//   Pages[7].classList.add("active");
// });
// square[8].addEventListener("click", () => {
//   Pages[3].classList.remove("active");
//   Pages[7].classList.add("active");
// });
// square[9].addEventListener("click", () => {
//   Pages[3].classList.remove("active");
//   Pages[7].classList.add("active");
// });
// square[10].addEventListener("click", () => {
//   Pages[3].classList.remove("active");
//   Pages[7].classList.add("active");
// });
// square[11].addEventListener("click", () => {
//   Pages[3].classList.remove("active");
//   Pages[7].classList.add("active");
// });
// square[12].addEventListener("click", () => {
//   Pages[3].classList.remove("active");
//   Pages[7].classList.add("active");
// });
// square[13].addEventListener("click", () => {
//   Pages[3].classList.remove("active");
//   Pages[7].classList.add("active");
// });
square.forEach((el) => {
  el.addEventListener("click", () => {
    Pages[3].classList.remove("active");
    Pages[7].classList.add("active");
  });
});
