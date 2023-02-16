import app from "./app";

const main=()=>{
    app.listen(app.get("port"));
    console.log(`Server on port ${ app.get("port") }`);
}

main();


/*
var Sybase = require('sybase'),
db = new Sybase('sisedbdev.liberty.ec', 4100, 'generales', 'OCOFREEMER', 'EN LA CASA DE PINOCHO2022');

db.connect(function (err) {
  if (err) return console.log(err);

  db.query('select cod_ramo, txt_desc from tramo ', function (err, data) {
    if (err) console.log(err);

    console.log(data);

    db.disconnect();

  });
});
*/