import axios from "axios";
    const authobject = localStorage.getItem("auth");
    let auth = "";
    console.log(authobject)
    if(authobject != null && authobject !== undefined)
    {      
      console.log("is called: " + authobject)
      auth  = JSON.parse(authobject);
    }
    // For common config
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios.defaults.headers.post["Accept"] = "application/json";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    if(authobject) {
      console.log(authobject)
      axios.defaults.headers.common = {'Authorization': `Bearer ${auth.authstate.token}`}
    }
     const mainAxios = axios.create({
        timeout: 30000,
        baseURL: 'https://api.jciremit.com/api'
    });

    export {
      mainAxios
    };