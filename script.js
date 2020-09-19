var frasi;
frasi = ["Sono cotto a puntino per te, bella pollastra 🐔",
         "Grazie bella pollastra, così mi fai alzare la cresta 🔥",
         "Sta sera mi sento nu gallo 🐔👑 vuoi essere la mia gallina🐦💍? Cit.",
         "Lo so che non sono una gallina ma...ti va di strapazzare le mie uova? 😏",
         "Posso assaggiare il tuo petto di pollo alla diavola! 😋",
         "Ehi bella pollastrella mi fai assaggiare le tue alette piccanti? 🔥🔥",
         "Petto o coscia? Con questa pollastrella 🐔 c'è l'imbarazzo della scelta! 😉",
         "Hei bella pollastrella sono disposto a farmi spennare da te 💶💶  se dopo tu ti fai spennare da me 😉😉. Che ne dici?"   
         ];

var classCycle=['background1','background2','background3','background4','background5','background6','background7','background8','background9','background10','background11'];

function ottieniFrase() {
  var randomNumber = Math.floor(Math.random() * frasi.length);

  var content = frasi[randomNumber];
  document.getElementById('sentence').innerHTML = content;

  randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];  
  var body = document.body;
  body.classList.add(classToAdd);
};