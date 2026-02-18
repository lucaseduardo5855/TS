//Never -> Ou vai travar a aplicação ou vai lançar um erro

export default function criaErro(): never {
    throw new Error('Error qualquer');
}

criaErro();