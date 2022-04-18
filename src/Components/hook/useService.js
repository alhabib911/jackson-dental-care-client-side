import { useEffect, useState } from "react"

const useService = () => {
    const [service, setService] =useState([])
    useEffect(()=>{
        fetch(process.env.PUBLIC_URL+"/service.json")
        .then(res=>res.json())
        .then(data=>setService(data))
    } ,[])

    
    return [service, setService]
}

export default useService;