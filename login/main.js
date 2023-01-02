
let usuario = document.querySelector('.username-1');
let pass = document.querySelector('.pass');
//const inp = document.querySelectorAll('.input');
const login = document.querySelector('.boton');
const check_box = document.querySelector('.check-remember');
const hola = document.querySelector('.hola')
const exp =  /^[a-zA-Z0-9\_\-]{3,16}$/
let contrasena = '';
let usuarioG = '';
let data = [];
//localStorage.setItem("data", JSON.stringify(data));

//var data = JSON.parse(localStorage.getItem("data"));

// inp[0].addEventListener('keyup', (e)=>{
//     e.preventDefault();
//     if(exp.test(user.value)){
//         console.log('Guardo usuario')}
//     else{
//         console.log('Usuario incorrecto')
//     }
// })

// inp[1].addEventListener('keyup', (e)=>{
//     e.preventDefault();
//     if(pass.value.length===4 && !isNaN(pass.value)){
//         console.log('Guardo Contraseña')
//     }else{
//         console.log('Error contraseña')
//     }
// })


check_box.addEventListener('change', e =>{
    if(e.target.checked === true){
        login.classList.add('back')
    }else{
        login.classList.remove('back')
    }
})


// login.addEventListener('click', (e)=>{
//     e.preventDefault();
//     if(exp.test(user.value)){
//         console.log('Guardo usuario')}
//     else{
//         console.log('Usuario incorrecto')
//     }
// })

// login.addEventListener("click", (e)=>{
//     e.preventDefault();
//     if(pass.value.length===4 && !isNaN(pass.value)){
//         console.log('Guardo Contraseña')
//     }else{
//         console.log('Error contraseña')
//     }
// })

//let guardarUsuario = (clave, valor) => 

// function getStorage(){
//     for(let i in data){
//         for(let clave in i){
//             if(i[username]===usuario.value && i[password]===pass){
//                 alert('BIENVENIDO REYYY');
//             }
//         }
//     }
// }



login.addEventListener('click', (e)=>{
    
    let cont=0
    //avisoP.innerHTML = ''
    
    if(exp.test(usuario.value) && boton5===true){
        console.log('usuario correcto')
        cont++
        if(pass.value.length===4 && !isNaN(pass.value)){
            console.log('pass correcta')
            cont++
            alert('Bienvenido')
            // var registroU = new Object();
            // registroU.username = usuario.value;
            // registroU.password = pass.value;
            // data.push(registroU);
            // let datosJ =JSON.stringify(data);
            // localStorage.setItem('users', datosJ);
            // console.log(data);
            // function getStorage(){
            //     for(let i in data){
            //         console.log(i);
            //         for(let clave in i){
            //             console.log('pase por aca');
            //             if(clave[registroU.username]===usuario.value && clave[registroU.password]===pass.value){
            //                 alert('BIENVENIDO REYYY');
            //                 console.log('paseeee')
            //             }else{
            //                 console.log
            //             }
            //         }
            //     }
            // }
            // getStorage();
            
        }
    }
    if(cont==0){
        console.log('su usuario o contrasena es incorrecto')
        hola.innerHTML = `
        <p class="material-symbols-outlined">
        warning
        </p>
        <p>su usuario o contrasena son incorrectas</p>
        `

    }else if(cont==1){
        console.log('su pass es incorrecto')
        //avisoP.textContent = 'su pass es incorrecto'
        hola.innerHTML = `
        <p class="material-symbols-outlined">
        warning
        </p>
        <p>su contrasena es incorrecto</p>
        `

    }
})



