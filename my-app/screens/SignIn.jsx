import { StyleSheet, Text, View, Pressable, TextInput, Image } from 'react-native'
import Star from '../assets/Star (1).png'

export default function SignIn() {
    return (
        <View style={styles.container}>
            <Image source={Star} style={{width: '100%', height: '100%'}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101020',
    }
});