import Image from 'next/image'
import classNames from 'classnames'
import { Control, FieldValues, UseFormRegister } from "react-hook-form"
import Link from 'next/link';

interface LoginFormInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues>
}
export const RegisterForm: React.FC<LoginFormInterface> = ({ onSubmit, register, control, errors }) => {
  
  const inputClass = classNames(
 'block w-full rounded-md border-0 py-1.5 px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
       {'ring-red-400 focus:ring-red-600': (errors.email || errors.password || errors.fullName)});
  
  const labelClass = classNames(
   'block text-sm font-medium leading-6 text-gray-900',
   {'text-red-500': (errors.email || errors.password || errors.fullName)});
  return (
   <>
     <div className="flex min-h-full flex-1">
       <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
         <div className="mx-auto w-full max-w-sm lg:w-96">
           <div>
             
             <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
               Register
             </h2>
           
           </div>
           
           <div className="mt-10">
             <div>
               <form
                onSubmit={onSubmit}
                className="space-y-6"
               >
                 <div>
                   <label
                    htmlFor="email"
                    className={labelClass}
                   >
                     Email address
                   </label>
                   <div className="mt-2">
                     <input
                      type="text"
                      {...register('email')}
                      className={inputClass}
                     />
                     {errors.email && (
                      <span className="mb-2 text-xs text-red-500">{errors.email.message}</span>
                     )}
                   </div>
                 </div>
                 
                 <div>
                   <label
                    htmlFor="password"
                    className={labelClass}
                   >
                     Password
                   </label>
                   <div className="mt-2">
                     <input
                      {...register('password')}
                      type="password"
                      className={inputClass}
                     />
                     {errors.password && (
                      <span className="mb-2 text-xs text-red-500">{errors.password.message}</span>
                     )}
                   </div>
                 </div>
                 
                 <div>
                   <label
                    htmlFor="fullName"
                    className={labelClass}
                   >
                     Full name
                   </label>
                   <div className="mt-2">
                     <input
                      type="text"
                      {...register('fullName')}
                      className={inputClass}
                     />
                     {errors.fullname && (
                      <span className="mb-2 text-xs text-red-500">{errors.fullName.message}</span>
                     )}
                   </div>
                 </div>
                 
                 <div className="flex items-center justify-between">
                   <div className="flex items-center">
                   </div>
                   
                   <div className="text-sm leading-6">
                     <Link href="/auth/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                       Login
                     </Link>
                   </div>
                 </div>
                 
                 <div>
                   <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                   >
                     Register
                   </button>
                 </div>
               </form>
             </div>
           </div>
         </div>
       </div>
       <div className="relative hidden w-0 flex-1 lg:block">
         <Image
          width={1908}
          height={600}
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
         />
       </div>
     </div>
   </>
  );
}
