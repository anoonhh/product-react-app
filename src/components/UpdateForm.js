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
    const navigate = useNavigate()
      console.log(" updating id of ", id)

      useEffect(() => {

         const localProduct = productData.find((item) => item.id.toString() === id);

    if (localProduct) {
      setData(localProduct);
      console.log("Loaded product from local data:", localProduct);
    } else {

      api.get(`/${id}`)
      .then((res)=>{
          setData(res.data
            // .title, res.data.brand, res.data.price, res.data.stock, res.data.description, res.data.thumbnail
          )
      })
      .catch((err)=>{
          console.error("Error detected",err)
      })
    }
      },[id, productData, navigate])

      const handleChange =(e) =>{
        setData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value
        }))
      } 


  //   const handleSubmit = (e) => {
  //   e.preventDefault();

  //    const updatedProduct = {
  //   ...data,
  //   price: Number(data.price),
  //   stock: Number(data.stock)
  //  }

  //  const isDummyProduct = parseInt(id) <= 100;

  //    if (isDummyProduct) {
  //     const updatedList = productData.map((p) =>
  //       p.id.toString() === id ? updatedProduct : p
  //     );

  //     productSetter(updatedList);
  //     alert("Product updated successfully ");
  //     navigate('/');

  //   } else{

  //   api.patch(`/${id}`, updatedProduct)
  //     .then((res) => {
  //       alert("Product updated successfully");

  //       const updatedFromBackend = res.data;

  //       // Check whether product exists in current list
  //       const exists = productData.some((p) => p.id.toString() === updatedFromBackend.id.toString());

  //       const updatedList = exists
  //           ? productData.map((p) =>
  //               p.id.toString() === updatedFromBackend.id.toString() ? updatedFromBackend : p
  //             )
  //           : [...productData, updatedFromBackend];

  //         productSetter(updatedList);
  //             navigate(`/`);
  //             // productSetter([...productData.map((p) => p.id === res.data.id ? newProduct : p)]);
  //       })
  //     .catch((err) => {
  //       console.error("PATCH error:", err.response?.data || err.message);
  //       alert("Update failed");
  //     });
  //   }

  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      ...data,
      price: Number(data.price),
      stock: Number(data.stock),
    };

    const isDummyProduct = parseInt(id) <= 100;

    if (isDummyProduct) {
      // Update locally for dummy products
      const updatedList = productData.map((p) =>
        p.id.toString() === id ? updatedProduct : p
      );

      productSetter(updatedList);
      alert("Product updated successfully ");
      navigate('/');
    } else {
      // Custom/local product, not handled by DummyJSON API, update it locally

      const updatedList = productData.map((p) =>
        p.id.toString() === id ? updatedProduct : p
      );

      productSetter(updatedList);
      alert("Product updated locally (custom product)");
      navigate('/');
    }
};



  return (
    <div>
        <div className='container mt-5 pb-5'>
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