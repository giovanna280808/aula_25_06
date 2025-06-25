class Produto {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    }
  
    exibirProduto() {
      console.log(`Produto: ${this.nome}, Preço: R$ ${this.preco}`);
    }
  }
  
  const produto1 = new Produto('Camiseta', 50);
  const produto2 = new Produto('Calça', 120);
  
  produto1.exibirProduto();
  produto2.exibirProduto();