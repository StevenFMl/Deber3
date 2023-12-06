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
      var formData = new FormData($("#form_motos")[0]);
      var motos = new Motos_Model('','','','','','','',formData,'insertar');
      motos.insertar();
  }

  
  ;init();