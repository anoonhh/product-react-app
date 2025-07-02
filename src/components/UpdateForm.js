import { useState,useEffect } from 'react'
import api from '../api'
import { useNavigate, useParams } from 'react-router-dom'
import '../style.css'

const UpdateForm = ({productData, productSetter}) => {
     console.log(productData[0],"product from backend")
     const [data , setData] =useState({
      title: '',
      brand: '',
      price: 0,
      stock: 0,
      description: '',
      thumbnail: ''
     })
      const {id} = useParams()
      console.log(" updating id of ", id)

      useEffect(() => {
          api.get(`/${id}`)
          .then((res)=>{
              setData(res.data
                // .title, res.data.brand, res.data.price, res.data.stock, res.data.description, res.data.thumbnail
              )
          })
          .catch((err)=>{
              console.error("Error detected",err)
          })
      },[id])

      const handleChange =(e) =>{
        setData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value
        }))
      }
      const navigate = useNavigate()


    

    // const handleSubmit = (e) =>{
    //     e.preventDefault();
        
    //     // alert("Product updated successfully")
    //     // navigate('/update')
    //     // productSetter([...productData,data])

    //     api.patch(`/${id}`,data)
    //     .then(() => {
    //       alert("Product updated successfully")
    //       navigate('/update')
    //       productSetter([...productData,data])
    //     } )
    //     .catch(() => alert("Submission failed"))

    // }



    const handleSubmit = (e) => {
    e.preventDefault();

      const newProduct = {
        title: data.title,
        brand: data.brand,
        price: Number(data.price),
        stock: Number(data.stock),
        description: data.description,
        thumbnail:data.thumbnail
      };

      api.patch(`/${id}`, newProduct)
        .then((res) => {
          alert("Product updated successfully");
          console.log("Updated:", res.newProduct);
          navigate(`/`);
          productSetter([...productData.map((p) => p.id === res.data.id ? newProduct : p)]);
        })
        .catch((err) => {
          console.error("PATCH error:", err.response?.data || err.message);
          alert("Update failed");
        });
      };



  return (
    <div>
        <div className='container my-5 '>
          <div className='col-md-6 mx-auto card p-5 shadow-lg ' style={{borderRadius:'10px', border:'transparent'}}>
            <div className="p-5 text-center">
              <h1>Update Form</h1>
            </div>
            <form onSubmit={handleSubmit} >
                <div className='input-field mb-3'>
                     <label htmlFor='product-title'>Product Title</label><br/>
                     <input  name='title' value={data.title} onChange={handleChange} type='text' id='product-title' placeholder='Product Title' className='shadow w-100 '/>
                </div>
                <div className='input-field mb-3'>
                    <label htmlFor='product-brand'>Brand</label><br/>
                    <input name='brand' value={data.brand} onChange={handleChange} type='text' id='product-brand' placeholder='Brand' className=' shadow w-100 ' />
               </div> 
                <div className='input-field mb-3'>
                    <label htmlFor='product-price'>Price</label>
                    <input name='price' value={data.price} onChange={handleChange} type='number' id='product-price' placeholder='Price' className='shadow w-100'/>
                </div>
                <div className='input-field mb-3'>
                    <label htmlFor='product-stock'>Stock</label>
                    <input name='stock' value={data.stock} onChange={handleChange} type='number' id='product-stock' placeholder='Stock' className='shadow w-100 '/>
                </div>
                <div className='input-field mb-3'>
                    <label htmlFor='product-des'>Description</label>
                    <textarea name='description' value={data.description} onChange={handleChange} type='' id='product-des' placeholder='Description' className='shadow w-100 '/>
                </div>
                <div className='input-field mb-3'>
                    <label htmlFor='product-img'>Image</label>
                      <input name='thumbnail' value={data.thumbnail} onChange={handleChange} type='text' id='product-img'  className='shadow w-100 '/>
                </div>
                <button type='submit' className='button-btn d-flex mx-auto'  >Update Product</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default UpdateForm