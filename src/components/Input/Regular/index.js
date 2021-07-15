import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Icon } from "components";
import styles from "./styles";
import { Colors } from "styles";

const Default = (props) => {
    const [isFocused, setFocused] = useState(false);
    return (
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.container(props.radius)}>
                <TextInput
                    {...props}
                    style={styles.input}
                    placeholderTextColor={isFocused ? Colors.BLACK : Colors.BLACK_LIGHT}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
            </View>
        </View>
    )
}
Default.defaultProps = {
    radius: 75,
    iconName: ''
}
export default Default;