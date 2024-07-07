'use client'
import {LoginForm} from '@/sections/auth/login/ui/LoginForm';
import {FieldValues, SubmitHandler} from 'react-hook-form';
import React from 'react';
import {useLoginForm} from '@/sections/auth/login/hook/useAuthForm';
import {usePostData} from '@/utils/api';
import { useRouter } from 'next/navigation'
export const LoginContainer: React.FC<FieldValues> = () => {
  const router = useRouter();
  const { register, handleSubmit, setValue, control, errors } = useLoginForm();
  const { postData, isLoadingPost } = usePostData(`/auth/login`);
  
  const onSubmit: SubmitHandler<FieldValues> = async (dataForm) => {
    const resp = await postData(dataForm)
    if(resp){
      localStorage.setItem('token', resp.token)
      router.push('/chat_room')
    }
    // console.log(dataForm)
    // console.log(resp)
    
    // const resp = await putData(dataForm)
    // if(!resp.error){
    //   router.push('/meter/rol/rol_list')
    // }
  };
  
  return <>
    <LoginForm onSubmit={handleSubmit(onSubmit)} register={register} control={control} errors={errors} />
  </>
  
}
