import React from 'react'
import Card from './Card'

const Results = ({ datas }) => {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 max-w-6xl mx-auto py-5'>
      {
        datas.map((res) => {
          return (
            <div key={res.id}>
              <Card res={res} key={res.id} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Results