import axios from "axios";

export default {


  //Users///
  //Get all Users 
  getAllUsers: function() {
    return axios.get("/api/user/users");
  },

  //////Clients/////
  // Get all clients with their tickets
  getClients: function() {
    return axios.get("/api/user/clients");
  },
  //update a client with a new ticket
  addTicketToClient: function(userId, ticketId) {
    return axios.put("/api/user/clientTicket/" + userId , {id: ticketId})
  },

  //////Tickets//////
  // create ticket
  saveTicket : function(ticketData) {
      return axios.post("/api/ticket", ticketData)
  },
  //Gets all the blogs in the collection.
  getBlogs : function() {
      return axios.get("/api/blog");
  },
  saveBlogs : function(blogData) { 
    return axios.post("/api/blog", blogData); 
  },
  deleteBlogs : function(id) { 
    return axios.delete("/api/blog/" + id); 
  },
  
  //Gets all the projects in the collection.
  getProjects : function() {
      return axios.get("/api/project");
  },
  saveProjects : function(projectData) { 
    return axios.post("/api/project", projectData); 
  },

  //Get ticket by Id.
  getTicket : function(id) {
    return axios.get("/api/ticket/" + id);
  },
  //Update ticket by Id.
  updateTicket : function(id, ticketData) {
    return axios.put("/api/ticket/" + id, ticketData);
  }
}