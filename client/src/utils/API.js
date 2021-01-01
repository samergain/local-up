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

  // Get ticket by Id.
  // getTicket : async function(id) {
  //   const data = await axios.get("/api/ticket/" + id);
  //   return data;
  // },

  getTicket : function(id) {
    return axios.get("/api/ticket/" + id);
  },
 
  
  //////Tickets//////
  // create ticket
  saveTicket : function(ticketData) {
      return axios.post("/api/ticket", ticketData)
  },
  // update ticket
  updateTicket: function(ticketId, ticketData) {
    return axios.put("/api/ticket/"+ ticketId, ticketData)
  },
  
  ///////Projects////////
  //Gets all the projects with their tasks and ticket
  getProject : function() {
      return axios.get("/api/project");
  },
  //update project: add a created task to it
  addTaskToProject : function(projectID, taskID) {
    return axios.put("/api/project/projectTask/" + projectID , {id: taskID})
  },
  saveProject : function(projectData) { 
    return axios.post("/api/project", projectData); 
  },

  updateProject: function(id, projectData) {
    return axios.put("/api/project/" + id, projectData);
  },

  /////////Tasks///////////
  //get task by id
  getTaskById : function(id) {
    return axios.get("/api/task/" + id);
  },
  createTask : function(taskData) {
    return axios.post("/api/task", taskData);
  },
  updateTask : function(id, taskData) {
    return axios.put("/api/task/" + id, taskData);
  },
  deleteTask : function(id) { 
    return axios.delete("/api/task/" + id); 
  },
  
  //add roles
  addRoles : function(roleData) {
    return axios.post("/api/role", roleData)
  }
  //Gets all the blogs in the collection.
  // getBlogs : function() {
  //   return axios.get("/api/blog");
  // },
  // saveBlogs : function(blogData) { 
  //   return axios.post("/api/blog", blogData); 
  // },
  // deleteBlogs : function(id) { 
  //   return axios.delete("/api/blog/" + id); 
  // },

};
