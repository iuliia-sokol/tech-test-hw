import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL



export const fetchAllUsers = async (page,per_page) => {
    try {
        if (page && per_page) {
        return await axios
          .get(`users/?page=${page}&limit=${per_page}`)
          .then(({ data }) => {
            return data;
          });
      }
      return await axios.get(`users`).then( ({ data }) => {
           return data;
      });
    }
    catch(err) {
        console.log(err);
    }
  };

  export const updateUserData = async(id,body)=>{
   try{
    await axios.put(`users/${id}`, {...body}).then( ({ data }) => {
     return data;
    })}
    catch(err) {
        console.log(err);
    }
  }