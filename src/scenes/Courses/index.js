import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { Container, Icon } from 'components';
import Styles from './Styles';

const DATA = [
    {
        courseName: ' Multimedia'
    },
    {
        courseName: ' Multimedia Dalam Jaringan'
    },
    {
        courseName: ' Metodologi Riset Teknologi'
    },
    {
        courseName: ' Testing Jaringan'
    },
    {
        courseName: ' Kepemimpinan'
    },
    {
        courseName: ' Pemodelan dan Simulasi'
    },
]

const Item = (props) => {
    return (
        <ScrollView>
            <View style={Styles.dataSection}>
                <Icon name="class" type="MaterialIcons" style={Styles.icon} />
                <Text style={Styles.textData}>{props.courseName}</Text>
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