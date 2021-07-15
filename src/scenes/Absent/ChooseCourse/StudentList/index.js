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

const PRESENT = ['present','skip','permission','sick']

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
                {PRESENT.map((item, index) => (
                    <View style={Styles.checkSection} key={index}>
                        <Checkbox
                            status={checked === index ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(index);
                            }}
                            color='#7E57C2'
                            unchecked
                        />
                    </View>
                ))}
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
            <TouchableOpacity style={Styles.addBtn} onPress={() => navigation.navigate('AddStudent')}>
                <Text style={Styles.textbtn}>add student</Text>
            </TouchableOpacity>
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