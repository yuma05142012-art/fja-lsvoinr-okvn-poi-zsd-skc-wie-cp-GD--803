document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".ranking li");
    const total = items.length;
  
    // 下位（最後の要素）から順番に .show を付ける
    items.forEach((_, i) => {
      setTimeout(() => {
        const target = items[total - 1 - i];
        target.classList.add("show");
      }, i * 600); // 0.6秒ごとに順番に表示
    });
  });