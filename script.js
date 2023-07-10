let cuentas = [
    {nombre :  "Mali", password:"1234",saldo:200},
    {nombre : "Guera",password:"h456", saldo:290},
    {nombre : "Maui", password:"5678", saldo:67 }/*retiro:function(){},deposito(){}*/
]

document.getElementById("formularioDatos").style.display ="none";

var entrar = false;
//Acceso:
let clickLogin = () =>{
    let nombre = document.getElementById("nombre").value;
    let password = document.getElementById("password").value;
    contrasena = cuentas[nombre].password;

    if (password == contrasena){
        console.log("contraseña correcta");
        entrar = true;
        document.getElementById("App").style.display ="none";
        document.getElementById("formularioDatos").style.display ="block";
        //let nombre =document.getElementById("nombre").value;
        saldo= cuentas[nombre].saldo;
        
        document.getElementById("accion").addEventListener("change",leer);

        function leer(){
            let accion=document.getElementById("accion").value;
            console.log("hola"+accion);
        }
        
    }else{
        console.log("contraseña incorrecta, no puedes ingresar")
        entrar =  false;
        alert("contraseña incorrecta")
    }
} 


const login = document.getElementById('boton');
login.addEventListener("click",clickLogin); 










