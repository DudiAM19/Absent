import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Styles from './styles';
import { Container } from 'components';

const FrontPage = ({navigation}) => {
    return (
        <Container backgroundColor="white">
            <Text style={Styles.welcomText}>Welcome</Text>
            <Text style={Styles.text2}>click next button to enter !</Text>
            <View style={Styles.imgSection}>
                <Image source={require('../../assets/picture/frontImage1.png')} style={Styles.frontImage} />
            </View>
            <View style={Styles.btnSection}>
                <TouchableOpacity style={Styles.btn} onPress={() => navigation.navigate('App')}>
                    <Text style={Styles.btnText}>Next</Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}

export default FrontPage;