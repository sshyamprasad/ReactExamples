import { useEffect, useState } from "react";

const useTestAPI = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [tasks, setTasks] = useState([]);
    const fetchTasks = async ()=> {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          'https://2183cz58x3.execute-api.us-east-2.amazonaws.com/TestAPI/pets'
        );
  
        if (!response.ok) {
          throw new Error('Request failed!');
        }
  
        const data = await response.json();
  
        const loadedTasks = [];
  
        for (const taskKey in data) {
          loadedTasks.push({ id: taskKey, text: data[taskKey].type });
        }
  
        setTasks(loadedTasks);
      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    }
      useEffect(() => {
        fetchTasks();
  }, []);
  return [tasks, isLoading, error];
}

export default useTestAPI;