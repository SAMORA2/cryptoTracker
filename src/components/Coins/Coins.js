import React from 'react'
import { Container } from '../../GlobalStyle'
import {
    CoinData,
    CoinImg,
    CoinInfo,
    CoinRow,
    CoinChange,
    SubHeading
} from './Coins.elements'


const Coins = ({
    image,
    name,
    symbol,
    price,
    volume,
    priceChange
}) => {
    return (
        <Container>
            <CoinRow>
                <CoinInfo>
                    <CoinImg src={image} />
                    <SubHeading>{name}</SubHeading>
                    <SubHeading>{symbol.toUpperCase()}</SubHeading>
                </CoinInfo>
                <CoinData>
                    <SubHeading>{price} {' '} $</SubHeading>
                    <SubHeading>{volume}💰</SubHeading>
                    {priceChange > 0 ? (
                        <CoinChange asc>{priceChange}</CoinChange>
                    ) : (
                            <CoinChange>{priceChange}</CoinChange>
                        )}
                </CoinData>
            </CoinRow>
        </Container>
    )
}

export default Coins
