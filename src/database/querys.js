export const queries = {

    // Tabla Vacante

    getAllVacantes: 'select * from vacante',
    createNewVacante: 'insert into vacante (id, area, sueldo, activo) values (@id, @area, @sueldo, @activo)',
    getVacanteById: 'SELECT * FROM vacante Where id = @id',
    deleteVacanteById: 'DELETE FROM [entrevista].[dbo].[vacante] WHERE id= @id',
    getTotalVacantes: 'SELECT COUNT(*) FROM entrevista.dbo.vacante',
    updateVacanteById: 'UPDATE [entrevista].[dbo].[vacante] SET id = @id, area = @area, sueldo = @sueldo, activo = @activo WHERE id = @id',

    // Tabla Prospecto

    getAllProspectos: 'select * from prospecto',
    createNewProspecto: 'insert into prospecto (id, nombre, correo, fecha_registro) values (@id, @nombre, @correo, @fecha_registro)',
    getProspectoById: 'SELECT * FROM prospecto Where id = @id',
    deleteProspectoById: 'DELETE FROM [entrevista].[dbo].[prospecto] WHERE id= @id',
    getTotalProspectos: 'SELECT COUNT(*) FROM entrevista.dbo.prospecto',
    updateProspectoById: 'UPDATE [entrevista].[dbo].[prospecto] SET id = @id, nombre = @nombre, correo = @correo, fecha_registro = @fecha_registro WHERE id = @id',

    // Tabla Entrevistas

    getAllEntrevistas: 'select * from entrevistas',
    createNewEntrevista: 'insert into entrevistas (id, vacante, prospecto, fecha_entrevista, notas, reclutado) values (@id, @vacante, @prospecto, @fecha_entrevista, @notas, @reclutado)',
    getEntrevistaById: 'SELECT * FROM entrevistas where id = @id',
    deleteEntrevistaById: 'DELETE FROM [entrevista].[dbo].[entrevistas] WHERE id= @id',
    getTotalEntrevistas: 'SELECT COUNT(*) FROM entrevista.dbo.entrevista',
    updateEntrevistaById: 'UPDATE [entrevista].[dbo].[entrevistas] SET id = @id, vacante = @vacante, prospecto = @prospecto, fecha_entrevista = @fecha_entrevista, notas = @notas, reclutado = @reclutado WHERE id = @id'
}