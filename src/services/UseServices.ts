import axios from "axios";

const API_URL = "http://localhost:4000/auth";

const login = async (data: string) => {
    try {
        const res = await axios.post(`${API_URL}/login`, data);
        return res;
    } catch (error) {
        console.error(' error:');
        throw error;
    }

};


const register = async (data: string) => {
    try {
        const res = await axios.post(`${API_URL}/register`, data);
        return res;
    } catch (error) {
        console.error(' error:');
        throw error;
    }

};

export { login, register }