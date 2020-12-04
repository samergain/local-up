import axios from "axios";

export default {
  //signup
  signup: function() {
    return axios.post("/api/auth/signup");
  },
  // signin
  signin: function(username,password) {

    return axios.post("/api/auth/signin");
  }
};
