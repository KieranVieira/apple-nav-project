import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SubNavContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 92px;
    padding: 12px 0;
    background-color: ${props => props.dark ? '#141414' : '#F6F6F6'};
    div{
        display: flex;
        margin-top: 1px;
        a{
            text-decoration: none;
            color: ${props => props.dark ? 'white' : 'black'};
            &:hover{
            color: #0070c9;
            }
        }
    }
    .sub-active{
        color: #0070c9;
    }
`; 

const Product = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: -9px 20px 0 20px;
    h2{
        margin-top: 2px;
        font-size: 11px;
        font-weight: 500;
    }
    figure{
        background-image: url(${props=>props.icon});
        width: 46px;
        height: 54px;
        background-size: 46px 54px;
        background-repeat: no-repeat;
        margin: 0 auto;
    }
    p{
        height: 15px;
        font-size: 9px;
        margin: unset;
        margin-top: -9px;
        color: #ef5602;
    }
`;   

const SubNav = props => {
    const productLine = props.match.params.productLine;
    return(
        <SubNavContainer dark={productLine == 'iphone' || productLine == 'tv' ? true : false}>
            <div>
            {props.products[productLine].map(product => {
                return(
                    <NavLink to={`/${productLine}/${product.path}`} activeClassName='sub-active'>
                        <Product icon={product.icon}>
                            <figure></figure>
                            <h2>{product.name}</h2>
                            <p>{product.subName}</p>
                        </Product>
                    </NavLink>
                )
            })} 
            </div>
        </SubNavContainer>
    )
}

export default SubNav;