function showCategory(category) {
    var products = document.getElementsByClassName('product');
    for (var i = 0; i < products.length; i++) {
        if (category === 'all' || products[i].classList.contains(category)) {
            products[i].style.display = 'block';
        } else {
            products[i].style.display = 'none';
        }
    }
}

function showModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// 轮播图片逻辑
var currentSlide = 0;
function showSlide(index) {
    var slides = document.querySelectorAll('.carousel-content img');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    var newTransform = -currentSlide * 100 + '%';
    document.querySelector('.carousel-content').style.transform = 'translateX(' + newTransform + ')';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// 自动播放
setInterval(nextSlide, 3000);

// 监听键盘事件
document.onkeydown = function(event) {
    event = event || window.event;
    if (event.key === 'Escape') {
        // 获取所有打开的模态框并关闭它们
        var modals = document.getElementsByClassName('modal');
        for (var i = 0; i < modals.length; i++) {
            modals[i].style.display = 'none';
        }
    }
};