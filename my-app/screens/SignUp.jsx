import { View, Text, TextInput, Pressable, Image, StyleSheet } from 'react-native'
import { useState, useRef, useEffect } from 'react'
import { Alert } from 'react-native'
import Star from '../assets/Star (1).png'
import logo from '../assets/Vector (1).png'
import lock from '../assets/lock.png'
import mail from '../assets/mail.png'
import user from '../assets/user-circle.png'
import calendar from '../assets/calendar-due.png'
import calendar2 from '../assets/calendar.png'
import eyeOff from '../assets/eye-off (1).png'
import eyeOpen from '../assets/eye-open.png'
import phone from '../assets/bluePhone.png'

export default function SignUp( {navigation} ) {
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [birthday, setBirthday] = useState('')


    const formatPhoneNumber = (phoneNumber) => {
        // Remove all non-digit characters
        const cleaned = ('' + phoneNumber).replace(/\D/g, '');
        // Format the phone number as (XXX) XXX-XXXX
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        else
            return phoneNumber;
    }

    const formatBirthday = (birthday) => {
        let strBirthday = String(birthday);
        // Remove all non-digit characters
        const cleaned = strBirthday.replace(/\D/g, '');
        // Format the birthday as MM/DD/YYYY
        const match = cleaned.match(/^(\d{2})(\d{2})(\d{4})$/);
        if (match) {
            return match[1] + '/' + match[2] + '/' + match[3];
        }
        else
            return birthday;
    }

    const sendPostRequest = async (username, email, birthday, phoneNumber, password) => {
        try {
            const response = await fetch('http://10.1.10.242:3000/api/sign-up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, birthday, phoneNumber, password })
            })
            return await response.json()
        } catch (error) {
            console.error(error)
        }
    }

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
                        <TextInput 
                            placeholder="Username" 
                            style={{flex: 1, marginLeft: 8}}
                            value={username}
                            onChangeText={(text) => setUsername(text)}>
                        </TextInput>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <Image source={mail} style={{width: 16, height: 16}}/>
                        <TextInput 
                            placeholder="Email" 
                            style={{flex: 1, marginLeft: 8}}
                            keyboardType="email-address"
                            value={email}
                            onChangeText={(text) => setEmail(text)}>
                        </TextInput>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <Image source={calendar} style={{width: 16, height: 16}}/>
                        <TextInput 
                            value={birthday}
                            placeholder="Birthday" 
                            style={{flex: 1, marginLeft: 8}}
                            onChangeText={(text) => setBirthday(formatBirthday(text))}
                            maxLength={10}
                            keyboardType="numeric">
                        </TextInput>
                        <Image source={calendar2} style={{width: 16, height: 16}}/>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <Image source={phone} style={{width: 16, height: 16,}}/>
                        <TextInput 
                            value={phoneNumber} 
                            onChangeText={(text) => setPhoneNumber(formatPhoneNumber(text))} 
                            placeholder="Phone Number" 
                            keyboardType="phone-pad" 
                            maxLength={14}
                            style={{flex: 1, marginLeft: 8}}>
                        </TextInput>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <Image source={lock} style={{width: 16, height: 16}}/>
                        <TextInput 
                            placeholder="Password" 
                            secureTextEntry={!passwordVisible} 
                            style={{flex: 1, marginLeft: 8}}
                            value={password}
                            onChangeText={(text) => setPassword(text)}>
                        </TextInput>
                        <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
                            <Image source={passwordVisible ? eyeOpen : eyeOff} style={{width: 16, height: 16}}/>
                        </Pressable>
                    </View>
                </View>
                <Pressable 
                    style={{backgroundColor: '#2868E8', paddingVertical: 12, paddingHorizontal: 148, borderRadius: 8,}}
                    onPress={() => sendPostRequest(username, email, birthday, phoneNumber, password)}>
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