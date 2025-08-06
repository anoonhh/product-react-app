
// import { useState } from 'react'
// import '../style.css'

// const Header = () => {

//     // const [showSearch, setShowSearch] = useState(false)
//     // const [searchItem,setSearchItem] = useState('');
//     // const handleSearchToggle = ()=>{
//     //     setShowSearch(prev => !prev )
//     // }

//     // const handleSearchInput= (e) => {
//     //     e.preventDefault()
//     //     setSearchItem(e.target.value)
//     // }
//   return (
//     <div>
//         <div>
//             <nav className=" container-fluid navbar navbar-light ">
//                <div className="container-fluid " style={{padding: '13px'}}>
//                   <a className="navbar-brand" href="#">
//                   <i className="fa-solid fa-bag-shopping mx-3"></i>
//                   <b>Product App</b>
//                   </a>
//                   <ul className="nav justify-content-end">
//                       <li className="nav-item">
//                           <a className="nav-link active" aria-current="page" href="/">Home</a>
//                       </li>
//                       <li className="nav-item">
//                           <a className="nav-link" href="/addproduct">Add Product</a>
//                       </li>
//                   </ul>
//                </div>     
//             </nav>
//         </div>
//     </div>
//   )
// }

// export default Header






import { useState } from 'react'
import '../style.css'

const Header = () => {
  return (
    <header className="shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light  py-3 px-4">
        <div className="container-fluid">

          {/* Logo / Brand */}
          <a className="navbar-brand d-flex align-items-center gap-2" href="/">
            <i className="fa-solid fa-bag-shopping fa-lg text-primary"></i>
            <span className="fw-bold fs-5">Product App</span>
          </a>

          {/* Navigation Links */}
          <div className="d-flex ms-auto">
            <ul className="navbar-nav d-flex flex-row gap-3 align-items-center">
              <li className="nav-item">
                <a className="nav-link fw-medium text-dark" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium text-dark" href="/addproduct">
                  Add Product
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
