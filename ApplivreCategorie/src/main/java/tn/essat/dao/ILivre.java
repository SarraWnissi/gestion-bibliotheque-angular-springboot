package tn.essat.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import tn.essat.model.Livre;

public interface ILivre extends JpaRepository<Livre,Integer> {
	@Query("select p from Livre p where p.cat.id=?1")
	public List<Livre> getAllLivrebyCats(int id);

}
