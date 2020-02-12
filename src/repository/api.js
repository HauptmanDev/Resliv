import * as axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://swapi.co/api/people/'
});


const api = {
    getActors: () => {
        return axiosInstance.get(`/`).then(r => {
            return {
                info: r.data,
                token: 'actors'
            }
        })
    }
};

export default api;

