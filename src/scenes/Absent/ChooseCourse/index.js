import React from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import { Container, Icon } from 'components';
import Styles from './styles';

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
            <TouchableOpacity style={Styles.dataSection} onPress={props.onPress}>
                <Icon name="class" type="MaterialIcons" style={Styles.icon} />
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