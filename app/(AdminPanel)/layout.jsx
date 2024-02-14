'use client'
import React, { useEffect, useState } from 'react';;
import NavBar from '@components/NavBar/'
import Header from '@components/Header'
import { getUserData } from '@Api/users';
import { useDispatch, useSelector } from 'react-redux';
import { setUserAuthData } from '@store/slices/userSlices'
import LoadingLayout from "@components/shared/LoadingLayout"

export default function AdminLayout({ children }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true)
  const auth = useSelector(state => state.user.authUser)
  useEffect(() => {
    if (document.body.clientWidth < 1500) {
      document.querySelector('.admin-layout')?.classList.add('active')
      document.querySelector('.NavbarComponent')?.classList.add('active')
      document.querySelector('.nav-items')?.classList.add('active')
    }
  }, [])

  useEffect(() => {
    setIsLoading(true)
    getUserData()
      .then(response => {
        dispatch(setUserAuthData(response.user))
        setIsLoading(false)
      })
  }, [])


  return (
    <>{
      isLoading && auth
        ? (
          <div className='layout-loading d-flex justify-content-center align-items-center'>
            <LoadingLayout />
          </div>
        )
        : (
          <div className='admin-layout'>
            <Header />
            <NavBar />
            <div className='admin-content px-3'>
              {children}
            </div>
          </div>
        )
    }
    </>
  );
}


