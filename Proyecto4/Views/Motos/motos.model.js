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
    $.get("../../Controllers/motos.controller.php?op=todos" ,(res) => {res = JSON.parse(res);
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
    dato = this.Ruta;
   $.ajax({
    url: "../../Controllers/motos.controller.php?op=insertar",
    type: "POST",
    data : dato,
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
   this.limpia_Cajas()
   //this.limpia_Cajas(); 
  }
  uno() {
    var ID_Moto = this.ID_Moto;
    $.post(
      "../../Controllers/motos.controller.php?op=uno",
      { ID_Moto: ID_Moto },
      (res) => {
        console.log(res);
        res = JSON.parse(res);
        $("#ID_Moto").val(res.ID_Moto);
        $("#Marca").val(res.Marca);
        $("#Modelo").val(res.Modelo);
        $("#Ano").val(res.Ano);
        $("#Color").val(res.Color);
        $("#Precio").val(res.Precio);

        document.getElementById("Estado").value = res.Estado; //asiganr al select el valor
      }
    );
    $("#Modal_motos").modal("show");
  }
  editar() {
    var dato = new FormData();
    dato = this.Ruta;
    $.ajax({  url: "../../Controllers/motos.controller.php?op=actualizar",
      type: "POST",
      data: dato,
      contentType: false,
      processData: false,
      success: function (res) {
        res = JSON.parse(res);
        if (res === "ok") {
          Swal.fire("motos", "Moto Registrada", "success");
          todos();
        } else {
          Swal.fire("Error", res, "error");
        }
      
  }
  });
  this.limpia_Cajas();
}
eliminar() {
  var ID_Moto = this.ID_Moto;

  Swal.fire({ title: "Motos", text: "Esta seguro de eliminar el Motos",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Eliminar",
  }).then((result) => {
    if (result.isConfirmed) {
      $.post(
        "../../Controllers/motos.controller.php?op=eliminar",
        { ID_Moto: ID_Moto },
        (res) => {
            console.log(res);
            try {
                res = JSON.parse(res);
                if (res === "ok") {
                    Swal.fire("remotos", "Motos Eliminado", "success");
                    todos();
                } else {
                    Swal.fire("Error", res, "error");
                }
            } catch (error) {
                console.error("Error al parsear la respuesta como JSON:", error);
                // Manejar la respuesta que no es JSON, por ejemplo, mostrarla en algún lugar
            }
        }
    );
    }
  });
  this.limpia_Cajas();
}

/*eliminar() {
  var ID_Moto = this.ID_Moto;

  Swal.fire({ title: "Motos", text: "Esta seguro de eliminar el Motos",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Eliminar",
  }).then((result) => {
    if (result.isConfirmed) {
      $.post(
        "../../Controllers/motos.controller.php?op=eliminar",
        { ID_Moto: ID_Moto },
        (res) => {
            console.log(res);
            try {
                res = JSON.parse(res);
                if (res === "ok") {
                    Swal.fire("remotos", "Motos Eliminado", "success");
                    todos();
                } else {
                    Swal.fire("Error", res, "error");
                }
            } catch (error) {
                console.error("Error al parsear la respuesta como JSON:", error);
                // Manejar la respuesta que no es JSON, por ejemplo, mostrarla en algún lugar
            }
        }
    );
    }
  });
  this.limpia_Cajas();
}*/

  limpia_Cajas(){
    document.getElementById("Marca").value = "";
    document.getElementById("Modelo").value = "";  
    document.getElementById("Ano").value = "";
    document.getElementById("Color").value = "";
    document.getElementById("Precio").value = "";
    $("#ID_Moto").val("");
    $("#Modal_motos").modal("hide");
  }
}

