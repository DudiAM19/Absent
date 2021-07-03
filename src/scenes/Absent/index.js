import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Container, Icon } from 'components';
import Styles from './styles';

const DATA = [
    {
        namaKelas: '1. 12D Morning Regular'
    },
    {
        namaKelas: '2. 12D Morning Regular'
    },
    {
        namaKelas: '3. 12D Morning Regular'
    },
    {
        namaKelas: '4. 12D Morning Regular'
    },
    {
        namaKelas: '5. 12D Morning Regular'
    },
    {
        namaKelas: '5. 12D Morning Regular'
    },
    {
        namaKelas: '5. 12D Morning Regular'
    },
]

const Item = (props) => {
    return (
        <ScrollView>
            <TouchableOpacity style={Styles.dataSection}>
                <Text style={Styles.textData}>{props.namaKelas}</Text>
                <Icon name="ios-chevron-forward-sharp" type="Ionicons" style={Styles.icon} />
            </TouchableOpacity>
        </ScrollView>
    )
}

const Absent = () => {
    return (
        <Container backgroundColor="white">
            <View style={Styles.header}>
                <Text style={Styles.textHeader}>Choose class</Text>
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

            <TouchableOpacity style={Styles.addBtn}>
                <Text style={Styles.add}>+</Text>
            </TouchableOpacity>
        </Container>
    )
}

export default Absent;