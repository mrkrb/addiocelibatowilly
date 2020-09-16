var frasi;
frasi = ["Sono cotto a puntino per te, bella pollastra 🐔",
         "Grazie bella pollastra, così mi fai alzare la cresta 🔥",
         "Frase piccante a caso 3",
         "Frase ironica a caso 4",
         "Frase piccante a caso 5",
         ];

var classCycle=['background1','background2'];

function ottieniFrase() {
  var rand = Math.floor(Math.random() * frasi.length);
  //                var randCol = [rand1,rand2,rand3,rand4,rand5];
  //                var i = randGen();
  var content = frasi[rand];

  document.getElementById('sentence').innerHTML = content;

  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];
  
  var body = document.body;
  body.classList.add(classToAdd);
};