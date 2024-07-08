'use client'
import {LoginForm} from '@/sections/auth/login/ui/LoginForm';
import {FieldValues, SubmitHandler} from 'react-hook-form';
import React from 'react';
import {useLoginForm} from '@/sections/auth/login/hook/useAuthForm';
import {usePostData} from '@/utils/api';
import { useRouter } from 'next/navigation'
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
export const LoginContainer: React.FC<FieldValues> = () => {
  const router = useRouter();
  const { register, handleSubmit, setValue, control, errors } = useLoginForm();
  const { postData, isLoadingPost,errorPost } = usePostData(`/auth/login`);
  
  const onSubmit: SubmitHandler<FieldValues> = async (dataForm) => {
    const resp = await postData(dataForm)
    if(resp){
      localStorage.setItem('token', resp.token)
      router.push('/chat_room')
    }
  };
  
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
  
  return <>
    <LoginForm onSubmit={handleSubmit(onSubmit)} register={register} control={control} errors={errors} />
  </>
  
}
