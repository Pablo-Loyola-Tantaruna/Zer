async function agregarUser(){
    console.log("talvez");
    let datos = {};
    datos.nombre =document.getElementById('txtnombre').value;
    datos.apellido =document.getElementById('txtapellido').value;
    datos.email =document.getElementById('txtemail').value;
    datos.password =document.getElementById('txtpassword1').value;
    let pass=document.getElementById('txtpassword2').value;

    if(pass!==datos.password){
        alert("la contraseña que escribiste es diferente");
        return;
    }

    await fetch('api/users/',{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(datos)
    });

}