'use client'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserListAction } from "@userActions"
import { getRoleListAction } from '@store/actions/roleAction'
import UsersList from "@components/Users/UsersList"
import UsersHeader from '@components/Users/UsersHeader'
import Loading from '@components/shared/Loading'

const Users = () => {
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false)
  const isLoading = useSelector(state => state.user.isLoadingList)
  const usersList = useSelector(state => state.user.list)

  useEffect(() => {
    dispatch(getRoleListAction())
  }, [])

  useEffect(() => {
    dispatch(getUserListAction(1))
  }, [])




  return (
    <div className='mt-4 d-flex flex-column'>
      <div className='border-bottom'>
        <UsersHeader />
      </div>
      <div className='ms-1 mt-4'>
        {
          isLoading
            ? <Loading />
            : <UsersList />
        }
      </div>
    </div>
  )
}



export async function generateMetadata({ params }) {
  return {
    title: 'Users',
  }
}
export default Users