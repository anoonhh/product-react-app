import React from 'react'
import AddForm from '../components/AddForm'
import Header from '../components/Header'

const AddProduct = ({productData, productSetter}) => {
  return (
    <div>
        <Header/>
        <div className='pt-5 text-center '>
           <h1>Add Product</h1>
        </div>
        <AddForm productData={productData} productSetter = {productSetter}/>
    </div>
  )
}

export default AddProduct