import { login, register } from "../services/UseServices";

const HandleUserLogin = async (loginuser: string) => {
    try {
        const res = await login(loginuser);
        return res;
    } catch (error) {
        console.error(' error:');
        throw error;
    }
}

const HandleRegisterUser = async (newUser: string) => {
    try {
        const res = await register(newUser);
        return res;
    } catch (error) {
        console.error(' error:');
        throw error;
    }
}


export { HandleUserLogin, HandleRegisterUser }