import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, Icon, Input } from 'components';
import Styles from './styles';

const AddClass = ({ navigation }) => {
    return (
        <Container backgroundColor="white">
            <View style={Styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="ios-chevron-back" type="Ionicons" style={Styles.iconBack} />
                </TouchableOpacity>
                <Text style={Styles.textHeader}>Add Class</Text>
            </View>
            <View style={Styles.inputSection}>
                <Input
                    title="Class Name :"
                    mode="regular"
                    placeholder="enter class name here"
                />
                <Input 
                    title="Class Desc :"
                    mode="regular"
                    placeholder="enter class description here"
                    style={Styles.input}
                />
                <TouchableOpacity style={Styles.btn}>
                    <Text style={Styles.textBtn}>Add Class</Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}

export default AddClass;