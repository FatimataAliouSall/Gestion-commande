import express from "express";
import bodyParser from "body-parser";
import { Client, Commande, DetailCommande, Produit } from "./gestionComande.js";

const app = express();
const port = 3080;
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Bonjour les simploniens");
});

app.post("/app", (req, res) => {
  const client = new Client();
  client.creerClient({ nom: "Fatima", email: "fatima@gmail.com" });

  const p1 = new Produit();
  p1.creerProduit({ nom: "Robe", quantite: 12, prix: 200 });

  const p2 = new Produit();
  p2.creerProduit({ nom: "Stylo", quantite: 4, prix: 5 });

  const p3 = new Produit();
  p3.creerProduit({ nom: "Mac", quantite: 5, prix: 1000 });

  const d1 = new DetailCommande({ quantite: 2, prix: p1.prix, produit: p1 });
  const d2 = new DetailCommande({ quantite: 1, prix: p2.prix, produit: p2 });
  const d3 = new DetailCommande({ quantite: 2, prix: p3.prix, produit: p3 });

  let result = [];

  const commande = new Commande();
  commande.creerCommande({
    date: new Date(),
    montant: 2405,
    client: client.obtenirClient(),
    details: [d1, d2, d3],
  });

  result.push(commande.obtenirCommande()); 

  client.modifierClient({ nom: "Mohamed", email: "med@gmail.com" }); 


  commande.modifierCommande({
    date: new Date(),
    montant: 2405,
    client: client.obtenirClient(),
    details: [d1, d2, d3],
  });


  const association = {
    client: client.obtenirClient(),
    p1: p1.obtenirProduit(),
    p2: p2.obtenirProduit(),
  };
  result.push(commande.obtenirCommande());

  const items = commande.details;
  const p4 = new Produit();
  p4.creerProduit({ nom: "Téléphone", quantite: 12, prix: 200 });
  items.push(new DetailCommande({ quantite: 1, prix: p4.prix, produit: p4 }));

  
  commande.modifierCommande({
    date: new Date(),
    montant: 2405,
    client: client.obtenirClient(),
    details: items,
  });

  let status = 200;
  let message = commande;
  if (!commande) {
    message = "Commande non trouvée";
    status = 400;
  }

  res.status(status).json({ commande, result, association });
});

app.listen(port, () => {
  console.log(`L'application est à l'écoute sur le port ${port}`);
});
