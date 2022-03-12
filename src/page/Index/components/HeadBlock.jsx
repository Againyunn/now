import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = styled.div`
  z-index: 2;

  div.container{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    
    margin-top: 10px;
    margin-bottom: 10px;
    display: 100%;
    align-items: center
  }

  div.item:nth-child(1){
    flex-basis: 33%;
    background-color: white;
    text-align: center;
  }
  div.item:nth-child(2){
    flex-basis: 33%;
    background-color: white;
    text-align: center;

    /*폰트*/
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;

    &:hover {
      background-color: #EEEEEE;
      color: black;
    }
  }
  div.item:nth-child(3){
    flex-basis: 33%;
    background-color: white;
    text-align: right;

    /*폰트*/
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;

    &:hover {
      background-color: #EEEEEE;
      color: black;
    }
  }

`

export default function HeadBlock() {
  return (
    <Header>
      <div className='container'>
      <div className="item"/>
      <div className="item">
        <Link to="/" style={{ textDecoration: 'none', color: "black" }}>
          토멘코 쇼핑
        </Link>
      </div>
      <div className="item">
        <Link to="/Cart" style={{ textDecoration: 'none', color: "black" }}>
          장바구니
        </Link>
      </div>
      </div>
    </Header>
  )
}
