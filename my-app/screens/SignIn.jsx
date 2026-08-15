import { StyleSheet, Text, View, Pressable, TextInput, Image } from 'react-native'
import Star from '../assets/Star (1).png'
import logo from '../assets/Vector (1).png'
import email from '../assets/mail.png'
import lock from '../assets/lock.png'
import eyeOff from '../assets/eye-off (1).png'
import eyeOpen from '../assets/eye-open.png'
import { useState, useEffect } from 'react'

export default function SignIn( {navigation} ) {
    const [passwordVisible, setPasswordVisible] = useState(false);


    return (
        <View style={styles.container}>
            <Image source={Star} style={{width: '100%', height: '100%'}}/>
            <View style={styles.innerContainer}>
                <Image 
                    source={logo} 
                    style={{width: 34, height: 34, marginBottom: 16}}
                />
                <Text style={{fontWeight: 'bold', color: 'white', fontSize: 32, marginBottom: 12}}>Sign in to your Account</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: 'white'}}>Don't have an account? </Text>
                    <Pressable onPress={() => navigation.navigate('SignUp')}><Text style={{color: '#2868E8', fontWeight: 'bold'}}>Sign Up</Text></Pressable>
                </View>

                <View style={{backgroundColor: 'white', borderRadius: 8, paddingHorizontal: 12, marginTop: 32, width: '100%'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', minHeight: 48, width: '100%', overflow: 'hidden'}}>
                        <Image source={email} style={{width: 16, height: 16,}}/>
                        <TextInput
                            placeholder='Email'
                            autoCapitalize='none'
                            underlineColorAndroid='transparent'
                            style={{width: '100%', marginLeft: 8}}
                        />
                        
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', minHeight: 48, width: '100%'}}>
                        <Image source={lock} style={{width: 16, height: 16}}/>
                        <TextInput
                            placeholder='Password'
                            secureTextEntry={!passwordVisible}
                            underlineColorAndroid='transparent'
                            style={{flex: 1, marginLeft: 8, overflow: 'hidden'}}
                        />
                        <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
                            <Image source={passwordVisible ? eyeOpen : eyeOff} style={{width: 16, height: 16,}}/>
                        </Pressable>
                    </View>
                </View>
                
                <Text style={{color: 'white', textDecorationLine: 'underline', marginVertical: 24}}>Forgot Your Password ?</Text>
                <Pressable style={{backgroundColor: '#2868E8', paddingVertical: 12, paddingHorizontal: 148, borderRadius: 8,}}>
                    <Text style={{color: 'white'}}>Log In</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101020',
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