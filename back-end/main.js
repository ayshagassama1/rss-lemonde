const express = require("express");
const app = express();
const axios = require('axios');
var parser = require('p3x-xml2json');
const cors = require('cors');

app.set("port", process.env.PORT || 3001);

app.use(cors({
    origin: '*'
}));

app.get("/", (request, response) => {
    //récupère le fichier xml et le convertit en json
    axios
    .get('https://www.lemonde.fr/rss/en_continu.xml')
    .then(res => {
        console.log(`statusCode: ${res.status}`);
        let json = parser.toJson(res.data);
        //console.log(json);
        response.send(json);
    })
    .catch(error => {
        console.error(error);
    });
    
});

app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});
