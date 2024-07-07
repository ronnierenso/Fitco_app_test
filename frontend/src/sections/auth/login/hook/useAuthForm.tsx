import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type LoginInputs = {
  email: string;
  password: string;
};

const roleSchema = z.object({
  email: z.string()
   .email('Error email format'),
  password: z.string()
   .regex(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,'The password must have a Uppercase, lowercase letter and a number')
}) satisfies z.ZodType<LoginInputs>;

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(roleSchema),
  });
  
  return {
    register,
    handleSubmit,
    setValue,
    control,
    errors,
    reset
  };
};
