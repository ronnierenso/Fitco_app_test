import axios, {AxiosResponse} from "axios";
import useSWR, { mutate } from 'swr';
import {useState} from 'react';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

// Hook  GET
export const useGetDataAuth = (url: string, token:string) => {
  const [isLoadingGetDataAuth, setIsLoadingGetDataAuth] = useState(false);
  const [errorGetDataAuth, setErrorGetDataAuth] = useState<Error | null>(null);
  
  const getDataAuth = async () => {
    setIsLoadingGetDataAuth(true);
    setErrorGetDataAuth(null);
    try {
      const res:AxiosResponse<any> = await api.get(url,{
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      if (!res.statusText === "OK") throw new Error('Error en POST');
      const result = await res.data;
      mutate(url);
      return result;
    } catch (err) {
      if (err instanceof Error) {
        setErrorGetDataAuth(err);
      } else {
        setErrorGetDataAuth(new Error('Error desconocido'));
      }
    } finally {
      setIsLoadingGetDataAuth(false);
    }
  };
  
  return { getDataAuth, isLoadingGetDataAuth, errorGetDataAuth };
};


// Hook POST
export const usePostData = (url: string) => {
  const [isLoadingPost, setIsLoadingPost] = useState(false);
  const [errorPost, setError] = useState<Error | null>(null);
  
  const postData = async (data: any) => {
    setIsLoadingPost(true);
    setError(null);
    try {
      const res:AxiosResponse<any> = await api.post(url, data,{
        headers:{
          'Content-Type': 'application/json'
        }
      });
      if (!res.statusText === "OK") throw new Error('Error en POST');
      const result = await res.data;
      mutate(url);
      return result;
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error('Error desconocido'));
      }
    } finally {
      setIsLoadingPost(false);
    }
  };
  
  return { postData, isLoadingPost, errorPost };
};

