import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import { useMediaQuery } from 'react-responsive';

const ProductDetail = () => {
  const mobileView = useMediaQuery({ maxWidth: 767 });
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/Klomachenko/hnm-shopping-mall/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
    console.log(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      {mobileView ? (
        <div className='product-detail-mobileview'>
          <Row>
            <Col className='product-img'>
              <img src={product?.img} alt='' />
            </Col>
            <Col>
              <div>{product?.title}</div>
              <div>W {product?.price}</div>
              <div>{product?.choice === true ? 'Conscious Choice' : ''}</div>
              <DropdownButton id='dropdown-basic-button' title='사이즈 선택'>
                <Dropdown.Item href='#/action-1'>S</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>M</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>L</Dropdown.Item>
              </DropdownButton>
              <Button variant='secondary' size='lg'>
                추가
              </Button>
            </Col>
          </Row>
        </div>
      ) : (
        <Row>
          <Col className='product-img'>
            <img src={product?.img} alt='' />
          </Col>
          <Col>
            <div>{product?.title}</div>
            <div>W {product?.price}</div>
            <div>{product?.choice === true ? 'Conscious Choice' : ''}</div>
            <DropdownButton id='dropdown-basic-button' title='사이즈 선택'>
              <Dropdown.Item href='#/action-1'>S</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>M</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>L</Dropdown.Item>
            </DropdownButton>
            <Button variant='secondary' size='lg'>
              추가
            </Button>
          </Col>
        </Row>
      )}
      {/* <Row>
        <Col className='product-img'>
          <img src={product?.img} alt='' />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>W {product?.price}</div>
          <div>{product?.choice === true ? 'Conscious Choice' : ''}</div>
          <DropdownButton id='dropdown-basic-button' title='사이즈 선택'>
            <Dropdown.Item href='#/action-1'>S</Dropdown.Item>
            <Dropdown.Item href='#/action-2'>M</Dropdown.Item>
            <Dropdown.Item href='#/action-3'>L</Dropdown.Item>
          </DropdownButton>
          <Button variant='secondary' size='lg'>
            추가
          </Button>
        </Col>
      </Row> */}
    </Container>
  );
};

export default ProductDetail;
