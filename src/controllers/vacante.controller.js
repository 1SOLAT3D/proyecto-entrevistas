import { Int } from 'mssql';
import { getConnection, queries, sql } from '../database';

export const getVacante = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllVacantes);
        res.json(result.recordset);
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }

};

export const createNewVacante = async (req, res) => {

    const { id, area, sueldo, activo } = req.body

    if (id == null || area == null || sueldo == null || activo == null) {
        return res.status(400).json({ msg: 'Favor de llenar todos los campos' })
    }

    try {
        const pool = await getConnection();
        await pool.request()
            .input("id", sql.Int, id).
            input("area", sql.VarChar, area).
            input("sueldo", sql.Money, sueldo).
            input("activo", sql.Bit, activo).query(queries.createNewVacante)

        res.json({ id, area, sueldo, activo })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getVacanteById = async (req, res) => {
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("id", req.params.id)
            .query(queries.getVacanteById);
        return res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const deleteVacanteById = async (req, res) => {
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("id", req.params.id)
            .query(queries.deleteVacanteById);
        if (result.rowsAffected[0] === 0) return res.sendStatus(404);
        return res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const updateVacanteById = async (req, res) => {
    const { id, area, sueldo, activo } = req.body;

    if (id == null || area == null || sueldo == null || activo == null) {
        return res.status(400).json({ msg: 'Favor de llenar todos los campos' });
    }

    try {
        const pool = await getConnection();
        await pool
            .request()
            .input("area", sql.VarChar, area)
            .input("sueldo", sql.Money, sueldo)
            .input("activo", sql.Bit, activo)
            .input("id", req.params.id)
            .query(queries.updateVacanteById);
        res.json({ id, area, sueldo, activo });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getTotalVacantes = async (req, res) => {
    const pool = await getConnection();

    const result = await pool.request().query(queries.getTotalVacantes);
    console.log(result);
    res.json(result.recordset[0][""]);
};