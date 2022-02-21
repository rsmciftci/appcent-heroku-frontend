import axios from "axios";

class AuthenticationService{

    login(username, password){

        const data = {
            username : username,
            password: password
        }

        const url = 'https://appcent-todo-backend.herokuapp.com/auth/login';

        return axios.post(url, data);
    }

}

export default new AuthenticationService();
