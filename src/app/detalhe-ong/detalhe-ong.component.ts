import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-detalhe-ong',
  templateUrl: './detalhe-ong.component.html',
  styleUrls: ['./detalhe-ong.component.css']
})
export class DetalheOngComponent implements OnInit {

  apiGetCreche = 'https://guarded-mountain-77925.herokuapp.com/api/apiNova.php';
  allCreche = [];

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

}
