function Aluno(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.calculaMedia = () => {
        let somaNotas = this.notas.reduce((n1, n2) => n1 + n2)
        return somaNotas / this.notas.length;
    };
    this.faltou = () => this.faltas += 1;
    this.totalFaltas = () => this.faltas;
};

module.exports = Aluno

