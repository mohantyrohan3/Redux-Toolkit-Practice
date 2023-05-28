import React, { useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { useSelector,useDispatch } from 'react-redux'
import { fetchData } from '../store/slices/productSlice';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import { add } from '../store/slices/cartSlice';




export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  },[]);

  const products = useSelector(state => state.product.data);
  const status = useSelector(state => state.product.status);
  
  const handleClick = (product)=>{
    dispatch(add(product));
  }



  const renderList = products.map((product) =>{
    return(
      <MDBCol key={product.id}>
      <MDBCard className='h-100' alignment='center'>
          <MDBCardImage
            src={product.image}
            alt='...'
            position='top'
            style={{maxHeight:'300px'}}
          />
          <MDBCardBody>
            <MDBCardTitle>{product.title}</MDBCardTitle>
            <MDBCardTitle>PRICE :  $ {product.price}</MDBCardTitle>
            <MDBBtn onClick={()=> handleClick(product)}>Add to Cart</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
    )
  })






  return (
    <Container>
      {status === 'loading'? <h1>Loading...</h1>:(
       <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        {renderList}
        </MDBRow>
      )}
    </Container>
  )
}
