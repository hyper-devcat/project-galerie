// 獲取元素
//  縮圖父盒子
var xc = document.getElementById('xc');
//  檢驗是否獲取到元素
console.log(xc);
//  大圖父盒子
var big_img = document.getElementById('bigimg');
console.log(big_img);
//  大圖
var big_jpg = big_img.querySelector('img');
console.log(big_jpg);
//  一組縮圖
var s_imgArr = xc.querySelectorAll('img');
console.log(s_imgArr);
//  設定變數 存縮圖疊放次序
var index = 10;

//註冊事件  處理程式
for (var i = 0; i < s_imgArr.length; i++) {
  //s_imgArr[i]
  s_imgArr[i].onmouseenter = function () {
    //  滑鼠進入  讓當前縮圖疊放在最上層
    this.style.zIndex = index;
  };
  s_imgArr[i].onmouseleave = function () {
    //  滑鼠離開  讓當前縮圖疊放次序歸0
    this.style.zIndex = 0;
  };
  s_imgArr[i].onclick = function () {
    //  點選縮圖讓大圖顯示
    big_img.style.visibility = 'visible';
    // str=this.src;
    // console.log(str)
    big_jpg.src = this.src;
  };
}
big_jpg.onclick = function () {
  //  當大圖顯示時  再次點選大圖 隱藏大圖
  big_img.style.visibility = 'hidden';
};
