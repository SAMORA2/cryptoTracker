import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from '../../GlobalStyle';
import Coins from '../Coins/Coins';
import {
    Title,
    Form,
    FormInput,
    SearchNav,

} from './SearchCoin.elements';

function SearchCoin() {

    const [search, setSearch] = useState('')
    const [coins, setCoins] = useState([])

    useEffect(() => {
        
        axios.get(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
        ).then(res => {
            setCoins(res.data)
            console.log(res.data);
        }).catch(err => console.log(err))

    }, [])

    const inputChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value);
    }

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <>

            <Container>
                <SearchNav>
                    <Title>💹CRYPTO-CURRENCY💹 </Title>
                    <Form>
                        <FormInput type='text'
                            placeholder='Search Coin'
                            onChange={inputChange}
                    
                        />

                    </Form>
                </SearchNav>

                {filteredCoins.map(coin => {
                    return (
                        <Coins
                            key={coin.id}
                            name={coin.name}
                            price={coin.current_price}
                            symbol={coin.symbol}
                            volume={coin.market_cap}
                            image={coin.image}
                            priceChange={coin.price_change_percentage_24h}
                        />
                    );
                })}

            </Container>

        </>
    )
}

export default SearchCoin
