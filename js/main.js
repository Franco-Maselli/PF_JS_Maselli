const myMenu = ["hamburguesa","pizza","empanada","papasfritas","gaseosa","agua","jugo"]
console.log (myMenu)

function ordenarComida () {
    do{
        let pedirComida = prompt ("Ingrese su orden")
        if(myMenu.includes(pedirComida) === true){
            console.log ("Tu comida es:" + pedirComida)
        }
        else{
            console.log ("No tenemos lo que pedis:" + pedirComida)
        }
    }while(confirm("Desea pedir algo mas?"))
    alert ("Gracias por su pedido")
}

ordenarComida ()
