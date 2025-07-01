import React from 'react'
import { getAuthUser } from '../lib/api'
import { useQuery } from '@tanstack/react-query'

const useAuthUser = () => {
  const authUser = useQuery({
    queryKey: ["authUser"],
    queryFn: getAuthUser,
    retry: false,
  })
  // console.log(authUser.data.user, "authUser data in useAuthUser hook");
  
  return { isLoading: authUser.isLoading, authUser: authUser.data?.user }

}

export default useAuthUser