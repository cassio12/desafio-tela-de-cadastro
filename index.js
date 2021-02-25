let keyLogin = document.getElementById('login')
let keyRegister = document.getElementById('register')

let loginTransform = document.getElementById('loginTransform')
let lineAnimetion = document.getElementById('line_animetion')

let screenregister = document.getElementById('registerSection')
let screenLogin = document.getElementById('loginSection')

let imgSlide = document.getElementById('imgSlide')
let imgs = ['./assets/image_01.svg', './assets/image_02.svg']
let firstCircle = document.getElementById('firstCircle')
let secondCircle = document.getElementById('secondCircle')

let main = () => {
    keyLogin.addEventListener('click', () => {
        screenLogin.style.display = 'none'
        if (screenLogin.style.display === 'none'){
            screenLogin.style.display = 'flex'
            screenregister.style.display = 'none'
            keyLogin.setAttribute('class', 'transicao1')
            keyRegister.setAttribute('class', 'transicao2')
            lineAnimetion.setAttribute('class', 'direction_page_login')
        } else {
            return null
        }
    })

    keyRegister.addEventListener('click', () => {
        if (screenregister.style.display === 'none'){
            screenregister.style.display = 'flex'
            screenLogin.style.display = 'none'
            keyLogin.setAttribute('class', 'transicao2')
            keyRegister.setAttribute('class', 'transicao1')
            lineAnimetion.setAttribute('class', 'direction_page_register')
        } else {
            return null
        }
    })

    let slide = () => {
        if(imgSlide.attributes.src.value === './assets/image_01.svg'){
            imgSlide.setAttribute('src', imgs[1])
            secondCircle.setAttribute('class', 'selectCircle')
            firstCircle.setAttribute('class', 'unselectCircle')
        } 
        else {
            firstCircle.setAttribute('class', 'selectCircle')
            secondCircle.setAttribute('class', 'unselectCircle')
            imgSlide.setAttribute('src', imgs[0])
        }
    }
    setInterval(slide, 3000)
}

main()