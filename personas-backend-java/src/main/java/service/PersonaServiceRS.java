/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import data.PersonaDao;
import domain.Persona;
import java.util.List;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;


/**
 *
 * @author pietrodeocre
 */
@Stateless
@Path("/persona")
public class PersonaServiceRS {
   @Inject
   private PersonaDao personaDao;
   
   @GET
   @Produces(value = MediaType.APPLICATION_JSON)
   public List<Persona> listarPersonas(){
       List<Persona> personas = personaDao.encontrarTodasLasPersonas();
       System.out.println("Personas encontradas: " + personas);
       return personas;
   }
   
   
   @GET
   @Produces(value = MediaType.APPLICATION_JSON)
   @Path("{id}") //hace referencia al path /persona/{id}
   /*
   Para que el webservice sepa que es el id loque tiene que aportar 
   como parametro al metodo se le indica con PathParams
   */
   public Persona encontrarPersona(@PathParam("id") int id){
       Persona persona = personaDao.encontrarPersona(new Persona(id));
       System.out.println("Persona encontrada: " + persona);
       return persona;
   }
   
   @POST
   @Consumes(value = MediaType.APPLICATION_JSON)
   @Produces(value = MediaType.APPLICATION_JSON)
   public Persona agregPersona(Persona persona){
       personaDao.insertarPersona(persona);
       System.out.println("Persona agregada: " + persona);
       return persona;
   }
   
   @PUT
   @Consumes(value = MediaType.APPLICATION_JSON)
   @Produces(value = MediaType.APPLICATION_JSON)
   @Path("{id}")
   public Response modificarPersona(@PathParam("id")int id, Persona personaModificada){
       Persona persona = personaDao.encontrarPersona(new Persona(id));
       if(persona != null){
           personaDao.actualizarPersona(personaModificada);
           System.out.println("Persona modificada: " + personaModificada);
           return Response.ok().entity(personaModificada).build();
       }else{
           return Response.status(Status.NOT_FOUND).build();
       }
   }
   
   @DELETE
   @Produces(value = MediaType.APPLICATION_JSON)
   @Path("{id}")
   public Response eliminarPersona(@PathParam("id")int id){
       personaDao.eliminarPersona(new Persona(id));
       System.out.println("PErsona eliminada" + id);
       return Response.ok().build();
   }
   
}
