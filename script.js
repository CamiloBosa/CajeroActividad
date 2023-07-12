let cuentas = [{
    nombre :  "Mali",
    password:"1234",
    saldo:200,
    deposit(valor){
        this.saldo = this.saldo + parseInt(valor)
    },
    retira(valor){
        this.saldo = this.saldo - parseInt(valor)
    }
    },
    {nombre : "Guera",
    password:"h456",
    saldo:290,
    deposit(valor){
        this.saldo = this.saldo + parseInt(valor)
    }
    },
    {nombre : "Maui",
    password:"5678",
    saldo:67 ,
    deposit(valor){
        this.saldo = this.saldo + parseInt(valor)
    }}
]

document.getElementById("formularioDatos").style.display ="none";

var entrar = false;
//Acceso:
let clickLogin = () =>{
    let nombre = document.getElementById("nombre").value;
    let password = document.getElementById("password").value;
    contrasena = cuentas[nombre].password;

    if (password == contrasena){
        //console.log("contraseña correcta");
        entrar = true;
        document.getElementById("App").style.display ="none";
        document.getElementById("formularioDatos").style.display ="block";
        //let nombre =document.getElementById("nombre").value;
    }else{
        //console.log("contraseña incorrecta, no puedes ingresar")
        entrar =  false;
        alert("contraseña incorrecta")
    }
} 


const login = document.getElementById('boton');
login.addEventListener("click",clickLogin); 


function leer(){
    let accion=document.getElementById("accion").value;
    let nombre = document.getElementById("nombre").value; 
//    console.log(accion)
    if (accion == 1){//Consultar saldo
        saldoMuestra = cuentas[nombre].saldo
        alert("Tu saldo es "+saldoMuestra)
    }
    if (accion == 2){//Ingresar monto
        ingresando = prompt("Por favor digitar el valor del monto a ingresar")
        cuentas[nombre].deposit(ingresando)
    }
    if (accion == 3){//Ingresar monto
        retirando = prompt("Por favor digitar el valor del monto a retirar")
        cuentas[nombre].retira(retirando)
    }

}

document.getElementById("accion").addEventListener("change",leer);





