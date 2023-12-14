'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const formSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email({
      message: 'Please enter a valid email',
    }),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(8, {
      message: 'Password must be at least 8 characters',
    })
    .max(100, {
      message: 'Password must be less than 100 characters',
    }),
});

const CreateAccountForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <div>
      <p>Create Account</p>
    </div>
  );
};

export default CreateAccountForm;
