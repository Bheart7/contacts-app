import React from 'react'
import { View, Text, Image, Switch, TouchableOpacity } from 'react-native'
import styles from './styles'
import Container from '../common/Container'
import CustomButton from '../common/CustomButton'
import Input from '../common/input'
import CountryPicker from 'react-native-country-picker-modal'
import {DEFAULT_IMAGE_URI} from '../../constants/general'
import colors from '../../assets/theme/colors'
import ImagePicker from '../common/ImagePicker'

const CreateContactComponent = ({loading, error, onChangeText, form, onSubmit, setForm, toggleValueChange, sheetRef, openSheet, localFile, onFileSelected,}) => {
    return (
        <View style={styles.container}>
            <Container>
                <Image width={150} height={150} source={{uri: localFile?.path || localFile || DEFAULT_IMAGE_URI}} style={styles.imageView} />
                <TouchableOpacity onPress={openSheet}>
                 <Text style={styles.chooseText}>Choose image</Text>
                </TouchableOpacity>
                <Input
                 label="First name" 
                 onChangeText={(value) => {
                    onChangeText({name: 'firstName', value: value});
                }}
                value={form.firstName || ''}
                 placeholder="Enter your first name" 
                 error={error?.first_name[0]}
                 />
                <Input
                 label="Last name" 
                 onChangeText={(value) => {
                    onChangeText({name: 'lastName', value: value});
                }}
                 value={form.lastName || ''}
                 placeholder="Enter your last name" 
                 error={error?.last_name[0]}
                 />
                <Input icon={
                    <CountryPicker
                        withFilter
                        withFlag
                        countryCode={form.countryCode || undefined}
                        withCountryNameButton={false}
                        withCallingCode
                        withCallingCodeButton
                        withEmoji
                        onSelect={(v) => {
                            const phoneCode = v.callingCode[0];
                            const cCode = v.cca2;
                            setForm({...form,phoneCode, countryCode: cCode, })
                        }}
                    />
                }
                style={{paddingLeft: 10}}
                iconPosition="left" 
                onChangeText={(value) => {
                    onChangeText({name: 'phoneNumber', value: value});
                }}
                label="Phone Number" 
                value={form.phoneNumber || ''}
                placeholder="Enter your phone number" 
                error={error?.phone_number[0]}
                />
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10,}}>
                    <Text style={{fontSize: 17}}>Add to favorites</Text>

                    <Switch
                        trackColor={{ false: colors.grey, true: colors.primary }}
                        thumbColor={colors.white}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleValueChange}
                        value={form.isFavorite}
                    />
                </View>
                <CustomButton loading={loading} disabled={loading} onPress={onSubmit} primary title="Submit"/>
            </Container>
            <ImagePicker ref={sheetRef} onFileSelected={onFileSelected} />
        </View>
    )
}

export default CreateContactComponent
