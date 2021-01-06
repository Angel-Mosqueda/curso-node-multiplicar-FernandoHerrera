// Requires
const { rejects } = require('assert');
const fs = require('fs');
const colors = require('colors');

const { resolve } = require('path');

let listarTabla = (base, limite = 10) => {


    console.log('================='.green);
    console.log(`tabla de ${base}`.red);
    console.log('================='.yellow);


    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${base}*${i} = ${base*i}\n`);
        }

        console.log(data);

    });

}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base}*${i} = ${base*i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`.rainbow)

        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}