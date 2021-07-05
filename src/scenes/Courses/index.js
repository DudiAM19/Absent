import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { Container } from 'components';
import Styles from './Styles';

const DATA = [
    {
        courseName: '1. Multimedia'
    },
    {
        courseName: '2. Multimedia Dalam Jaringan'
    },
    {
        courseName: '3. Metodologi Riset Teknologi'
    },
    {
        courseName: '4. Testing Jaringan'
    },
    {
        courseName: '5. Kepemimpinan'
    },
    {
        courseName: '5. Pemodelan dan Simulasi'
    },
]

const Item = (props) => {
    return (
        <ScrollView>
            <View style={Styles.dataSection}>
                <Text style={Styles.textData}>{props.courseName}</Text>
                {/* <Icon name="ios-chevron-forward-sharp" type="Ionicons" style={Styles.icon} /> */}
            </View>
        </ScrollView>
    )
}

const Courses = () => {
    return (
        <Container backgroundColor="white">
            <View style={Styles.header}>
                <Text style={Styles.textHeader}>Courses</Text>
            </View>
            <View style={Styles.contentSection}>
                <Text style={Styles.textContent}>Course list</Text>
            </View>
            <FlatList
                data={DATA}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Item
                        courseName={item.courseName}
                    />
                )}
            />
        </Container>
    )
}

export default Courses;