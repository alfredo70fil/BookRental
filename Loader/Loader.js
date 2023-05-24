import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoaderImg from '../assets/book.png';

const Loader = () => {
    return(
        <div className='loader flex flex-c'>
            <img src= {LoaderImg} alt = "loader" />
        </div>
    )
}

const styles = StyleSheet.create({
  loader: {
    paddingVertical: 64, // equivalente a 4rem
  },
  loaderImage: {
    width: 120,
  },
});