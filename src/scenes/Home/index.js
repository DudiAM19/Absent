import React from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import { Container, Icon } from 'components';
import Styles from './styles';

const DATA = [
    {
        namaKelas: ' 12D Morning Regular'
    },
    {
        namaKelas: ' 12D Morning Regular'
    },
    {
        namaKelas: ' 12D Morning Regular'
    },
    {
        namaKelas: ' 12D Morning Regular'
    },
    {
        namaKelas: ' 12D Morning Regular'
    },
]

const Item = (props) => {
    return (
        <ScrollView>
            <View style={Styles.dataSection}>
                <Icon name="google-classroom" type="MaterialCommunityIcons" style={Styles.icon}/>
                <Text style={Styles.textData}>{props.namaKelas}</Text>
            </View>
        </ScrollView>
    )
}

const Home = () => {
    return (
        <Container backgroundColor="white">
            <View style={Styles.Header}>
                <Text style={Styles.textHeader}>Welcome to the Android-Based Absence Application at Mercu Buana University Yogyakarta</Text>
                <View style={Styles.logoSection}>
                    <Image style={Styles.logo} source={require('../../assets/picture/logo.png')} />
                </View>
            </View>
            <View style={Styles.contentSection}>
                <Text style={Styles.textContent}>Class list</Text>
            </View>
            <FlatList
                data={DATA}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Item
                        namaKelas={item.namaKelas}
                    />
                )}
            />
        </Container>
    )
}

export default Home;