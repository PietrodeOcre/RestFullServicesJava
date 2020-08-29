/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package data;

import domain.Persona;
import java.util.List;

/**
 *
 * @author pietrodeocre
 */
public interface PersonaDao {
    public List<Persona> encontrarTodasLasPersonas();
    public Persona encontrarPersona(Persona persona);
    public void insertarPersona(Persona persona);
    public void actualizarPersona(Persona persona);
    public void eliminarPersona(Persona persona);
    
}
