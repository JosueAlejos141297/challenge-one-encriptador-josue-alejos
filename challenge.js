//Se definen los elementos funcionales//
const cuadroDeTexto = document.querySelector(".cuadro_de_texto");
const exclamation = document.querySelector(".texto_exclamation");
const mensaje_lateral = document.querySelector(".mensaje_lateral");
const contenedorLateral = document.querySelector(".cuerpo_lateral_contenedor");

// Estos son los botones //
const botonEncriptar = document.querySelector(".boton_encriptar");
const botonCopiar = document.querySelector(".boton_copiar");
const botonDesencriptar = document.querySelector(".boton_desencriptar");

//Se codifica la logica del boton encriptar//
botonEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = cuadroDeTexto.value;
    // Con la linea de abajo se normaliza el texto respecto a nfd y se remueven los caracteres especiales y acentos//
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    // Se realizan las verificaciones //
    if(texto == ""){
        exclamation.style.background = "#ff410dff";
        exclamation.style.color = "#ffffff";
        exclamation.style.fontWeight = "700";
        exclamation.textContent = "El campo de texto no puede estar vacio";
        
        // Quitamos el estilo después de 1.5 segundos//
        setTimeout(()=>{
            exclamation.removeAttribute("style");
        },1500);
    }
    // Se verifica si el texto contiene acentos o caracteres especiales//
    else if(texto !== txt){
        exclamation.style.background = "#ff410dff";
        exclamation.style.color = "#ffffff";
        exclamation.style.fontWeight = "700";
        exclamation.textContent = "No se permiten acentos y caracteres especiales";
        
        // Quitamos el estilo después de 1.5 segundos//
        setTimeout(()=>{
            exclamation.removeAttribute("style");
        },1500);
    }

    // Se verifica si el texto esta en letras minusculas//
    else if(texto !== texto.toLowerCase()){
        exclamation.style.background = "#ff410dff";
        exclamation.style.color = "#ffffff";
        exclamation.style.fontWeight = "700";
        exclamation.textContent = "Solo se permite texto en minúscula";
        
        // Quitamos el estilo después de 1.5 segundos//
        setTimeout(()=>{
            exclamation.removeAttribute("style");
        },1500);
    }

        //Verificacion que procede con el encriptado//
    else{
        // Se reemplazan las vocales por sus respectivas claves de encriptación //
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        //Se hace funcional el campo lateral//
        mensaje_lateral.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        contenedorLateral.remove(); 
    }
});

//Se codifica la logica del boton desencriptar//
botonDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = cuadroDeTexto.value;
    // Con la linea de abajo se normaliza el texto respecto a nfd y se remueven los caracteres especiales y acentos//
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    //validacion campos vacios//
    if(texto == ""){
        exclamation.style.background = "#ff410dff";
        exclamation.style.color = "#ffffff";
        exclamation.style.fontWeight = "700";
        exclamation.textContent = "El campo de texto no puede estar vacio";
        
        setTimeout(()=>{
            exclamation.removeAttribute("style");
        },1500);
    }

    //validacion acentos y caracteres especiales//
    else if(texto !== txt){
        exclamation.style.background = "#ff410dff";
        exclamation.style.color = "#ffffff";
        exclamation.style.fontWeight = "700";
        exclamation.textContent = "No se permiten acentos y caracteres especiales";
        
        setTimeout(()=>{
            exclamation.removeAttribute("style");
        },1500);
    }

    // validacion letras minusculas //
    else if(texto !== texto.toLowerCase()){
        exclamation.style.background = "#ff410dff";
        exclamation.style.color = "#ffffff";
        exclamation.style.fontWeight = "700";
        exclamation.textContent = "Solo se permite texto en minúscula";
        
        setTimeout(()=>{
            exclamation.removeAttribute("style");
        },1500);
    }

    // si se cumple se procede a desencriptar //
    else{
         // Se reemplazan las claves de encriptación por sus respectivas vocales
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        //se muestran los resultados en el panel lateral//
        mensaje_lateral.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        contenedorLateral.remove(); 
    }
});

//logica del boton copiar//
    
    botonCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = mensaje_lateral;
    copiar.select();
    document.execCommand("copy"); //copiamos el contenido al portapapeles//
    cuadroDeTexto.value = ""; //limpiamos el cuadro de texto despues de copiar//
});