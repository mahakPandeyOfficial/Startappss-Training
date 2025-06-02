import React, { useState, useEffect } from 'react'
import {  useDispatch } from 'react-redux';
import { addToCart }  from '../redux/action';
import {useParams} from 'react-router'
import {NavLink} from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Product = () => {
 
    const { id } = useParams();
    const [product, setProduct ] = useState([]);
    const [loading, setLoading ] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addToCart(product));
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, [])
    

    const Loading = () => {
          return (
            <>
              <div className="col-md-6"> 
                 <SkeletonTheme baseColor="#E0E0E0" highlightColor="#F5F5F5"> 
                    <Skeleton height={400}  />
                    </SkeletonTheme>
              </div>
              <div className="col-md-6" style={{lineHeight: "2"}}>
              <SkeletonTheme baseColor="#E0E0E0" highlightColor="#F5F5F5">
                    <Skeleton height={50} weight={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} weight={150} />
                    <Skeleton height={50}  />
                    <Skeleton height={150}  />
                    <Skeleton height={50} weight={100} />
                    <Skeleton height={50} weight={100}  style={{marginLeft: "6"}}/>
                    </SkeletonTheme>   
              </div>
            </>
          )
    }

    //Show Product Component
    const ShowProduct = () => {
       return (
        
           <>
                <div className="col-md-6">
                    <img src={product.images} alt={product.title} height={"400px"} weight={"400px"} style={{borderRadius: "1rem", marginLeft: "50px"}}  />
                </div>

                <div className="col-md-6">
                    
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead fw-bold'>Rating {product.rating?.rate} <i className="fa fa-star"></i></p>
                    <h3 className='display-6 fw-bold my-4'>${product.price}</h3>
                    <p className='lead'>{product.description}</p>
                    <button className='btn btn-outline-dark px-3 py-2' onClick={() => {addProduct(product)}}>
                    <i class="fa fa-shopping-cart" aria-hidden="true" /> Add to Cart</button>
                    <NavLink to="/cart" className='btn btn-border-light btn-dark text-light ms-2 px-3 py-2'>
                    <i class="fa fa-money" aria-hidden="true"/> Go to Cart</NavLink>

                </div>
                </>
        
       )
    }
     
  return (
    <div>
      <div className="container mt-4 py-5" style={{ backgroundColor: "#FFF2EB", borderRadius: "1rem" }}>
        <div className="row py-4">
            { loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  )
}

export default Product
