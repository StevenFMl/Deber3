function init() {
    $("#form_motos").on("submit", function (e) {
      guardaryeditar(e);
    });
  }
  
  $().ready(() => {
   
    todos();
  });
  
  var todos = () => {
    var todos = new Motos_Model("", "", "", "", "", "", "", "todos");
    todos.todos();
  }
  
  var guardaryeditar = (e)=>{
      e.preventDefault();
      const Marca = document.getElementById("Marca").value;
      const Modelo = document.getElementById("Modelo").value;
      const Ano = document.getElementById("Ano").value;
      const Color = document.getElementById("Color").value;
      const Precio = document.getElementById("Precio").value;
      const Estado = document.getElementById("Estado").value;
      var formData = new FormData(e.target);
      formData.append("Marca",Marca);
      formData.append("Modelo",Modelo);
      formData.append("Ano",Ano);
      formData.append("Color",Color);
      formData.append("Precio",Precio);
      formData.append("Estado",Estado);
      var motos = new Motos_Model('','','','','','','',formData,'insertar');
      motos.insertar();
  }

  
  ;init();