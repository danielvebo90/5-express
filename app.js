const express = require("express");
const app = express();

app.get('/', (req, res) => {

  var data = [];
  for (var i=1 ; i < 51 ; i++) {

    if (i%2===0){
      x ="<p>"+ i +" Soy Par!</p> ";
    }else{
      x ="<p>"+ i +" Soy Impar!</p> ";
    }
    data.push(x);

  }

  res.send(data.join("\n"));
});

app.listen(3000, () => console.log('Listening on port 3000!'));
