<?php require_once('../html/head2.php') ?>




<div class="row">

    <div class="col-lg-8 d-flex align-items-stretch">
        <div class="card w-100">
            <div class="card-body p-4">
                <h5 class="card-title fw-semibold mb-4">Lista de Motos</h5>

                <div class="table-responsive">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal_motos">
                        Registro Nueva Moto
                    </button>
                    <table class="table text-nowrap mb-0 align-middle">
                        <thead class="text-dark fs-4">
                            <tr>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">#</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Marca</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Modelo</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Año</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Color</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Precio</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Estado</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Opciones</h6>
                                </th>
                            </tr>
                        </thead>
                        <tbody id="tabla_motos">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Ventana Modal-->

<!-- Button trigger modal -->


<!-- Modal -->
<div class="modal fade" id="Modal_motos" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <form method="post" id="form_motos">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Motos</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div class="form-group">
                        <label for="Marca">Marca</label>
                        <input type="text" class="form-control" id="Marca" name="Marca" placeholder="Marca" required>
                    </div>
                    <div class="form-group">
                        <label for="Modelo">Modelo</label>
                        <input type="text"  class="form-control" id="Modelo" name="Modelo" placeholder="Modelo" required>
                    </div>
                    <div class="form-group">
                        <label for="Ano">Año</label>
                        <input type="text"  class="form-control" id="Ano" name="Ano" placeholder="Ano" required>
                    </div>
                    <div class="form-group">
                        <label for="Color">Color</label>
                        <input type="text"  class="form-control" id="Color" name="Color" placeholder="Color" required>
                    </div>
                    <div class="form-group">
                        <label for="Precio">Precio</label>
                        <input type="text"  class="form-control" id="Precio" name="Precio" placeholder="Precio" required>
                    </div>
                    <div class="form-group">
                        <label for="Estado">Estado</label>
                        <select name="Estado" id="Estado" class="form-control">
                            <option value="Nueva">Nueva</option>
                            <option value="Usada">Usada</option>
                        </select>
                </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </form>
        </div>
    </div>
</div>

<?php require_once('../html/script2.php') ?>

<script src="motos.controller.js"></script>
<script src="motos.model.js"></script>