import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-detalhe-creche',
  templateUrl: './detalhe-creche.component.html',
  styleUrls: ['./detalhe-creche.component.css']
})
export class DetalheCrecheComponent implements OnInit {

  apiGetCreche = 'https://guarded-mountain-77925.herokuapp.com/api/apiNova.php';
  apiGetImovel = 'https://guarded-mountain-77925.herokuapp.com/api/consultaBaseZapImoveis.php'
  allCreche = [];
  infoImovel = [];
  resultSearch: boolean = false;
  urlImovel: string;


  constructor(private http: Http) { }

  ngOnInit() {
    this.getCreche();
  }
  getCreche() {
    let url = this.apiGetCreche;
    this.http.get(url).subscribe((res) => {
      console.log('returned of API', res.json())

      this.allCreche = res.json();
    })
  }
  getImovel() {
    let url = this.apiGetImovel;
    this.http.get(url).subscribe((res) => {
      console.log('returned of API', res.json())

      this.infoImovel = res.json();
      this.urlImovel = res.json().url;
      if (this.infoImovel != null) {
        this.resultSearch = true;
      }
    })
  }
}
