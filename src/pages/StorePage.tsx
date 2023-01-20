import React from 'react'
import { MainLayout } from '../components/layout/MainLayout'
import Store from '../container/Store'

const StorePage = () => {
  return (
    <div>
      <MainLayout>
        <Store />
      </MainLayout>
    </div>
  )
}

export default StorePage