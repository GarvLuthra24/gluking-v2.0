import {React, ReactDOM} from 'react'
import { useEffect , useState } from 'react';
import  './Product_cart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import url from '../node_url'






const Product = ({title , price , imageUrl , rating, id}) => {
  
  const notify = () => toast("Product Added Successfully !");
  const exist = () => toast("Product Already Exist in Cart !");
  const navigate = useNavigate();

  function setToken(userToken){
    sessionStorage.setItem('token' , JSON.stringify(userToken))
  }


  
  function getToken(){
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString)
    // console.log(userToken)
    return userToken;
  }


  return (
    


    
    <div className='Product_main'>
    <div className='Product'>
    <div className='image'>

{/* https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg */}
          <img className='product_image'src={imageUrl} alt='product image'></img>

        </div>
        <div className='product_info'>

          <p className='title'>
            {title}
          {/* The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback */}
          </p>
          <br></br>
          <br></br>

          <p className='price'>
              <small>₹</small>
              <strong>
                {price}
                {/* 1000 */}
                </strong>
          </p>

          <p className='rating'>

            {Array(rating)
            .fill()
            .map( (_,i) => (
              <p>⭐</p>
            )  )}
          </p>

            


        </div>

        <div className='Cart'>
        <div className='imput-hidden'>
              <input value={id} className='hidden-input'></input> 
            </div>
            <button className='addToCart' 
           
              onClick={ (ev) => {
                // console.log(ev)
                const target = ev.target.parentElement
                const stringValue = target.getElementsByClassName('hidden-input')
                // console.log(stringValue)
                const stringVal = stringValue[0].value
                // console.log(stringVal)

                const user = getToken();
                console.log(user);
         
                if(user){
                          fetch(url+`/addToCart?product_id=${stringVal}&user_id=${user.user_id}`)
                          .then(data => data.json())
                          .then((neofetch) => {
                            console.log(neofetch)
                            if(neofetch == 1){
                            console.log('product added to cart!')
                            // NotificationManager.success('Success','Product Added Successfully',3000)
                            // this.createNotification('info')
                            // console.log('hi')
                          
                            let val =  document.getElementsByClassName('cartItemCount')[0]
                            // console.log(val);
                            // console.log("hi")
                            val.innerHTML = Number(val.innerHTML) + 1;
                            notify();
                            }
                            else{
                              exist();
                            }

                  
                          })
              
                          .catch((err) => {console.log(err)})
              }
              else{
               
                navigate('/logon')
              }
              // React.createNotification('info')
              // notify()
              
                
              }   }
            >Add To Cart
            
            
            </button>
        </div>
        


    </div>

    
    </div>
    
  )
}

export default Product