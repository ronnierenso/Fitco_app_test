'use client'
import {FieldValues, SubmitHandler} from 'react-hook-form';
import React from 'react';
import {usePostData} from '@/utils/api';
import { useRouter } from 'next/navigation'
import {RegisterForm} from '@/sections/auth/register/ui/RegisterForm';
import {useRegisterForm} from '@/sections/auth/register/hook/useRegisterForm';
export const RegisterContainer: React.FC<FieldValues> = () => {
  const router = useRouter();
  const { register, handleSubmit, setValue, control, errors } = useRegisterForm();
  const { postData, isLoadingPost } = usePostData(`/auth/login`);
  
  const onSubmit: SubmitHandler<FieldValues> = async (dataForm) => {
    const resp = await postData(dataForm)
    if(resp){
      localStorage.setItem('token', resp.token)
      router.push('/chat_room')
    }
  };
  
  return <>
    <RegisterForm onSubmit={handleSubmit(onSubmit)} register={register} control={control} errors={errors} />
  </>
  
}
