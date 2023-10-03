/* header */
//控制 nav 手機版位置
window.addEventListener("scroll",function() {
    const stickyElement = document.getElementById("sticky");

    //獲取當前頁面的垂直滾動位置
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        // 當頁面滾動時，設置position: fixed
        stickyElement.classList.add('sticky-fixed');
    } else{
        // 當頁面置頂時，設置position: relative
        stickyElement.classList.remove("sticky-fixed");
    }
});