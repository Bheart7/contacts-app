import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {REGISTER} from '../../constants/routeNames';
import Input from '../../components/common/input';
import styles from './styles';
import Message from '../common/Message';

const LoginComponent = ({error, form, justSignedUp, onChange, onSubmit, loading}) => {
    const {navigate} = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    return (
        <Container>

            <Image height={70} width={70} source={require('../../assets/images/logo.png')} style={styles.logoImage}/>

            <View>
                <Text style={styles.title}>Welcome to RNContacts</Text>
                <Text style={styles.subTitle}>Please login here</Text>
                
                <View style={styles.form}>
                    {justSignedUp  && <Message onDismiss={() => {}} success message="Account created successfully." />}
                    {error && !error.error && <Message onDismiss={() => {}} danger message="Invalid credentials" />}
                    {error?.error && <Message
                    danger
                    onDismiss={() => {}}
                    message={error?.error} 
                    />}
                    <Input 
                    label="Username"
                    iconPosition="right"
                    placeholder="Enter Username"
                    value={form.userName || null}
                    onChangeText={(value) => {
                        onChange({name: "userName", value})
                    }}
                    />

                    <Input 
                    label="Password"
                    placeholder="Enter password"
                    secureTextEntry={isSecureEntry}
                    icon={<TouchableOpacity onPress={() => {
                        setIsSecureEntry(prev => !prev)
                    }}><Text>{isSecureEntry ? 'Show': 'Hide'}</Text></TouchableOpacity>}
                    iconPosition="right"
                    onChangeText={(value) => {
                        onChange({name: "password", value})
                    }}
                    />

                    <CustomButton 
                    onPress={onSubmit}
                    disabled={loading}
                    title="Submit" 
                    loading={loading}
                    primary
                    />

                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Need a new account?</Text>
                        <TouchableOpacity onPress={() => {navigate(REGISTER)}}>
                            <Text style={styles.linkBtn}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>   

               
            </View>
        </Container>
    )
}

export default LoginComponent;
