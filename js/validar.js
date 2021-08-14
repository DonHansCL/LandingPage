function validar(){


    var name, message, subject, email, validamail;
    name = document.getElementById("name").value;
    message = document.getElementById("message").value;
    email = document.getElementById("email").value;
    subject = document.getElementById("subject").value;
    
        
    //validanombre = /\w/;
    validamail = /\w+@\w+\.+[a-z]/;  // declaramos una expresion regular para validar el campo correo electrónico


    if (name === "" || message === "" || email === "" || subject === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (name.length>30){          //&& (validanombre.test(nombre))
        alert("El nombre es muy largo");
        return false;
    }
    else if (subject.length>40){
        alert("El asunto es muy largo");
        return false;
    }
    else if (email.length>30){
        alert("El correo es muy largo");
        return false;
    }
    else if (message.length>300){
        alert("El mensaje puede tener 300 caracteres como máximo");
        return false;
    }
     else if (!validamail.test(email)){
        alert("El correo no es válido");
        return false;
    }

    var saludo = name + " Tu mensaje a sido enviado" ;
    
    alert(saludo);

    /* 

    else if (!validamail.test(email)){
        alert("El correo no es válido");
        return false;
    }
    
    

    var saludo = "Bienvenido " + nombre + apellido + "!!!. Gracias por registrarte" ;
    
    alert(saludo);*/
}

