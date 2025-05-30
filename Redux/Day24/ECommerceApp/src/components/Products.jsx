import React, { useState, useEffect } from 'react';

const Products = () => {
   
    const [ data, setData ] = useState([]);
    const [filter, setFilter ] = useState(data);
    const [ loading, setLoading ] = useState(false);

    let componentMounted = true;

    useEffect(() => {
         

        //async function created here
        const getProducts = async () => {    
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");     //here we have used fake store api which will fetch the data 

            if(componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }

            return () => {
                componentMounted = false;
            }
        }

        getProducts();    //fuunction called here
    }, [])

    {/** LOADING COMPONENT CODE HERE */}
    const Loading = () => {
        
        return (
            <>
               Loading....
            </>
        )
    }

    {/** SHOW PRODUCTS COMPOENET HERE */}
    const ShowProducts = () =>{

        return (
            <>
            <div className="buttons">
            <button className="btn btn-outline-dark me-2">All</button>
            <button className="btn btn-outline-dark me-2">Men's Clothing</button>
            <button className="btn btn-outline-dark me-2">Women's Clothing</button>
            <button className="btn btn-outline-dark me-2">Kids Collections</button>
            <button className="btn btn-outline-dark me-2">Footwares</button>
            <button className="btn btn-outline-dark me-2">Jewelery</button>
            <button className="btn btn-outline-dark me-2">Watch</button>
            <button className="btn btn-outline-dark me-2">Mobiles</button>
            <button className="btn btn-outline-dark me-2">Electronic</button>

        </div>
        </>

        )
        
    }
    

  return (
    <div>
      <div className="container my-5 py-5"   >
        <div className="row mb-5">
            <div className="col-12 display-6 fw-bolder text-center">
                <h1>Latest Products</h1>
                <hr />
            </div>
            <div className="row justify-content-center">
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Products
