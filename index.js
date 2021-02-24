let keyLogin = document.getElementById('login')
let keyRegister = document.getElementById('register')

let screenregister = document.getElementById('registerSection')
let screenLogin = document.getElementById('loginSection')


let main = () => {
    keyLogin.addEventListener('click', () => {
        // console.log(screenregister.style.display)
        if (screenregister.style.display === ''){
            screenregister.style.display = 'none'
            screenLogin.style.display = 'block'
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
        } else {
            screenregister.style.display = 'none'
            screenLogin.style.display = 'block'
        }
    })
}

main()