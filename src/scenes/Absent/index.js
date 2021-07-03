import React from 'react';
import { View, Text } from 'react-native';
import { Container } from 'components';
import Styles from './styles';

const Absent = () => {
    return(
        <Container backgroundColor="white">
            <View style={Styles.header}>
                 <Text style={Styles.textHeader}>Choose class</Text>
            </View>
        </Container>
    )
}

export default Absent;