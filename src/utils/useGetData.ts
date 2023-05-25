import axios from "axios";
import { useState, useEffect } from "react";

const useGetData = <T>(url:string) => {
    async function getData() {
        try{
            const res = await axios.get(url);
            setData(res.data);
        } catch(e){
            console.log(e)
        }
    }

    const [data, setData] = useState<T>();

    useEffect(() => {
        getData();
    }, []);

    return data;
}

export default useGetData
