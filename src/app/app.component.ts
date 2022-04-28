import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  articles: any[];
  
  constructor(){
    this.articles = []
    let items;
    function cpy(x:any, y:any) {
      y.forEach((e: any)=>{
        x.push(e);
      })
    }
    //récupère le contenu du fichier sous format json et le convertit en objet
    let x = new XMLHttpRequest();
    x.open("GET", "http://localhost:3001/", false);
    x.onreadystatechange = function () {
    if (x.readyState == 4 && x.status == 200)
    { 
        let doc=x.response;
        doc = JSON.parse(doc);
        items = doc.rss.channel.item;
        
    }
    };
    x.setRequestHeader('Content-Type', 'text/json');
    x.send(null);
    cpy(this.articles, items);
    console.log("articles: ", this.articles[0]);

  }

  ngOnInit() {  
  }

  getArticles()
  {
    return this.articles;
  }
}
