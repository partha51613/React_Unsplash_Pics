import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {      
        Authorization : 'Client-ID ftIHjZPAM3MlWZgx0TJSu7LrCUd3C7CaYYcJMQCiXwg'
      }
});
