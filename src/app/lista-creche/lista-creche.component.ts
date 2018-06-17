import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-lista-creche',
  templateUrl: './lista-creche.component.html',
  styleUrls: ['./lista-creche.component.css']
})
export class ListaCrecheComponent implements OnInit {

  apiGetOng: string = 'https://guarded-mountain-77925.herokuapp.com/api/apiObjetoOrgao.php';
  allOng = [];
  nameCreche: string;


  constructor(private http: Http) { }

  ngOnInit() {
    this.getOng();

  }
  getOng() {
    let url = this.apiGetOng;
    this.http.get(url).subscribe((res) => {
      console.log(res.json())

      this.allOng = res.json().dados;
    })
  }
  getCreche(nameCreche) {
    console.log(nameCreche);
  }

}
