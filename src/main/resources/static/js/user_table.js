// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarUsers();
  $('#usuarios').DataTable();
  actualizarEmailDeUsuario();
});
function actualizarEmailDeUsuario(){
  document.getElementById('txt-email-usuario').outerHTML=localStorage.email;
}
function getHeaders(){
  return {
    'Accept':'application/json',
    'Content-Type':'application/json',
    'Authorization':localStorage.token
  };
}

async function cargarUsers(){

  const request = await fetch('api/users',{
    method:'GET',
    headers:getHeaders()
  });
  const usuarios = await request.json();

  let listadoHtml = "";
  for (let users of usuarios){

    let deleteBtn = '<a onclick="eliminarUser('+users.id+')" class=\"btn btn-danger btn-circle btn-sm\"><i class=\"fas fa-trash\"></i></a>';

    let telefono=users.telefono==null ? '-':users.telefono;

    let userHtml = '<tr><td>'+users.id+'</td><td>'+users.nombre+'</td><td>'+users.email+'</td><td>'+telefono+'</td><td>'+deleteBtn+'</td></tr>';

    listadoHtml+=userHtml;
  }
  document.querySelector('#usuarios tbody').outerHTML=listadoHtml;

  //console.log(usuarios);

}

async function eliminarUser(id){

  if(!confirm("¿Desea eliminar este usario?")){
    return;
  }
  const request = await fetch('api/users/'+id,{
    method:'DELETE',
    headers:getHeaders()
  });
  location.reload();
  //console.log(id);
}
