var nombre, quiereser,correo,telefono,medio,periodo;
const enviar=document.getElementById("enviarF");
var select = document.getElementById("changeForm");
var select2 = document.getElementById("horario");
const arreglo =document.getElementsByClassName("contactRadio");
enviar.addEventListener("click", function()
{
    quiereser = espacios();
    nombre=document.getElementById("nombreapellido").value;
    
    correo=document.getElementById("correoelectronico").value;
    telefono=document.getElementById("telefono").value;
    medio=radioSelected();
    periodo=select2.options[select2.selectedIndex].text;

    if(nombre.trim().length>0 && correo.trim().length>0 && telefono.trim().length>0 )
    {
        window.open("https://wa.me/5493541544495?text=Mensaje%20de:%20"+nombre+"%0AAsunto:%20"+quiereser+"%0AE-Mail:%20"+correo+"%0ATelefono:%20"+telefono+"%0AQuiere%20ser%20contactado%20por%20"+medio+"%0AEn%20el%20transcurso%20de%20la%20"+periodo);
        borrar();
    }
    else
    {
        alert("Hay campos que no lleno. Llenelos para continuar");
    }
})

function radioSelected()
{
    var resultado;
    for(var i=0;i<arreglo.length;i++)
    {
        if(arreglo[i].checked)
        {
            resultado=arreglo[i]
        }
    }
    return resultado.value
}
function espacios()
{
    var texto=select.options[select.selectedIndex].text;
    if(texto.includes(" "))
    {
        texto = texto.replaceAll(" ","%20")
    }
    return texto;
}
function borrar()
{
    document.getElementById("nombreapellido").value=""
    document.getElementById("correoelectronico").value=""
    telefono=document.getElementById("telefono").value=""
}