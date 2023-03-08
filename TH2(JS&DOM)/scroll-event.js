// Khai báo biến control và gán với phần tử div có id = 'control'
let control = document.querySelector('#control');
// Viết hàm lắng nghe sự kiện click cho phần tử control
control.addEventListener('click', function(e) {
    // Định vị phần tử scrollDemo
    let div = document.getElementById('scrollDemo');
    // Lấy ra biến target
    let target = e.target;
    // Xử lí sự kiện cuộn khi nút được nhấn
    switch(target.id) {
        case "btnScrollLeft":
            div.scrollLeft+=20
            break
        case "btnScrollTop":
            div.scrollTop+=20
            break
    }
})