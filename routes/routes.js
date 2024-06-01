import express from 'express';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();
const routes = express.Router();

routes.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

routes.get('/agregar', (req, res) => {
    const { nombre, precio } = req.query;
    const data = fs.readFileSync('./data/deportes.json', 'utf-8');
    const { deportes } = JSON.parse(data);
    deportes.push({ nombre, precio });
    fs.writeFileSync('./data/deportes.json', JSON.stringify({ deportes }));
    res.send('agregado exitosamente');
})

routes.get('/deportes', (req, res) => {
    const data = fs.readFileSync('./data/deportes.json', 'utf-8');
    const { deportes } = JSON.parse(data);
    res.json({ deportes })
});

routes.get('/editar', (req, res) => {
    const { nombre, precio } = req.query;
    const data = fs.readFileSync('./data/deportes.json', 'utf-8');
    let { deportes } = JSON.parse(data);
    deportes = deportes.map(deporte => {
        if (deporte.nombre === nombre) {
            deporte.precio = precio;
        }
        return deporte;
    });
    fs.writeFileSync('./data/deportes.json', JSON.stringify({ deportes }));
    res.send('Precio actualizado exitosamente');
});

routes.get('/eliminar', (req, res) => {
    const { nombre } = req.query;
    const data = JSON.parse(fs.readFileSync("data/deportes.json", "utf-8"));
    const deporte = data.deportes;
    const index = deporte.findIndex(deporte => deporte.nombre === nombre);
    deporte.splice(index, 1);
    fs.writeFileSync("data/deportes.json", JSON.stringify(data));
    res.send("Deporte eliminado exitosamente");

});


export default routes