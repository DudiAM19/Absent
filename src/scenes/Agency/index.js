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
                <View style={Styles.agencySince}>
                    <Text style={Styles.textSince}>Since :</Text>
                    <Text style={Styles.textDate}>1 Oktober 1986</Text>
                </View>
                <View style={Styles.Address}>
                    <Text style={Styles.textAddress}>Address :</Text>
                    <ScrollView style={{height: 150}}>
                        <Text style={Styles.textAddresKampus}>-  Kampus I Sedayu : Jl. Wates Km. 10 Yogyakarta 55753. Telp: 0274-6498212, 6498211, Fax. 0274-649821</Text>
                        <Text style={Styles.textAddresKampus}>-  Kampus II Gejayan : Jl. Jembatan Merah No. 84C Gejayan, Yogyakarta 55283. Telp: 0274-584922, 550703, 550704</Text>
                        <Text style={Styles.textAddresKampus}>-  Kampus III Ringroad Utara : Jl. Ring Road Utara, Ngropoh, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281</Text>
                    </ScrollView>
                </View>
            </View>
        </Container>
    )
}

export default Home;