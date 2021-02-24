let keyLogin = document.getElementById('login')
let keyRegister = document.getElementById('register')

let loginTransform = document.getElementById('loginTransform')
let lineAnimetion = document.getElementById('line_animetion')

let screenregister = document.getElementById('registerSection')
let screenLogin = document.getElementById('loginSection')


let main = () => {
    keyLogin.addEventListener('click', () => {
        // console.log(screenregister.style.display)
        if (screenregister.style.display === ''){
            screenregister.style.display = 'none'
            screenLogin.style.display = 'block'
            loginTransform.setAttribute('class', 'transicao1')
            keyRegister.setAttribute('class', 'transicao2')
            lineAnimetion.setAttribute('class', 'direction_page')
        } else {
            screenregister.style.display = ''
            screenLogin.style.display = 'none'
        }
    })

    keyRegister.addEventListener('click', () => {
        console.log(screenregister.style.display)
        if (screenregister.style.display === 'none'){
            screenregister.style.display = 'block'
            screenLogin.style.display = 'none'
            loginTransform.setAttribute('class', 'box_subtitleActionLogin--txt_login')
            keyRegister.setAttribute('class', 'box_subtitleActionLogin--txt_itenRegister')
        } else {
            screenregister.style.display = 'none'
            screenLogin.style.display = 'block'
        }
    })
}

main()