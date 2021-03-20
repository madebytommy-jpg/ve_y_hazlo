//--------------------- WRITING EFFECT --------------------

const typed = new Typed(".typed", {
    stringsElement: "#typed_strings",
    backSpeed: 70,
    typeSpeed: 70,
    loop: true,
    smartBackspace: true,
    cursorChar: ' '
  });


//---------------------------------- SOMBREADO --------------------------------------

const imagen0 = document.getElementById("0")
const imagen1 = document.getElementById("1")
const imagen2 = document.getElementById("2")
const imagen3 = document.getElementById("3")
const imagen4 = document.getElementById("4")
const imagen5 = document.getElementById("5")
const imagen6 = document.getElementById("6")
const imagen7 = document.getElementById("7")
const imagen8 = document.getElementById("8")
let list = [imagen0, imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8]
let i


(function(){
  function sombreado(index) {
    if (index == null) index = 0
      let randomNumber = Math.floor(Math.random() * 8)
      let elementOfList = list[randomNumber]
      elementOfList.classList.add("claro")
        setTimeout(() => {
          elementOfList.classList.remove("claro")
          if (index < 10000)
          sombreado(++index)
        }, 2000)
  }
  sombreado()
}())



// -----------------verificacion de paticion enviada ----------------------------
let formulario = document.getElementById("formulario")

formulario.addEventListener("submit", (e) => {
  e.preventDefault()
  alert("Formulario enviado exitosamente \n pronto nos pondremos en contacto con usted")
})


// -------------------- Asingnar fecha -------------------------------------------

function obtenerFecha(e)
{

  var fecha = moment(e.value);
  console.log("Fecha original:" + e.value);
  console.log("Fecha formateada es: " + fecha.format("DD/MM/YYYY"));
}


function setInputDate(_id){
  var _dat = document.querySelector(_id);
  var hoy = new Date(),
      d = hoy.getDate()+20,
      m = hoy.getMonth()+1, 
      y = hoy.getFullYear(),
      data;

  if(d < 10){
      d = "0"+d;
  };
  if(m < 10){
      m = "0"+m;
  };

  data = y+"-"+m+"-"+d;
  console.log(data);
  _dat.value = data;
};

setInputDate("#dateDefault");


//--------------------------scroll menu-----------------------------------

$(document).ready(function(){
  var formulario = $('#formulario_seccion').offset().top;
  
  $('#btn_principal').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: formulario 
    });
});
})

