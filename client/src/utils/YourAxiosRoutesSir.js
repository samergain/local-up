/* eslint-disable import/no-anonymous-default-export */
// The Blogger Routes
import axios from "axios"; 

// Matches with "/api/blog"
// router.route("/")
//   .get(blogController.findAll)
//   .post(blogController.create);

// Matches with "/api/blog/:id"
// router.route("/:id")
//   .get(blogController.findById)
//   .put(blogController.update)
//   .delete(blogController.remove);



export default {
    
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
    deleteProjects : function(id) { 
      return axios.delete("/api/project/" + id); 
    },
        
    getRoles : function() {
        return axios.get("/api/role");
    },
    saveRoles : function(id) { 
      return axios.post("/api/role", id); 
    },
    getRoles : function() {
        return axios.get("/api/role");
    },
    saveRoles : function(id) { 
      return axios.post("/api/role", id); 
    },
};

