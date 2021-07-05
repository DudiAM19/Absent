import React from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import { Container, Icon } from 'components';
import Styles from './styles';

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
            <TouchableOpacity style={Styles.dataSection} onPress={props.onPress}>
                <Text style={Styles.textData}>{props.courseName}</Text>
                <Icon name="ios-chevron-forward-sharp" type="Ionicons" style={Styles.icon} />
            </TouchableOpacity>
        </ScrollView>
    )
}

const ChooseCourse = ({navigation}) => {
    return (
        <Container backgroundColor="white">
            <View style={Styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="ios-chevron-back" type="Ionicons" style={Styles.iconBack} />
                </TouchableOpacity>
                <Text style={Styles.textHeader}>Choose Course</Text>
            </View>
            <View style={Styles.contentSection}>
                <Text style={Styles.textContent}>Class list</Text>
            </View>
            <FlatList
                data={DATA}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Item
                        courseName={item.courseName}
                        onPress={() => navigation.navigate('StudentList')}
                    />
                )}
            />
        </Container>

    )
}

export default ChooseCourse;