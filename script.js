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
    },
    retira(valor){
        this.saldo = this.saldo - parseInt(valor)
    }
    },
    {nombre : "Maui",
    password:"5678",
    saldo:67 ,
    deposit(valor){
        this.saldo = this.saldo + parseInt(valor)
    },retira(valor){
        this.saldo = this.saldo - parseInt(valor)
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
        alert("Tu saldo es $"+saldoMuestra)
    }
    if (accion == 2){//Ingresar monto
        ingresando = prompt("Por favor digitar el valor del monto a ingresar")
        alerta = parseInt(ingresando) + cuentas[nombre].saldo
        if (alerta>990||!isNaN(alerta)== false){
            alert("El valor ingresado no es valido recuerda que la cuenta no puede exceder $990") 
        }  
        else{
            cuentas[nombre].deposit(ingresando)
            alert("valor ingresado correctamente, se ingresaron $"+ingresando+ " ahora tu saldo es $" +cuentas[nombre].saldo)
        }
             
    }
    if (accion == 3){//Retirar monto
        retirando = prompt("Por favor digitar el valor del monto a retirar")
        alerta =  cuentas[nombre].saldo - parseInt(retirando)
        if (alerta<10 ||!isNaN(alerta)== false){
            alert("El valor a retirar no es valido, recuerda que la cuenta no puede tener menos de $10") 
        }  
        else{
            cuentas[nombre].retira(retirando)
            alert("valor retirado correctamente, se hizo un retiro por $"+ retirando+ " ahora tu saldo es $" +cuentas[nombre].saldo)
        }
    }

}

document.getElementById("accion").addEventListener("change",leer);





