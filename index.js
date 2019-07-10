//crear array de situaciones
let tipoDeMaltrato = [
    'P','T','F','F','T',
    'P','T','F','F','T',
    'P','T','F','F','T',
    'P','T','F','F','T'
];
let gravedadDelMatrato = [
    1,5,7,1,2,
    8,10,3,3.5,2,
    9.7,1.5,2.4,6.8,7.7,
    5,7,8,9,3
]
let cantidadDeTiposDeMaltrato = [0,0,0];
let sumatoriaDeGravedad = [0,0,0];
let promedioDeGravedad = [0,0,0];
//console.table(tipoDeMaltrato);
//console.table(gravedadDelMatrato);

for(let i = 0; i < tipoDeMaltrato.length; i++){
    let contP, contT, contF = 0;
    if(tipoDeMaltrato[i]==='P'){
        cantidadDeTiposDeMaltrato[0]++;
        sumatoriaDeGravedad[0]+= gravedadDelMatrato[i];
    }else if (tipoDeMaltrato[i]==='T'){
        cantidadDeTiposDeMaltrato[1]++;
        sumatoriaDeGravedad[1]+=gravedadDelMatrato[i];
    }else if (tipoDeMaltrato[i] === 'F'){
        cantidadDeTiposDeMaltrato[2]++;
        sumatoriaDeGravedad[2]+=gravedadDelMatrato[i];
    }
}

for(let j = 0; j < sumatoriaDeGravedad.length; j++){
    promedioDeGravedad[j] = sumatoriaDeGravedad[j] / cantidadDeTiposDeMaltrato[j]
}
let consolidado = {
    tipo : ['Pánico','Trauma mental','Daño Físico'],
    cantidad: cantidadDeTiposDeMaltrato,
    sumatoria: sumatoriaDeGravedad,
    promedio: promedioDeGravedad
}
console.table(consolidado)

consolidado.promedio[1] >= 7 || consolidado.promedio[2] >= 7 ?
        console.log("Máximo castigo") :
        console.log(`No hay máximo castigo por que:
        "Trauma mental es ": ${consolidado.promedio[1]}
        "Daño Físico es   ": ${consolidado.promedio[2]}`);
//if (consolidado.promedio[1] >= 7 || consolidado.promedio[2] >= 7){
  //  console.log("Máximo castigo");
//}else{
  //  console.log(`No hay máximo castigo por que:
    //"Trauma mental es ": ${consolidado.promedio[1]}
    //"Daño Físico es   ": ${consolidado.promedio[2]}`);
//}