const image = document.getElementById('img');
const box2 = document.getElementById('box2');
const text = document.getElementById('text')

window.addEventListener('scroll', function() {

    const scale = 1 + this.window.scrollY / 1000
    const scale2 = 1 + this.window.scrollY / 10000
    const scale3 = 0.5 + this.window.scrollY / 10000
    const translateY = -window.scrollY / 10
    image.style.transform = 'scale(' + scale + ') translateY(' + translateY + 'px)'
    box2.style.transform = 'scale(' + scale2 + ')'
    text.style.transform = 'scale(' + scale3 + ')  translateY(' + translateY + 'px)'
})