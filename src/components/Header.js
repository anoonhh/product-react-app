
import { useState } from 'react'
import '../style.css'

const Header = () => {

    const [showSearch, setShowSearch] = useState(false)
    const [searchItem,setSearchItem] = useState('');
    const handleSearchToggle = ()=>{
        setShowSearch(prev => !prev )
    }

    const handleSearchInput= (e) => {
        e.preventDefault()
        setSearchItem(e.target.value)
    }
  return (
    <div>
        <div>
            <nav className=" container-fluid navbar navbar-light ">
               <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                  <i className="fa-solid fa-bag-shopping mx-3"></i>
                  <b>Product App</b>
                  </a>
                  <ul className="nav justify-content-end">
                      <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="/">Home</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/addproduct">Add Product</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="/"><button className='search-icon' onClick={handleSearchToggle} ><i class=" fa-solid fa-magnifying-glass"></i></button></a>
                      </li>
                  </ul>
                  {showSearch && (
                    <input
                    type="text"
                    placeholder="Search products..."
                    value={searchItem}
                    onChange={handleSearchInput}
                    className="form-control mx-2"
                    style={{ width: '200px', transition: '0.3s ease' }}
                    />
                )}
               </div>     
            </nav>
        </div>
    </div>
  )
}

export default Header