import Card from '@/components/Card'
import products from '@/data/products'
import React from 'react'

function FavoritesPage() {
  return (
    <div className='grid grid-cols-3'>
      {products.map(product => (
        <Card key={product.id} product={product} favorite={true}/>
      ))}
    </div>
  )
}

export default FavoritesPage
