import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (coutry) => {
    let apiURL = url;
    if (coutry) {
        apiURL = `${apiURL}/countries/${coutry}`;
    }
    try {
        const {data: {confirmed, deaths, recovered, lastUpdate}} = await axios.get(apiURL);
        const response = {confirmed, deaths, recovered, lastUpdate };
        return response;
    }catch(error) {

    }
}

export const fecthDataDaily = async () => {
    try{ 
        const {data} = await axios.get(`${url}/daily`);
        return data;
    }catch(error) {

    }
}

export const fetchCountries = async () => {
    try{
        const {data:{countries}} = await axios.get(`${url}/countries`);
        return countries;
    }catch(error) {
        console.log(error);
    }
}
