import axios from "axios";

// headers.append('Content-Type', 'application/json');
// headers.append('Accept', 'application/json');
// headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
// headers.append('Origin','http://localhost:3000');


    // For common config
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios.defaults.headers.post["Accept"] = "application/json";
    // axios.defaults.headers.post["Origin"] = "http://localhost:3000";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    

    const mainAxios = axios.create({
        //timeout: 5000,
        baseURL: 'https://api.jciremit.com/api'
    });

    export {
      mainAxios
    };