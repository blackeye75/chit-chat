import React, { use } from 'react'
import { login } from '../lib/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useLogin = () => {
  const queryClient = useQueryClient();
  const {
    mutate: loginMutation,
    isPending,
    error,
  } = useMutation({
    mutationFn: login,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
  });
  // console.log("Error in useLogin hook", error);
  return { loginMutation, isPending, error };
}

export default useLogin