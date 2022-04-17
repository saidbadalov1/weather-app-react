function App() {

  return (
    <div>
      <div className="container">
        <div className="navbar">
          <img className="logo-icon" src="https://i.pinimg.com/originals/33/e6/3d/33e63d5adb0da6b303a83901c8e8463a.png" alt="" />
          <nav>
            <ul id="menuList">
                <li><a className="active" href="">NEW</a></li>
                <li><a href="">PRODUCTS</a></li>
                <li><a href="">CART</a></li>
            </ul>
          </nav>
          <img className="menu-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"  alt="" />
        </div>
        
        <hr className="line"/>
        <h1 className="top-text">New Arrival</h1>
        <div className="row">
          <div className="col-1">

            <div className="images">
            <img className="nike-product-icon" src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ea4d0764-a96c-48d5-9d02-aaa5f4106b89/air-zoom-pegasus-39-road-running-shoes-l68zCm.png" alt="" />
            <img className="nike-product-icon" src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6b5dc91c-97f3-44e3-98d4-5ced2e54000a/air-zoom-pegasus-39-road-running-shoes-l68zCm.png" alt="" />
            <img className="nike-product-icon" src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5074fbc8-650c-4f44-b51d-b43f32298079/air-zoom-pegasus-39-road-running-shoes-l68zCm.png" alt="" />
            <img className="nike-product-icon" src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/db33760b-393e-4401-bc4b-0973d357f1e8/air-zoom-pegasus-39-road-running-shoes-l68zCm.png" alt="" />
            </div>

            <h2>Nike Air Zoom Pegasus 39</h2>
            <p>Introducing the new Nike Air Zoom Pegasus 39, featuring the comfort and consistency from the shoe runners know and love, plus our latest innovations designed.</p>
            <h3>£109.95</h3>
            <button className="buy-button">Add to cart</button>
          </div>
          <div className="col-2">
              <h2>You Might Also Like</h2>
              <div className="also-like">

                <div className="products">
                <img className="also-like-image" src="https://static.nike.com/a/images/t_PDP_864_v1/3b373d26-3c45-4f0e-8c4a-b4d3d4d7d5be/air-zoom-structure-24-road-running-shoes-DhNSTS.png" alt="" />
                <p className="also-like-text">Nike Air Zoom Structure 24</p>
                </div>
               
                <div className="products">
                <img className="also-like-image" src="https://static.nike.com/a/images/t_PDP_864_v1/3b7c2ec0-c3e3-4954-8b54-4912aeb69c38/air-zoom-vomero-16-road-running-shoes-6GDWZ8.png" alt="" />
                <p className="also-like-text">Nike Air Zoom Vomero 16</p>
                </div>

                <div className="products">
                <img className="also-like-image" src="https://static.nike.com/a/images/t_PDP_864_v1/5e70948a-c3f3-48e1-9e95-76a6c353c393/react-infinity-run-flyknit-3-road-running-shoes-10zH4q.png" alt="" />
                <p className="also-like-text">Nike Air Zoom Iero 30</p>
                </div>
  
              </div>
          </div>
          
        </div>
      </div>

    </div>


  );
}

export default App;
