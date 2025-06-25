function Aluno(nome, matricula) {
    this.nome = nome;
    this.matricula = matricula;
  }
  
  Aluno.prototype.mostrarDados = function() {
    console.log(`Nome: ${this.nome}, Matrícula: ${this.matricula}`);
  };
  
  const aluno1 = new Aluno('João Silva', '12345');
  const aluno2 = new Aluno('Maria Oliveira', '67890');

aluno1.mostrarDados();
aluno2.mostrarDados();