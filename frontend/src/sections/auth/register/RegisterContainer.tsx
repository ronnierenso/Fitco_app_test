'use client'
import {FieldValues, SubmitHandler} from 'react-hook-form';
import React from 'react';
import {usePostData} from '@/utils/api';
import { useRouter } from 'next/navigation'
import {RegisterForm} from '@/sections/auth/register/ui/RegisterForm';
import {useRegisterForm} from '@/sections/auth/register/hook/useRegisterForm';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
export const RegisterContainer: React.FC<FieldValues> = () => {
  const router = useRouter();
  const { register, handleSubmit, setValue, control, errors } = useRegisterForm();
  const { postData, isLoadingPost, errorPost } = usePostData(`/auth/register`);
  
  const onSubmit: SubmitHandler<FieldValues> = async (dataForm) => {
    const resp = await postData(dataForm)
    if(resp){
      localStorage.setItem('token', resp.token)
      router.push('/chat_room')
    }
    const showSwal = (errorGetDataAuth) => {
      withReactContent(Swal).fire({
        icon: "error",
        title: "Error",
        text: errorGetDataAuth.message,
        showConfirmButton: false
      })
    }
    
    if(errorPost){
      showSwal(errorPost)
    }
  };
  
  return <>
    <RegisterForm onSubmit={handleSubmit(onSubmit)} register={register} control={control} errors={errors} />
  </>
  
}
