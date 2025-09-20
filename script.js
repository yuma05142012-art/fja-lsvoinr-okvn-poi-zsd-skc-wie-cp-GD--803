document.addEventListener("DOMContentLoaded", () => {
    const fade = document.getElementById("fade");
    const links = document.querySelectorAll("a.fade-link");
  
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault(); // 即移動をキャンセル
        fade.classList.add("active"); // 白フェード開始
        setTimeout(() => {
          window.location.href = this.href; // 1秒後に移動
        }, 500); // transitionの時間(1s)と合わせる
      });
    });
  });