async function IniciarSesion(){
    let datos = {};
    datos.email =document.getElementById('txtemail').value;
    datos.password =document.getElementById('txtpassword').value;

    const request = await fetch('api/login/',{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(datos)
    });
    const respuesta = await request.text();
    console.log(respuesta);
    if(respuesta!="FAIL"){
        localStorage.token = respuesta;
        localStorage.email = datos.email;
        window.location.href="users.html"
    }else{
        alert("No estas registrado ojete");
    }
}