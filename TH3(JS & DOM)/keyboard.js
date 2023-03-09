let textBox = document.getElementById('message')
textBox.addEventListener('keydown', function(e) {
    console.log(`key = ${e.key}, code = ${e.code}`)
})