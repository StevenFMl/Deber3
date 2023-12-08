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
      var ID_Moto = document.getElementById("ID_Moto").value;
      const Marca = document.getElementById("Marca").value;
      const Modelo = document.getElementById("Modelo").value;
      const Ano = document.getElementById("Ano").value;
      const Color = document.getElementById("Color").value;
      const Precio = document.getElementById("Precio").value;
      const Estado = document.getElementById("Estado").value;
      var formData = new FormData(e.target);
      formData.append("ID_Moto",ID_Moto);
      formData.append("Marca",Marca);
      formData.append("Modelo",Modelo);
      formData.append("Ano",Ano);
      formData.append("Color",Color);
      formData.append("Precio",Precio);
      formData.append("Estado",Estado);
      if(ID_Moto > 0){
        var motos = new Motos_Model('','','','','','','',formData,'editar');
        motos.editar();
      }else{
        var motos = new Motos_Model('','','','','','','',formData,'insertar');
        motos.insertar();
      }
      
  };
  var editar = (ID_Moto) => {
    var uno = new Motos_Model(ID_Moto, "", "", "", "", "", "", "", "uno");
    uno.uno();

  };
  var eliminar = (ID_Moto) => {
    var eliminar = new Motos_Model(ID_Moto, "", "", "", "", "", "", "", "eliminar");
    eliminar.eliminar();
  }

  
  ;init();