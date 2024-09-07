export class Client {
  constructor() {}

  creerClient(client) {
    this.nom = client.nom;
    this.email = client.email;
    console.log(`Client: ${this.nom}, ${this.email} a été créé`);
  }

  supprimerClient() {
    console.log(`Client: ${this.nom}, ${this.email} a été supprimé`);
  }

  modifierClient(nouveauClient) {
    this.nom = nouveauClient.nom;
    this.email = nouveauClient.email;
    console.log(`Client: ${this.nom}, ${this.email} a été mis à jour`);
  }

  obtenirClient() {
    console.log(`Client: ${this.nom}, ${this.email}`);
    return { nom: this.nom };
  }
}

export class Produit {
  constructor() {}

  creerProduit(produit) {
    this.nom = produit.nom;
    this.quantite = produit.quantite;
    this.prix = produit.prix;
    console.log(`Produit: ${this.nom} a été créé`);
  }

  supprimerProduit() {
    console.log(`Produit: ${this.nom} a été supprimé`);
  }

  modifierProduit(nouveauProduit) {
    this.nom = nouveauProduit.nom;
    this.quantite = nouveauProduit.quantite;
    this.prix = nouveauProduit.prix;
    console.log(`Produit: ${this.nom} a été mis à jour`);
  }

  obtenirProduit() {
    console.log(`Produit: ${this.nom}`);
    return { nom: this.nom, quantite: this.quantite, prix: this.prix };
  }
}

export class DetailCommande {
  constructor(quantite, prix, produit) {
    this.quantite = quantite;
    this.prix = prix;
    this.produit = produit;
  }
}

export class Commande {
  constructor() {}

  creerCommande(commande) {
    this.date = commande.date;
    this.montant = commande.montant;
    this.details = commande.details;
    this.client = commande.client;
    console.log(`Commande a été créée`);
  }

  supprimerCommande() {
    this.date = null;
    console.log(`Commande a été supprimée`);
  }

  modifierCommande(nouvelleCommande) {
    this.date = nouvelleCommande.date;
    this.montant = nouvelleCommande.montant;
    this.details = nouvelleCommande.details;
    this.client = nouvelleCommande.client;
    console.log(`Commande a été mise à jour`);
  }

  obtenirCommande() {
    return {
      date: this.date,
      montant: this.montant,
      details: this.details.length,
      client: this.client.nom,
    };
  }
}
