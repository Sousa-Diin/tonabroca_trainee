import axios from "axios";

const api = new axios.create ({
    baseURL : "https://localhost:3333", //API a ser consumida

});
/*
api.interceptors.request.use(async config => {// intercepta a requisição antes de ser executada

    //Token manual para teste
    const token = "exJ0XAiOiKJv1QpLiCFhbGc2PeR9BNed";
    if(token){
        api.defaults.headers.authorization =`Bearer${token}`;
    }
    return config
});*/

export default api;