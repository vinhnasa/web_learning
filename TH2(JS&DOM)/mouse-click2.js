let btn = document.querySelector('#btn');
// Chặn sự kiện mở context menu khi chuột phải được nhấn
btn.addEventListener('contextmenu', function even(e){
    e.preventDefault();
})
// Lắng nghe sự kiện và hiển thị ra nội dung nút được nhấn
btn.addEventListener('mouseup', function(e) {
    let msg = document.querySelector('#message')
    switch (e.button) {
        case 0:
            msg.textContent = 'Left mouse button clicked';
            break
        case 1:
            msg.textContent = 'Middle mouse button clicked';
            break
        case 2:
            msg.textContent = 'Right mouse button clicked';
            break
        default:
            msg.textContent = 'Unknown mouse button code: `${even.button}`'
    }
})