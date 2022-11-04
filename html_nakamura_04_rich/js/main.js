// jsを記述する際はここに記載していく
// import Swiper from "swiper";

let body = document.getElementById("mouse");
const cheeses = [
  "img/cheese01.png",
  "img/cheese02.png",
  "img/cheese03.png",
  "img/cheese04.png",
  "img/cheese05.png",
  "img/cheese06.png",
  // "img/cheese07.png",
];

// 設定した引数（数字）までの整数を適当に出す
// 例：）引数２の場合、0,1のどちらかがリターンされる
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function screenClick() {
  // 爆弾がきたら爆発して
  // if (body.style.cursor.includes(cheeses[cheeses.length - 1])) return;

  // 爆弾じゃない場合、画像を切り替える
  const randomNumber = getRandomInt(7);
  body.style.cursor = `url(${cheeses[randomNumber]}), auto`;

  // 爆弾画像に切り替わったときに、爆弾発火ロジック起動
  // if (randomNumber === cheeses.length - 1) {
  //   var s = document.createElement("script");
  //   s.setAttribute("src", "http://fontbomb.ilex.ca/js/main.js");
  //   document.body.appendChild(s);
  // }
}
body.addEventListener("click", screenClick);

// コースの写真のスライダー
$("#slider").slick({
  autoplaySpeed: 2000,
  dots: true,
  autoplay: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
});
// topへ戻るボタン
$(window).scroll(function () {
  if ($(this).scrollTop() < 100) {
    $("#top").css("display", "none");
  }
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("#top").css("display", "block");
  }
});
// 各タブのスクロール制御
$("#top").click(function () {
  var position = 0;
  var speed = 600;
  $("html,body").animate({ scrollTop: position }, speed);
});
$("#aboutTab").click(function () {
  var about = $("#about").offset().top;

  $("html, body").animate({ scrollTop: about });
});
$("#courseTab").click(function () {
  var course = $("#course").offset().top;

  $("html, body").animate({ scrollTop: course });
});
$("#newsTab").click(function () {
  var news = $("#news").offset().top;

  $("html, body").animate({ scrollTop: news });
});
$("#accessTab").click(function () {
  var access = $("#access").offset().top;

  $("html, body").animate({ scrollTop: access });
});
$("#contactTab").click(function () {
  var contact = $("#contact").offset().top;

  $("html, body").animate({ scrollTop: contact });
});
// modalOpenFunc
const modalFunction = function () {
  $("#overRay , #closeModalBtn").on("click", function () {
    $("#modal").fadeOut(300);
  });
  $("#openContactModal").on("click", function () {
    $("#modal").fadeIn(300);
  });
};
modalFunction();

// game!
// const canvas = document.getElementById("myCanvas");
// const ctx = canvas.getContext("2d");
// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();

// dark
function toggleDarkMode() {
  // htmlタグにdarkクラスが含まれているかどうか
  if (body.documentElement.contains("dark")) {
    // darkクラスが含まれているならライトモードに変更
    body.documentElement.remove("dark");
    localStorage.theme = "light";
  } else {
    // darkクラスが含まれていないならダークモードに変更
    body.documentElement.add("dark");
    localStorage.theme = "dark";
  }
}
$("#darkMode").on("click", function () {
  if ($("#mouse").attr("class") == "dark") {
    $("#mouse").removeClass();
  } else {
    $("#mouse").addClass("dark");
  }
});
