import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mon-article',
  templateUrl: './mon-article.component.html',
  styleUrls: ['./mon-article.component.css']
})
export class MonArticleComponent implements OnInit {
  @Input() titre: string;
  @Input() description: string;
  @Input() datePub : string;
  @Input() lien: string;
  @Input() lienImg: string;

  constructor() { 
    this.titre = "Mon titre";
    this.description = "Mon description";
    this.datePub = "Mon date";
    this.lien = "Mon lien";
    this.lienImg = "Mon lien image";
  }

  ngOnInit(){
  }

  getTitre(){
    return this.titre;
  }
}
