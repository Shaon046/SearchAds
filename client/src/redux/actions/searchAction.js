
import axios from 'axios'
import { SEARCH_QUERY } from "../../type";

export const getData = (searchText) => async (dispatch) => {
    try {
   //const data= await adsData(searchText)
   const URL = `http://localhost:8000/getads?search=${searchText}`;

   await axios
   .post(URL)
   .then((data) => 
   
   dispatch(setData(data))
   )
   .catch((err) => console.log(err));


     ;
    } catch (error) {
      console.log(`Error : ${error}`)
    }
  };

export const setData=(data=null)=>{

  if(data){
    return{
      type: SEARCH_QUERY,
       payload: data 
    }
  }
}
