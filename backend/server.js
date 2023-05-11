const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;
const cors = require('cors');
/* const { updateItems } = require('./path/to/itemModel/updateItems');
 */

// connection à la DB
connectDB();

const app = express();
app.use(cors({
  origin: 'http://localhost:3000'
}));


// Middleware pour traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

// Middleware pour les échecs de connexion à la base de donnée
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Quelque chose s'est cassé ! :(");
  });

app.use("/item", require("./routes/item.routes"));

// lancer le serveur
app.listen(port, () => console.log("The serveur started on port " + port));

/* // appels à la fonction updateItems()
updateItems(); */