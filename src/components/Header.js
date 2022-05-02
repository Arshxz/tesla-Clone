import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { useSelector } from 'react-redux'
import { selectCars } from '../redux/car/carSlice'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const cars = useSelector(selectCars)
    return (
        <Container>
            <a>
                <img src="/assets/images/logo.svg" alt="" />
            </a>
            <Menu>
                {cars && cars.map((car, index) => (
                    <a key={index} href="#">{car}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={() => setMenuOpen(true)}></CustomMenu>
            </RightMenu>
            <BurgerNav show={menuOpen}>
                <CloseWrapper>
                    <CustomClose onClick={() => setMenuOpen(false)} />
                </CloseWrapper>
                {cars && cars.map((car, index) => (
                    <li key={index}><a href="#">{car}</a></li>
                ))}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadstar</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    justify-content: space-between;
    z-index: 10;
`

const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index; 999;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);

        a{ 
            font-weight: 600
        }
    }
`


const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`