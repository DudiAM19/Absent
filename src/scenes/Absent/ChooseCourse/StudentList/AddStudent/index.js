import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Container, Icon, Input } from 'components';
import Styles from './styles';

const AddStudent = ({navigation}) => {
    return (
        <Container backgroundColor="white">
            <View style={Styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="ios-chevron-back" type="Ionicons" style={Styles.iconBack} />
                </TouchableOpacity>
                <Text style={Styles.textHeader}>Add Student</Text>
            </View>
            <TouchableOpacity style={Styles.inputImage}>
                <Image source={require('../../../../../assets/picture/adIM.jpg')} style={Styles.img} />
            </TouchableOpacity>
            <View style={Styles.inputSection}>
                <Input
                    title="Student Name :"
                    mode="regular"
                    placeholder="enter student name here"
                />
                <Input
                    title="NIM :"
                    mode="regular"
                    placeholder="enter NIM here"
                    style={Styles.input}
                />
                <TouchableOpacity style={Styles.btn}>
                    <Text style={Styles.textBtn}>Add Student</Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}

export default AddStudent;