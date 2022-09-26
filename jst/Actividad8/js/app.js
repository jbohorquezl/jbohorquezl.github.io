

function validaCampos(){
    var formulario;
    formulario=document.formUser;
    //Valida el campo usuario
    if (formulario.user.value=="") {
        //Valida si el campo esta vacio
        document.getElementById("validaUser").innerHTML="Por favor llenar el campo user."
        //Se posiciona en el campo user
        formulario.user.focus();
        return false;
    } else{
        document.getElementById("validaUser").innerHTML="";
    }

    if (formulario.email.value=="") {
        //Valida si el campo email esta vacio
        document.getElementById("validaEmail").innerHTML="Por favor llenar el campo Email."
        //Se posiciona en el campo email
        formulario.email.focus();
        return false;
    } else{
        document.getElementById("validaEmail").innerHTML="";
    }

    if (formulario.password.value=="") {
        //Valida si el campo password esta vacio
        document.getElementById("validaPassword").innerHTML="Por favor llenar el campo Password."
        //Se posiciona en el campo password
        formulario.password.focus();
        return false;
    } else{
        document.getElementById("validaPassword").innerHTML="";
    }

    if (formulario.passwordC.value=="") {
        //Valida si el campo confirmar pasword esta vacio
        document.getElementById("validaPasswordC").innerHTML="Por favor llenar el campo Confirmar Password."
        //Se posiciona en el campo confirmar password
        formulario.passwordC.focus();
        return false;
    } else{
        document.getElementById("validaPasswordC").innerHTML="";
    }


    formulario.submit();
}


