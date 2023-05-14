import { Int } from 'mssql';
import { getConnection, queries, sql } from '../database';

export const getProspecto = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProspectos);
        res.json(result.recordset);
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }

};

export const createNewProspecto = async (req, res) => {

    const { id, nombre, correo, fecha_registro } = req.body

    if (id == null || nombre == null || correo == null || fecha_registro == null) {
        return res.status(400).json({ msg: 'Favor de llenar todos los campos' })
    }

    try {
        const pool = await getConnection();
        await pool.request()
            .input("id", sql.Int, id).
            input("nombre", sql.VarChar, nombre).
            input("correo", sql.VarChar, correo).
            input("fecha_registro", sql.Date, fecha_registro)
            .query(queries.createNewProspecto)

        res.json({ id, nombre, correo, fecha_registro })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getProspectoById = async (req, res) => {
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("id", req.params.id)
            .query(queries.getProspectoById);
        return res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const deleteProspectoById = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("id", req.params.id)
            .query(queries.deleteProspectoById);
        if (result.rowsAffected[0] === 0) return res.sendStatus(404);
        return res.sendStatus(204);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const updateProspectoById = async (req, res) => {
    const { id, nombre, correo, fecha_registro } = req.body;

    if (id == null || nombre == null || correo == null || fecha_registro == null) {
        return res.status(400).json({ msg: 'Favor de llenar todos los campos' });
    }

    try {
        const pool = await getConnection();
        await pool
            .request()
            .input("nombre", sql.VarChar, nombre)
            .input("correo", sql.VarChar, correo)
            .input("fecha_registro", sql.Date, fecha_registro)
            .input("id", req.params.id)
            .query(queries.updateProspectoById);
        res.json({ id, nombre, correo, fecha_registro });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getTotalProspectos = async (req, res) => {
    const pool = await getConnection();

    const result = await pool.request().query(queries.getTotalProspectos);
    console.log(result);
    res.json(result.recordset[0][""]);
};