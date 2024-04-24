import { SearchPage } from '@/components/SearchPage'
import React, { Suspense } from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <SearchPage/>
    </Suspense>
  )
}

export default page