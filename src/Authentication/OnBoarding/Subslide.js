import React from 'react'
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
const { width, height } = Dimensions.get("window");
import Animated from 'react-native-reanimated';
import Button from '../../components/Button';


export default function Subslide({ sublabel, description, x, last,onPress }) {

    return (
        <View style={styles.container}>
            <Text style={styles.sublabel}>{sublabel}</Text>
            <Text style={styles.description}> {description} </Text>
            <Button {...{onPress}} label={last ? "Comencemos!": 'Siguiente'} variant={last ? "primary": "default"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:44
    },
    sublabel:{
        fontWeight: 'bold',
        fontSize:24,
        color: '#0C0D34',
        textAlign: 'center',
        lineHeight:30,
        marginBottom:12
    },
    description: {
        fontSize:16,
        lineHeight:24,
        color: '#0C0D34',
        textAlign: 'center',
        marginBottom:40
    }
})
