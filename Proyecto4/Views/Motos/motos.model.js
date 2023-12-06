class Motos_Model {
  constructor(
    ID_Moto,
    Marca,
    Modelo, 
    Ano,
    Color, 
    Precio, 
    Estado, 
    Ruta
  ) {
    this.ID_Moto = ID_Moto;
    this.Marca = Marca;
    this.Modelo = Modelo;
    this.Ano = Ano;
    this.Color = Color;
    this.Precio = Precio;
    this.Estado = Estado;
    this.Ruta = Ruta;
    
  }
  todos() {
    var html = "";
    $.get("../../Controllers/motos.controller.php?op=" + this.Ruta,(res) => {
      res = JSON.parse(res);
      $.each(res, (index, valor) => {
        var fondo;
        if(valor.Estado == "Nueva") fondo ="bg-success"
        else if(valor.Estado == "Usada") fondo = "bg-warning"
        html += `<tr>
        <td>${index + 1}</td>
        <td>${valor.Marca}</td>
        <td>${valor.Modelo}</td>
        <td>${valor.Ano}</td>
        <td>${valor.Color}</td>
        <td>${valor.Precio}</td>
                <td><div class="d-flex align-items-center gap-2">
                <span class="badge ${fondo} rounded-3 fw-semibold">${
                  valor.Estado
                }</span>
            </div></td>
            <td>
            <button class='btn btn-success' onclick='editar(${
              valor.ID_Moto
            })'>Editar</button>
            <button class='btn btn-danger' onclick='eliminar(${
              valor.ID_Moto
            })'>Eliminar</button>
            <button class='btn btn-info' onclick='ver(${
              valor.ID_Moto
            })'>Ver</button>
            </td></tr>
                `;
      });
      $("#tabla_motos").html(html);
    });
  }

  insertar() {
    var dato = new FormData();
    dato = this.data;
   $.ajax({
    url: "../../Controllers/motos.controller.php?op=insertar",
    type: "POST",
    data: dato,
    contentType: false,
    processData: false,
    success: function (res) {
        res = JSON.parse(res);
        if(res === "ok"){
            Swal.fire("remotos", "Moto Registrada", "success");
            todos();
        }else{
            Swal.fire("Error", res, "error"); 
        }
    }
    
   });
   
   this.limpia_Cajas();    
  }


  limpia_Cajas(){
    document.getElementById("Marca").value = "";
    document.getElementById("Modelo").value = "";  
    document.getElementById("Ano").value = "";
    document.getElementById("Color").value = "";
    document.getElementById("Precio").value = "";
    $("#Modal_motos").modal("hide");
  }
}