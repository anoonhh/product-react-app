import React from 'react'
import AddForm from '../components/AddForm'
import Header from '../components/Header'

const AddProduct = ({productData, productSetter}) => {
  return (
    <div className='home-page'>
        <Header/>
        <AddForm productData={productData} productSetter = {productSetter}/>
    </div>
  )
}

export default AddProduct