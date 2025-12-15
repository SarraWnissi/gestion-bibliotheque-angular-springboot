package tn.essat.model;

import javax.persistence.*;

@Entity
public class Livre {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String titre;
    private int qte;
   
    @ManyToOne
    @JoinColumn(name = "cat_id")
    private Categorie cat;

    
    
    public Livre() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Livre(Integer id, String titre, int qte, Categorie cat) {
		super();
		this.id = id;
		this.titre = titre;
		this.qte = qte;
		this.cat = cat;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public int getQte() {
		return qte;
	}

	public void setQte(int qte) {
		this.qte = qte;
	}

	public Categorie getCat() {
		return cat;
	}

	public void setCat(Categorie cat) {
		this.cat = cat;
	}

	
} 