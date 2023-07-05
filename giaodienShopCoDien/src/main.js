// function Menu(e) {
//     let list = document.querySelector('ul')

//     e.name === 'menu-outline' ? (e.name = "close-outline",
//         list.classList.add('top-[80px]'), list.classList.add('opacity-100'))
//         : (e.name = "menu-outline", list.classList.remove('top-[80px]'),
//             list.classList.remove('opacity-100'))
// }



function changeColor(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a

    // Xóa lớp "active" khỏi tất cả các thẻ a
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }

    // Thêm lớp "active" vào thẻ a được click
    event.target.classList.add('active');
}
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.flex a');
    links[0].classList.add('active');
});

// Lấy container bằng class name
var container = document.getElementsByClassName('category-right')[0];

// Thiết lập thuộc tính display: flex cho container
container.style.display = 'flex';

// Thiết lập thuộc tính flex-wrap để chia layout thành nhiều dòng
container.style.flexWrap = 'wrap';

// Thiết lập thuộc tính width cho mỗi thẻ category-card để chia thành 3 cột
var cards = container.getElementsByClassName('category-card');
for (var i = 0; i < cards.length; i++) {
    cards[i].style.width = '33%'; // 33% để chia thành 3 cột, bạn có thể điều chỉnh theo ý muốn
}

const dropdownToggle = document.getElementById("dropdown1");
const dropdownMenu = document.getElementById("dropdown1");
document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggles = document.querySelectorAll("[data-dropdown-toggle]");

    dropdownToggles.forEach(function (dropdownToggle) {
        const dropdownId = dropdownToggle.getAttribute("data-dropdown-toggle");
        const dropdownMenu = document.getElementById(dropdownId);

        dropdownToggle.addEventListener("click", function () {
            // Toggle visibility of dropdown menu
            dropdownMenu.classList.toggle("hidden");
        });

        // Close dropdown menu when clicking outside of it
        document.addEventListener("click", function (event) {
            if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.add("hidden");
            }
        });
    });
});
