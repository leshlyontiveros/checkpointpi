const Aluno = require('./aluno');

function Curso(cursoNome, notaAprovacao, faltasMaximas, estudantesLista) {
    this.cursoNome = cursoNome;
    this.notaAprovacao = notaAprovacao;
    this.faltasMaximas = faltasMaximas;
    this.estudantesLista = estudantesLista;

    this.addAluno = function (nome, faltas, notas) {
        this.estudantesLista.push(new Aluno(nome, faltas, notas));
    }
    
    this.aprovacao = function (aluno) {
        let dezPorCentoAMais = (this.notaAprovacao + ((this.notaAprovacao * 10) / 100))
         
        if (aluno.calculaMedia() >= this.notaAprovacao && aluno.totalFaltas() < this.faltasMaximas) {
            return true
        } else if (aluno.totalFaltas() == this.faltasMaximas && aluno.calculaMedia() > dezPorCentoAMais) {
            return true
        } else {
            return false
        }
    }
    this.alunosAprovados = function () {
        return this.estudantesLista.map(aluno => this.aprovacao(aluno))
    }
}

module.exports = Curso;