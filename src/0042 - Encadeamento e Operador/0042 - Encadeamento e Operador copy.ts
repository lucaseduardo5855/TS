//Encadeamento opcional e Operador de coalescência nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
}

const documento: Documento = {
  titulo: 'Titulo',
  texto: 'blabla',
  //data: new Date(),
};


console.log(documento.data?.toDateString() ?? 'Ixi, não existe data.');
console.log(undefined ?? 'Ixi, não existe data');
console.log(null ?? 'Ixi, não existe data');
console.log(false ?? 'ixi, nao exite data');
console.log(0 ?? 'ixi, nao existe data');
console.logO(''  ?? 'nao existe data');