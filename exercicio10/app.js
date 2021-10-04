const Aluno = require('./modules/aluno')
const Curso = require('./modules/curso')

//Criação de alunos
let Daniel = new Aluno('Daniel', 3, [1, 9, 8, 10])
let Ana = new Aluno('Ana', 0, [10, 9, 8, 8])

// Array com alunos
let arrayDeAlunos = [Daniel, Ana]

// Criação do curso de Programação
const programacao = new Curso('Programação', 7, 2, arrayDeAlunos)

// Adição de novos alunos dentro do curso de Programação
programacao.addAluno('Lucas', 3, [10, 9, 8, 9])
programacao.addAluno('Arrascaeta', 4, [4, 9, 8, 10])

// Acionando o método faltou() para um aluno
Daniel.faltou()
Daniel.faltou()
Daniel.faltou()
Daniel.faltou()

// Curso de Inglês
const ingles = new Curso('Inglês', 7, 5, [])

ingles.addAluno('Lucas', 3, [5, 7, 8, 9])
ingles.addAluno('Fernanda', 4, [5, 7, 6, 9])
ingles.addAluno('Marcela', 1, [5, 7, 8, 9])

// Curso de Engenharia
const engenharia = new Curso('Engenharia', 7, 3, [])

engenharia.addAluno('Lucas', 3, [7, 7, 8, 9])
engenharia.addAluno('Fernanda', 4, [5, 7, 8, 9])
engenharia.addAluno('Scarlet', 4, [5, 7, 8, 9])

let cursos = [programacao, ingles, engenharia]

cursos.forEach(c => {

  console.log(`A média do curso de ${c.cursoNome} é ${c.notaAprovacao}`)
  console.log(`Para passar em ${c.cursoNome} é necessário ter menos de ${c.faltasMaximas} faltas ou, caso o número de faltas seja igual a ${c.faltasMaximas}, a nota tem que ser maior do que ${(c.notaAprovacao + ((c.notaAprovacao * 10) / 100))}`)
  console.log(`-------------------------------------------`)

  c.estudantesLista.forEach(e => {
    console.log(`${e.nome} tem média ${e.calculaMedia()} e um total de ${e.totalFaltas()} faltas. Aprovado: ${c.aprovacao(e)}`)
  })

  console.log(`-------------------------------------------`)
  console.log(`-------------------------------------------`)
})



