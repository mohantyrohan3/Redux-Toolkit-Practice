import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/esm/Container'
import { remove } from '../store/slices/cartSlice';

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  console.log(cart);

  const handleClick = (id)=>{
    dispatch(remove(id));
  }

  const renderList = cart.map((product) =>{
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
            <MDBBtn onClick={()=> handleClick(product.id)}>Remove from Cart</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
    )
  })





  return (
    <Container>
     
       <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        {renderList}
        </MDBRow>
    </Container>
  )
}
