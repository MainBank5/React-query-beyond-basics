import axios from 'axios'

const getusers = async (id) => {
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`) // Get users data from the API
        return response.data
    }
    catch(err){
        console.error("Error Fetching the data:", err);
        return[];
    }
}

export default getusers