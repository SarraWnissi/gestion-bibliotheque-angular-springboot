package tn.essat.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.essat.dao.ICategorie;
import tn.essat.dao.ILivre;
import tn.essat.model.Categorie;
import tn.essat.model.Livre;

@RestController
@CrossOrigin("*")
public class AppREST {

    @Autowired
    ICategorie daoCat;

    @Autowired
    ILivre daoLivre;

    @GetMapping("/categories")
    public List<Categorie> getAllCategories() {// tous les categories
        return daoCat.findAll();
    }

   
    @GetMapping("/livres/{id}")//les livres de categorie donnees
    public List<Livre> getLivresByCategorie(@PathVariable("id") int idCat) {
        return daoLivre.getAllLivrebyCats(idCat);
    }

   
    @PostMapping("/addLivre")
    public Livre addLivre(@RequestBody Livre livre) {
    	// Charger la catégorie depuis la base
    	Categorie cat = daoCat.findById(livre.getCat().getId()).orElse(null);
        livre.setCat(cat);
        return daoLivre.save(livre);
    }

    @DeleteMapping("/deleteLivre/{id}")
    public void deleteLivre(@PathVariable("id") int idLivre) {
        daoLivre.deleteById(idLivre);
    }
}