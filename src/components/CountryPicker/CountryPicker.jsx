import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl, StylesProvider} from '@material-ui/core';

import {fetchCountries} from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({handleChangeCountry}) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            setCountries(await fetchCountries());
        } 
        getCountries(); 
        console.log(countries);
    },[]);

    if (countries.length) { 
        return(
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e) => handleChangeCountry(e.target.value)} >
                    <option value=""></option>
                    {countries.map((country) => (
                        <option value={country.name} key={country.iso3}>{country.name}</option>
                    ))}
                </NativeSelect>
            </FormControl>
        );
    }else {
        return null;
    }
}

export default CountryPicker;