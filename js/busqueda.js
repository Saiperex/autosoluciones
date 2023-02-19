var jsonTalleres=`[
    
    {
        "nombre":"AUTOSOLUCIONES",
        "dueño":"Marino y Agustin Picatto",
        "direccion":"Dr. Moyano 504 Olivia, Cordoba",
        "telefono":"+5493532418532",
        "mapa":"Cordoba"
    },
    
    {
        "nombre":"Servicio Mecanico D.G",
        "dueño":"Diego Garabano",
        "direccion":"Liniers 121, Salto, B.S A.S",
        "telefono":"+549247443025",
        "mapa":"B.S.A.S"
    },

    {
        "nombre":"Yacare Garage",
        "dueño":"javier flores",
        "direccion":"Guarda nacional 455, Bº Las Palmas, Cordoba",
        "telefono":"+5493516208802",
        "mapa":"Cordoba"
    },

    {
        "nombre":"Inyeccion Electronica y Mecanica Poman",
        "dueño":"Nieva",
        "direccion":"Pte Castillo 407, Poman, Catamarca",
        "telefono":"+5493834904980",
        "mapa":"Catamarca"
    },

    {
        "nombre":"Lian Servicio Mecanico",
        "dueño":"Lian",
        "direccion":"Intendente Pedro Paolini 15, Justiniano Pose, CBA",
        "telefono":"+5493537676089",
        "mapa":"Cordoba"
    },

    {
        "nombre":"Electronica Service",
        "dueño":"Ale Sonnenfeld",
        "direccion":"Av. Recta Martinilli 8333, Cordoba",
        "telefono":"+5493516818254",
        "mapa":"Cordoba"
    },

    {
        "nombre":"Taller Ramiro",
        "dueño":"Ramiro",
        "direccion":"Ruta Nac. Nº 8 Km 410, Cordoba",
        "telefono":"+5493468643175",
        "mapa":"Cordoba"
    },

    {
        "nombre":"Taller Ruta 38",
        "dueño":"",
        "direccion":"Belgrano 0, Bialet Masse, Cordoba",
        "telefono":"+5493541606226",
        "mapa":"Cordoba"
    }
]
`
const arregloMapa=
[
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.9644679601934!2d-63.57391668453249!3d-32.04315318119976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cce202fa6fc82d%3A0xc96aaa2822648045!2sDr.%20R.%20Moyano%20504%2C%20Oliva%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1676475146293!5m2!1ses-419!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3296.39984630459!2d-60.261282484244425!3d-34.28935324844051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b90d8196aa1009%3A0x18361e98a736798f!2sLiniers%20121%2C%20Salto%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1675962944736!5m2!1ses-419!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.2075650785305!2d-64.24196106928483!3d-31.4084068435271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298b3f0526bcb%3A0x3a77c1e1285a9280!2sGuardia%20Nacional%20455%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1675963476015!5m2!1ses-419!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.7120801587043!2d-66.2215789843796!3d-28.397762963604745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942695274d592f4b%3A0x2ad62e7ee965c2ca!2sPres.%20Castillo%2C%20Pom%C3%A1n%2C%20Catamarca!5e0!3m2!1ses-419!2sar!4v1675963680444!5m2!1ses-419!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.6908658962093!2d-62.6692067842785!3d-32.87989767584346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c950f426dfec0b%3A0x7251e4843bdcb79f!2sPedro%20Benedetto%20Paoloni%2015%2C%20Justiniano%20Posse%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1676041144404!5m2!1ses-419!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.4328808895348!2d-64.28275146929552!3d-31.34703174062112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329c2801483be1%3A0xe6edb288d87da4d8!2sAv.%20Recta%20Martinolli%208333%2C%20X5021%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1676041366704!5m2!1ses-419!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.167661172873!2d-62.402204684260624!3d-33.62689451397646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c8ebca510521a1%3A0x216683dc24a5f94a!2sRN8%20410%2C%20X2624%20Arias%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1676303656028!5m2!1ses-419!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3409.274692733276!2d-64.46587708454852!3d-31.29615208144436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d7b317cb065bf%3A0x47082be608645966!2sBelgrano%201%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1676475420135!5m2!1ses-419!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

]
var jsonTalleresData= JSON.parse(jsonTalleres)

function createAncora(telefono)
{
    var ancorTelefono=document.createElement("a")
    ancorTelefono.href="https://wa.me/"+telefono
    ancorTelefono.innerHTML=telefono;
    return ancorTelefono
}

function createSections()
{
    var contenedor=document.getElementById("principal_lista-talleres");
    for(let i=0;i<jsonTalleresData.length;i++)
    {
        var newSection=document.createElement("section")
        var newDiv=document.createElement("div")
        var claseDiv="car-taller"
        var idDiv="car-taller"+i
        var id="taller"+i;
        var clase="taller";
        newDiv.className=claseDiv
        newDiv.id=idDiv
        newSection.id=id;
        newSection.className=clase;
        newDiv.appendChild(newSection);
        contenedor.appendChild(newDiv);
    }
}
function createTitle()
{
    for(let i=0;i<jsonTalleresData.length;i++)
    {
        var idTaller="taller"+i
        var sectionContenedor=document.getElementById(idTaller)
        //titulo
        var titulo=jsonTalleresData[i].nombre;
        var newH2=document.createElement("h2")
        var id="h2"+i;
        newH2.id=id;
        sectionContenedor.appendChild(newH2)
        document.getElementById(id).innerHTML=titulo;
    }
}
function createDueño()
{
    for(let i=0;i<jsonTalleresData.length;i++)
    {
        var idTaller="taller"+i
        var sectionContenedor=document.getElementById(idTaller)
        //legend dueño
        var dueño=jsonTalleresData[i].dueño;
        var newLegendDueño=document.createElement("legend")
        var idDueño="legNombre"+i;
        newLegendDueño.id=idDueño;
        sectionContenedor.appendChild(newLegendDueño)
        document.getElementById(idDueño).innerHTML="Dueño: "+dueño;
    }
}
function createDireccion()
{
    for(let i=0;i<jsonTalleresData.length;i++)
    {
        var idTaller="taller"+i
        var sectionContenedor=document.getElementById(idTaller)
        //legend dueño
        var direccion=jsonTalleresData[i].direccion;
        var newLegendDireccion=document.createElement("legend")
        var idDireccion="legDireccion"+i;
        newLegendDireccion.id=idDireccion;
        sectionContenedor.appendChild(newLegendDireccion)
        document.getElementById(idDireccion).innerHTML="Direccion: "+direccion;
    }
}
function createTelefono()
{
    for(let i=0;i<jsonTalleresData.length;i++)
    {
        var idTaller="taller"+i
        var sectionContenedor=document.getElementById(idTaller)
        //legend dueño
        var telefono=jsonTalleresData[i].telefono;
        var newLegendTelefono=document.createElement("legend")
        var idTelefono="legTelefono"+i;
        newLegendTelefono.id=idTelefono;
        sectionContenedor.appendChild(newLegendTelefono)
        document.getElementById(idTelefono).innerHTML="Telefono: ";
        newLegendTelefono.appendChild(createAncora(telefono))
    }
}
function createMapa()
{
    for(let i=0;i<jsonTalleresData.length;i++)
    {
        var idTaller="taller"+i
        var sectionContenedor=document.getElementById(idTaller)
        //mapa
        var clase="mapa";
        var mapa=document.createElement("div")
        mapa.className=clase;
        sectionContenedor.appendChild(mapa)
        mapa.innerHTML=arregloMapa[i];
    }
}

createSections();
createTitle();
createDueño();
createDireccion();
createTelefono()
createMapa()

//hacer que se abran o cierren si hace click en el titulo
var arregloDivs=document.getElementsByClassName("car-taller")
function obtenerIdDiv()
{
    var divId
    for (let i = 0; i < arregloDivs.length; i++) {
        arregloDivs[i].addEventListener("click", function() {
          // Obtener el id del div al que se le hizo clic
          divId = this.id;
          modTamañoMax(divId)
          modTamañoMin(divId)
        });
      }
      
}
function modTamañoMax(id)
{
    document.getElementById(id).style.height="90vh"
}
function modTamañoMin(id)
{
    for (let i = 0; i < arregloDivs.length; i++)
    {
        if(arregloDivs[i].id!==id)
        {
            var idDiv=arregloDivs[i].id;
            document.getElementById(idDiv).style.height="10vh"
        }
    }
}
obtenerIdDiv()
//Ahora el buscador
//crear items del select
let arrayProvincias = jsonTalleresData.filter((item, index, self) => {
    return index === self.findIndex((i) => i.mapa === item.mapa);
  });
function crearItemsSelect()
{
    var contenedor=document.getElementById("seleccionProv")
    for(let i=0;i<arrayProvincias.length;i++)
    {
        var item=document.createElement("option")
        var id="items"
        item.id=id;
        item.innerHTML=arrayProvincias[i].mapa;
        contenedor.appendChild(item)
    }
}
crearItemsSelect();
//buscador provincias
var seleccion=document.getElementById("seleccionProv");
var botonBuscar=document.getElementById("botonBuscar");
seleccion.addEventListener("click", function()
{
    var texto=seleccion.options[seleccion.selectedIndex].text;
    for(let i=0;i<jsonTalleresData.length;i++)
    {
        var id="car-taller"+i;
        document.getElementById(id).style="display:block"
        if(jsonTalleresData[i].mapa!==texto && texto!=="Todos")
        {
            
            document.getElementById(id).style="display:none"
        }
    }
})
botonBuscar.addEventListener("click",function()
{
    var texto=seleccion.options[seleccion.selectedIndex].text;
    var nombre=document.getElementById("palabra").value
    
    for(let i=0;i<jsonTalleresData.length;i++)
    {
        var id="car-taller"+i;
        document.getElementById(id).style="display:none"
        if((jsonTalleresData[i].mapa===texto || texto==="Todos") && jsonTalleresData[i].nombre.includes(nombre))
        {
            document.getElementById(id).style="display:block"
        }
    }
})


