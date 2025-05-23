import { useEffect, useState } from "react";

function useApi(currency)
{
    const [data, setData] = useState({})
    // i want to use api whenever this hook load/mount, us k lie hi useeffect() use hoga ..
    // useeffect -> function and dependency use krta
    useEffect(()=>{
        fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json').then((responce)=>responce.json).then((responce)=>setData(responce[currency]))
        console.log(data);
    }, [currency])
    return data

}
export default useApi;