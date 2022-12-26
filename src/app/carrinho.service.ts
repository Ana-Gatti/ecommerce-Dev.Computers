import { Injectable } from '@angular/core';
import { IProduto, IProdutoCarrinho } from './produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() { }

  obtemCarrinho(){
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "");
    return this.itens;
  }

  adicionaCarrinho(produto: IProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens))
  }

  
  removerProdutoCarrinho(produtoId: number) {
    this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }


  limpaCarrinho(){
    this.itens = [];
    localStorage.clear();
  }


}
