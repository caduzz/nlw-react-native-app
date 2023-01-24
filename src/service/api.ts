import axios from 'axios'

const BASE_API = 'http://192.168.0.103:3025';

export default {
    listGame: async () => {
       const res = await axios.get(`${BASE_API}/games`);
       return res.data
    },
    listAds: async (id: string) => {
        const req = await axios(`${BASE_API}/games/${id}/ads`);
        return req.data;
    },
    connect: async (id: string) => {
        const req = await axios(`${BASE_API}/ads/${id}/discord`);
        return req.data;
    }
}