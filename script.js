var cuentas = [
    {nombre :  "Mali", password:"1234",saldo:200},
    {nombre : "Guera",password:"h456", saldo:290},
    {nombre : "Maui", password:"5678", saldo:67 }/*retiro:function(){},deposito(){}*/
]
var entrar = false;
//Acceso:
const clickLogin = () =>{
    var nombre = document.getElementById("nombre").value;
    var password = document.getElementById("password").value;
    contrasena = cuentas[nombre].password
    if (password == contrasena){
        console.log("contraseña correcta")
        entrar = true;
    }else{
        console.log("contraseña incorrecta, no puedes ingresar")
        entrar =  false; 
    }
} 

const login = document.getElementById('boton');
login.addEventListener("click",clickLogin); 

