//Requires
// const fs = require('fs'); //Paquete nativo de node
//const fs = require('express');  Paquete no nativo de node
//const fs = require('./fs');     Archivos que nosotros creamos 

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}



// let base = '5';

// console.log(process.argv);
// let argv2 = process.argv;

// console.log('Limte:', argv.limite);



// let parametro = argv[2];
// let base = parametro.split('=')[1];


// console.log(base);