import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
//eslint-disable-next-line 
export const useFetchData=(url)=>{

const [fetchD, setFetch]=useState()
const [error, setError]=useState()

const getData = useCallback ( async ()=>{
try{
    const result = await fetch(url)
    const data = await result.json()
    setFetch(data)
}
catch(error1){
    setError(error1)
}
},[url])

useEffect(()=>{
    getData()
},[getData])

    return {fetchD, error}
}