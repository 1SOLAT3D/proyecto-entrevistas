import { Int } from 'mssql';
import { getConnection, queries, sql } from '../database';

export const getEntrevista = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllEntrevistas);
        res.json(result.recordset);
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
};

export const createNewEntrevista = async (req, res) => {
    const { id, vacante, prospecto, fecha_entrevista, notas, reclutado } = req.body
    if (id == null || vacante == null || prospecto == null || fecha_entrevista == null || notas == null || reclutado || null) {
        return res.status(400).json({ msg: 'Favor de llenar todos los campos' })
    }

    try {
        const pool = await getConnection();
        await pool.request()
            .input("id", sql.Int, id).
            input("vacante", sql.Int, vacante).
            input("prospecto", sql.Int, prospecto).
            input("fecha_entrevista", sql.Date, fecha_entrevista).
            input("notas", sql.Text, notas).
            input("reclutado", sql.Bit, reclutado)
            .query(queries.createNewEntrevista)
        res.json({ id, vacante, prospecto, fecha_entrevista, notas, reclutado })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getEntrevistaById = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("id", req.params.id)
            .query(queries.getEntrevistaById);
        return res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const deleteEntrevistaById = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("id", req.params.id)
            .query(queries.deleteEntrevistaById);
        if (result.rowsAffected[0] === 0) return res.sendStatus(404);
        return res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const updateEntrevistaById = async (req, res) => {
    const { id, vacante, prospecto, fecha_entrevista, notas, reclutado } = req.body;
    
    try {
        const pool = await getConnection();
        await pool
            .request().
            input("vacante", sql.Int, vacante).
            input("prospecto", sql.Int, prospecto).
            input("fecha_entrevista", sql.Date, fecha_entrevista).
            input("notas", sql.Text, notas).
            input("reclutado", sql.Bit, reclutado).
            input("id", req.params.id)
            .query(queries.updateEntrevistaById);
        res.json({ id, vacante, prospecto, fecha_entrevista, notas, reclutado });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getTotalEntrevistas = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getTotalEntrevistas);
    console.log(result);
    res.json(result.recordset[0][""]);
};