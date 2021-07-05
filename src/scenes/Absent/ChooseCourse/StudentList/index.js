import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Container, Icon } from 'components';
import Styles from './styles';
import { Checkbox } from 'react-native-paper';

const DATA = [
    {
        name: 'Budi',
        nim: '14509209'
    },
    {
        name: 'Budi',
        nim: '14509209'
    },
    {
        name: 'Budi',
        nim: '14509209'
    },
    {
        name: 'Budi',
        nim: '14509209'
    },
    {
        name: 'Budi',
        nim: '14509209'
    },
    {
        name: 'Budi',
        nim: '14509209'
    },
    {
        name: 'Budi',
        nim: '14509209'
    },
    {
        name: 'Budi',
        nim: '14509209'
    },
    {
        name: 'Budi',
        nim: '14509209'
    },
]


const Item = (props) => {
    const [checked, setChecked] = useState(false)

    return (
        <ScrollView>
            <View style={Styles.listSection}>
                <View style={Styles.imgSection}>
                    <Icon name="ios-person" type="Ionicons" style={Styles.iconImage} />
                </View>
                <View style={Styles.nameSection}>
                    <Text style={Styles.name}>{props.name}</Text>
                    <Text style={Styles.nim}>{props.nim}</Text>
                </View>
                <View style={Styles.checkSection}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                        color='#7E57C2'
                        unchecked
                    />
                </View>
                <View style={Styles.checkSection}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                        color='#7E57C2'
                    />
                </View>
                <View style={Styles.checkSection}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                        color='#7E57C2'
                    />
                </View>
                <View style={Styles.checkSection}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                        color='#7E57C2'
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const StudentList = ({navigation}) => {
    return (
        <Container backgroundColor="white">
            <View style={Styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="ios-chevron-back" type="Ionicons" style={Styles.iconBack} />
                </TouchableOpacity>
                <Text style={Styles.textHeader}>Student Absent List</Text>
            </View>
            <View style={Styles.desc}>
                <Text style={Styles.textName}>Name</Text>
                <Text style={Styles.text}>Present</Text>
                <Text style={Styles.text}>Skip</Text>
                <Text style={Styles.text}>Permission</Text>
                <Text style={Styles.text}>Sick</Text>
            </View>
            <FlatList
                data={DATA}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Item
                        name={item.name}
                        nim={item.nim}
                    />
                )}
            />
        </Container>
    )
}

export default StudentList;