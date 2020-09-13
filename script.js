var frasi;
frasi = ["Frase sarcastica a caso 1",
         "Frase ironica a caso 2",
         "Frase piccante a caso 3",
         "Frase ironica a caso 4",
         "Frase piccante a caso 5",
         ];

function ottieniFrase() {
  var rand = Math.floor(Math.random() * frasi.length);
  //                var randCol = [rand1,rand2,rand3,rand4,rand5];
  //                var i = randGen();
  var content = frasi[rand];

  document.getElementById('sentence').innerHTML = content;
};