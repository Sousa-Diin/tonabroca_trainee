import axios from "axios";

const api = axios.create ({
    baseURL : "https://api.github.com", //API a ser consumida

});

api.interceptors.request.use(async config => {// intercepta a requisição antes de ser executada

    //Token manual para teste
    const token = "exJ0XAiOiKJv1QpLiCFhbGc2PeR9BNed";
    if(token){
        api.defaults.headers.authorization =`Bearer${token}`;
    }
    return config
});

export default api;