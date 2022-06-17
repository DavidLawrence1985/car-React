import axios from "axios";

const carApi = axios.create({
    baseURL: "https://localhost:44336/car/",
    headers: {"Access-Control-Allow-Credentials": "*"}
});

export async function getCarSections(cb: any){ 
    await carApi
    .get('carsections')
    .then(r => cb(r.data))
    .catch(e => console.log(e.response));
}

export async function getCarSectionDetails(id: number, cb: any){ 
    await carApi
    .get(`carsection-details?id=${id}`)
    .then(r => cb(r.data))
    .catch(e => console.log(e.response));
    
}