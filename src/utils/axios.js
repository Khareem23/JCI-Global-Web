import axios from "axios";

    // For common config
    axios.defaults.headers.post["Content-Type"] = "application/json";

    const mainAxios = axios.create({
        //timeout: 5000,
        baseURL: 'http://api.jciremit.com/api/'
    });

    export {
      mainAxios
    };