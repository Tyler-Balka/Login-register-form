import { View, Text, TextInput, Pressable, Image, StyleSheet } from 'react-native'
import Star from '../assets/Star (1).png'
import logo from '../assets/Vector (1).png'
import lock from '../assets/lock.png'
import mail from '../assets/mail.png'
import user from '../assets/user-circle.png'
import calendar from '../assets/calendar-due.png'
import calendar2 from '../assets/calendar.png'
import eyeOff from '../assets/eye-off (1).png'
import eyeOpen from '../assets/eye-open.png'
import phone from '../assets/phone.png'

export default function SignUp( {navigation} ) {
    return (
        <View style={styles.container}>
            <Image source={Star} style={{width: '100%', height: '100%'}}/>
            <View style={styles.innerContainer}>
                <Image source={logo} style={{width: 34, height: 34, marginBottom: 16}}/>
                <Text style={{color: 'white', fontSize: 32, fontWeight: 'bold', marginBottom: 12}}>Create Account</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: 'white'}}>Already have an account?  </Text>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Text style={{color: '#2868E8', fontWeight: 'bold'}}>Login</Text>
                    </Pressable>
                </View>
                <View style={{backgroundColor: 'white', borderRadius: 8, paddingHorizontal: 12, marginTop: 32, marginBottom: 24, width: '100%'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <Image source={user} style={{width: 16, height: 16}}/>
                        <TextInput placeholder="Username" style={{flex: 1, marginLeft: 8}}></TextInput>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <Image source={mail} style={{width: 16, height: 16}}/>
                        <TextInput placeholder="Email" style={{flex: 1, marginLeft: 8}}></TextInput>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <Image source={calendar} style={{width: 16, height: 16}}/>
                        <TextInput placeholder="Birthday" style={{flex: 1, marginLeft: 8}}></TextInput>
                        <Image source={calendar2} style={{width: 16, height: 16}}/>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <Image source={phone} style={{width: 16, height: 16}}/>
                        <TextInput placeholder="Phone Number" style={{flex: 1, marginLeft: 8}}></TextInput>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <Image source={lock} style={{width: 16, height: 16}}/>
                        <TextInput placeholder="Password" secureTextEntry={true} style={{flex: 1, marginLeft: 8}}></TextInput>
                        <Image source={eyeOff} style={{width: 16, height: 16}}/>
                    </View>
                </View>
                <Pressable style={{backgroundColor: '#2868E8', paddingVertical: 12, paddingHorizontal: 148, borderRadius: 8,}}>
                    <Text style={{color: 'white'}}>Register</Text>
                </Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101020'
    },
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '20%',
        left: '6.5%',
        right: '6.5%',
    }
});