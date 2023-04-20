import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.api-futebol.com.br/v1/',
    headers: {
        'Authorization': 'Bearer ' + import.meta.env.VITE_LIVE_KEY, // Chave de acesso da API Futebol 
        'Content-Type': 'application/json'
    }
});

const campeonato_id = 10; // ID referente ao campeonato que deseja consultar (Brasileirão)

export const getCampeonato = async (page) => {
    try {
        const response = await api.get(`campeonatos/${campeonato_id}/${page}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};