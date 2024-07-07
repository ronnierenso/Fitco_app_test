'use client'
import {FieldValues} from 'react-hook-form';
import React, {useEffect, useState} from 'react';
import { useGetDataAuth,} from '@/utils/api';

export const ChatRoomContainer: React.FC<FieldValues> = () => {
  const token = (typeof localStorage !== 'undefined')? localStorage.getItem('token'): '';
  const { getDataAuth } = useGetDataAuth(`/chat-room`, token);
  const [chatRoom, setChatRoom] = useState();
  useEffect( () => {
    const fetchData = async () => {
      setChatRoom( await  getDataAuth());
    };
    fetchData();
  }, [setChatRoom]);
  if(!chatRoom){
    return null
  }
  return <>
    <div className="flex min-h-full flex- items-center justify-center">
      <ul role="list" className="divide-y divide-gray-100">
        {chatRoom.map((item) => (
         <li key={item.id} className="flex items-center justify-between gap-x-6 py-5">
           <div className="flex min-w-0 gap-x-4">
             {/*<Link alt="" src={person.imageUrl} className="h-12 w-12 flex-none rounded-full bg-gray-50" href={}/>*/}
             <div className="min-w-0 flex-auto">
               <p className="text-sm font-semibold leading-6 text-gray-900">{item.name}</p>
               <p className="mt-1 truncate text-xs leading-5 text-gray-500">{item.description}</p>
             </div>
           </div>
           <button
            className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
           >
             View
           </button>
         </li>
        ))}
      </ul>
    </div>
  </>
  
}

