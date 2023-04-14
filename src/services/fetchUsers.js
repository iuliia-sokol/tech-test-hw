import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL



export const fetchAllUsers = async (page, per_page) => {
    if (page && per_page) {
      return await axios
        .get(`users/?page=${page}&per_page=${per_page}`)
        .then(({ data }) => {
           
          return data;
        });
    }
    return await axios.get(`users`).then( ({ data }) => {
         return data;
    });
  };

  export const updateUserData = async(id,body)=>{
   
    await axios.put(`users/${id}`, {...body}).then( ({ data }) => {
       console.log(data);
        return data;
   });
  }