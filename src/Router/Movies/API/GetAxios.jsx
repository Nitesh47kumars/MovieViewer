import axios from "axios"

const API = axios.create({
    baseURL: "https://www.omdbapi.com/",
})

export const getAxios = async () => {
    try{
        const res = await API.get(`?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`);
        return res.data.Search;
    }catch(e){
        console.log(e.message);
    }
}

export const movieDetail = async ({params}) =>{
    const id = params.movieID;
    try{
        const res = await API.get(`?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`);
        return res.data;
    }catch(e){
        console.log(e.message);
    }
}