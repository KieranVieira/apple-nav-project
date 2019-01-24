import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const TopNavContainer = styled.nav`
    height: 44px;
    width: 100%;
    background-color: rgba(45,45,45,0.98);
    .inner-nav-container{
        max-width:980px;
        height: 40px;
        padding: 0 22px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        a{
            font-size: 14px;
            text-decoration: none;
            color: white;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            padding: 0 10px;
            &:hover{
                color: lightgray;
                transition: .2s;
            }
        }
        .fa-apple{
            font-size: 20px;
        }
        i{
            color: white;
            &:hover{
                color: #B3B3B3;
                transition: .2s;
            }
        }
        .active{
            color: #B3B3B3;
        }
    }
`;

const TopNav = props => {
    return(
        <TopNavContainer>
            <div className="inner-nav-container">
                <NavLink exact to="/"><i className="fab fa-apple" /></NavLink>
                <NavLink to="/mac">Mac</NavLink>
                <NavLink to="/ipad">iPad</NavLink>
                <NavLink to="/iphone">iPhone</NavLink>
                <NavLink to="/watch">Watch</NavLink>
                <NavLink to="/tv">TV</NavLink>
                <NavLink to="/music">Music</NavLink>
                <NavLink exact to="/help/support">Support</NavLink>
                <NavLink exact to="/"><i className="fas fa-search" /></NavLink>
                <NavLink exact to="/"><i className="fas fa-shopping-basket" /></NavLink>
            </div>
        </TopNavContainer>
    )
}

export default TopNav;