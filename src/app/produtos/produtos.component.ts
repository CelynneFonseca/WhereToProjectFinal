import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Produto } from 'src/model/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  displayedColumns: string[] = [ ‘nome’, ‘desc’, ‘preco’, ‘acao’];
  dataSource: Produto[];

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.getProdutos()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
}
