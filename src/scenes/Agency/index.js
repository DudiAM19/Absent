import React from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import { Container } from 'components';
import Styles from './Styles';



const Home = () => {
    return (
        <Container backgroundColor="white">
            <View style={Styles.Header}>
                <Text style={Styles.textHeader}>Agency</Text>
                <View style={Styles.logoSection}>
                    <Image style={Styles.logo} source={require('../../assets/picture/logo.png')} />
                </View>
            </View>
            <View style={Styles.contentSection}>
                <View style={Styles.agencyProfile}>
                    <Text style={Styles.textProfile}>Profile :</Text>
                    <Text style={Styles.textMercu}>Mercu Buana University Yogyakarta is a private university in Yogyakarta, Indonesia.</Text>
                </View>
            </View>
        </Container>
    )
}

export default Home;