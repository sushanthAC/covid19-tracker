import React from 'react';
import styles from './App.module.css';

import {Cards, Charts, CountryPicker } from './components';
import { fetchData } from './api';
class App extends React.Component {
    state = {
        data:{},
        country:""
    }

    handleChangeCountry = async (country) => { 
        const featchedData = await fetchData(country);
        console.log(featchedData);
        this.setState({data:featchedData, country:country});
    }
    async componentDidMount() {
        const featchedData = await fetchData();
        this.setState({data:featchedData});
    }
    render() {
        const {data, country} = this.state;
        return(
            <div className={styles.container}>
                <img className={styles.image} src="https://i.ibb.co/7QpKsCX/image.png" alt="Covid-19"/>
                <Cards data={data} />
                <CountryPicker handleChangeCountry ={this.handleChangeCountry} />
                <Charts data={data} country={country}/>
            </div>
        );
    }
}

export default App;