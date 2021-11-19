import { useEffect,useState } from "react"



const useLocalStorage = (key) => {
    const [value, setValue] = useState();
    useEffect(() => {
        const SavedData = localStorage.getItem(key);
        localStorage.setItem(key,JSON.stringify(value));
    }, [value]);
    
    return [value, setValue];
}

export default useLocalStorage
