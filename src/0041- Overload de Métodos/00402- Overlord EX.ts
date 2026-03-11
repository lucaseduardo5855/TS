function buscarEquipamento(id: number):string;
function buscarEquipamento(SN: string):string;

function buscarEquipamento(parametro: number | string){
  if(typeof parametro === 'number'){
    return `O Equipamento tem o id ${parametro}`
  }else{
    return `O Equipamento tem o SN ${parametro}`
  }
}

//console.log(buscarEquipamento(10));
console.log(buscarEquipamento('teste'))