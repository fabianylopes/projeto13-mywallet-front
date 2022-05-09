import axios from "axios";

const BASE_URL = 'http://localhost:5000';

function getConfig(token){
    return { headers: { Authorization: `Bearer ${token}` } };
}

function singnIn(body){
    const promise = axios.post(`${BASE_URL}/sign-in`, body);
    
    return promise;
}

function singnUp(body){
    const promise = axios.post(`${BASE_URL}/sign-up`, body);
    
    return promise;
}

function addEntry(body, token){
    const config = getConfig(token);
    const promise = axios.post(`${BASE_URL}/transactions`, body, config);
    
    return promise;
}

function addOut(body, token){
    const config = getConfig(token);
    const promise = axios.post(`${BASE_URL}/transactions`, body, config);
    
    return promise;
}

function getRecords(token){
    const config = getConfig(token);
    const promise = axios.post(`${BASE_URL}/records`, config);

    return promise;
}

const api = {
    singnIn,
    singnUp,
    addEntry,
    addOut,
    getRecords
}

export default api;