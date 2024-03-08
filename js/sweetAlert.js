/** Realizar compra en el carrito */
document.getElementById("comprar").addEventListener("click", () => {
    const steps = ["1", "2", "3"];
    const Queue = Swal.mixin({
        progressSteps: steps,
        confirmButtonText: "Continuar",
        confirmButtonColor: "#256cb3",
        showClass: { backdrop: "swal2-noanimation" },
        hideClass: { backdrop: "swal2-noanimation" },
    });

    (async () => {
        const nombrePrompt = await Queue.fire({
            currentProgressStep: 0,
            icon: "question",
            iconColor: "#000",
            title: "Ingrese su nombre",
            input: "text",
            inputValidator: (value) => {
                if (!value) {
                    return "Su nombre es requerido";
                }
            },
        });
        const nombre = nombrePrompt.value;

        const direccionPrompt = await Queue.fire({
            currentProgressStep: 1,
            icon: "question",
            iconColor: "#000",
            title: "Ingrese su dirección",
            input: "text",
            inputValidator: (value) => {
                if (!value) {
                    return "Su dirección es requerida";
                }
            },
        });
        const direccion = direccionPrompt.value;

        await Queue.fire({
            currentProgressStep: 2,
            icon: "success",
            title: "¡Muchas gracias por su compra! 😄",
            confirmButtonText: "OK",
        });

        contenedorTarjetas.innerHTML = "";
        reiniciarCarrito();
        revisarMensajeVacio();
    })();
});