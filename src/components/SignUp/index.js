import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routeNames';
import Input from '../common/input';
import styles from './styles';
import Message from '../common/Message';


const RegisterComponent = ({
    onSubmit,
    onChange,
    form,
    loading,
    error,
    errors,
}) => {
    const {navigate} = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    return (
        <Container>

            <Image height={70} width={70} source={require('../../assets/images/logo.png')} style={styles.logoImage}/>

            <View>
                <Text style={styles.title}>Welcome to RNContacts</Text>
                <Text style={styles.subTitle}>Create a free account</Text>

                <View style={styles.form}>
                    {error?.error && <Message
                 retry 
                 danger
                 retryFn={() => {
                    console.log('222', 222);
                 }} 
                 message={error?.error} 
                 />}
                    <Input 
                    label="Username"
                    iconPosition="right"
                    placeholder="Enter Username"
                    onChangeText={(value) => {
                        onChange({name: "userName", value})
                    }}
                    error={errors.userName || error?.username?.[0]}
                    />

                    <Input 
                    label="First name"
                    iconPosition="right"
                    placeholder="Enter first name"
                    onChangeText={(value) => {
                        onChange({name: "firstName", value})
                    }}
                    error={errors.firstName || error?.first_name?.[0]}
                    />

                    <Input 
                    label="Last name"
                    iconPosition="right"
                    placeholder="Enter Last name"
                    onChangeText={(value) => {
                        onChange({name: "lastName", value})
                    }}
                    error={errors.lastName || error?.last_name?.[0]}
                    />

                    <Input 
                    label="Email"
                    iconPosition="right"
                    placeholder="Enter email"
                    onChangeText={(value) => {
                        onChange({name: "email", value})
                    }}
                    error={errors.email || error?.email?.[0]}
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
                    error={errors.password || error?.password?.[0]}
                    />

                    <CustomButton 
                    onPress={onSubmit}
                    disabled={loading}
                    title="Submit" 
                    loading={loading}
                    primary
                    />

                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => {navigate(LOGIN)}}>
                            <Text style={styles.linkBtn}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>   

               
            </View>
        </Container>
    )
}

export default RegisterComponent;
