import { useState, useEffect } from "react";
const useFetch = (url) =>{
    //state for Homejs
   const [data, setData] = useState(null);
   const [isPending, setIsPending] = useState(true);
   const [error, setError] = useState(null);
   
    useEffect(async()=>{
        const abortCont = new AbortController();

        setTimeout(()=>{
        //fetch data dari API in home
         fetch(url,{signal: abortCont.signal})
         //if API tidak bisa diambil,maka muncul throw error
         .then(res => {
             if(!res.ok){
                 throw Error('Error!!! cant fetch the data for resource')
             }
             return res.json();
         })
         .then(data=>{
             //memunculkan data
             setData(data);
             //loading effect ketika direfresh
             setIsPending(false);
             setError(null);
         })
         .catch(err=>{
             if(err.name === 'AbortError'){
                 console.log('fetch fail');
             }else{
                 setIsPending(false);
                 setError(err.message);
             }
         })
        }, 500);
        return () => abortCont.abort();

     }, [url]); 

     return {data , isPending , error};
}

export default useFetch;