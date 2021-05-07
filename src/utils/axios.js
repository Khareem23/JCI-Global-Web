import axios from "axios";


// headers.append('Content-Type', 'application/json');
// headers.append('Accept', 'application/json');
// headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
// headers.append('Origin','http://localhost:3000');

    const authobject = localStorage.getItem("auth");
    var auth = "";
    if(authobject != null && authobject !== undefined)
    {
      auth  = JSON.parse(authobject)
    }
    
    console.log(auth.token);

    // For common config
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios.defaults.headers.post["Accept"] = "application/json";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.common = {'Authorization': `Bearer ${auth.token}`}
      
      // try {
      //     if(auth != null)
      //     {
      //         const authobj = JSON.parse(auth)
      //         return authobj;
      //     } else {
      //         return authstate;
      //     }
      // } catch (error) {
      //     return authstate;
      // }
  
    

    

    const mainAxios = axios.create({
        //timeout: 5000,
        baseURL: 'https://api.jciremit.com/api'
    });

    export {
      mainAxios
    };