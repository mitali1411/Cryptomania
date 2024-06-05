import axios from "axios"

const API_URL = "/api/user/";

// REGISTER

const register = async(formData) => {
    const response = await axios.post(API_URL + '/register', formData);
    // console.log(response)

    // localstorage : it saves string values only
    localStorage.setItem('user', JSON.stringify(response.data));

    return response.data
}


// LOGIN

const login = async (formData) => {
    const response = await axios.post(API_URL + '/login', formData);
    // console.log(response.data);
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
}


const authService = {
    register,
    login
};

export default authService;