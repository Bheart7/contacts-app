import React from 'react'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Image, ScrollView } from 'react-native'
import colors from '../../assets/theme/colors'
import Icon from '../common/Icon'
import Message from '../common/Message'
import { useNavigation } from '@react-navigation/core';
import {CONTACT_DETAIL, CREATE_CONTACT} from '../../constants/routeNames'
import Container from '../common/Container';
import styles from './styles'
import ImageComponent from './ImageComponent'
import CustomButton from '../common/CustomButton'

const ContactDetailsComponent = ({contact}) => {
    const {navigate} = useNavigation();

        const { contact_picture, first_name, last_name, phone_number, country_code } = contact;
        return (
        
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                {contact_picture && <ImageComponent src={contact_picture} />}
                <View style={styles.content}>
                    <Text style={styles.names}>{first_name + ' ' + last_name}</Text>
                </View>
                <View style={styles.hrLine} />
                
                <View style={styles.topCallOptions}>
                    <TouchableOpacity style={styles.topCallOption}>
                        <Icon 
                            type="ionicon"
                            name="call-outline"
                            color={colors.primary}
                            size={27}
                        />
                        <Text style={styles.middleText}>Call</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topCallOption}>
                        <Icon 
                            type="materialCommunity"
                            name="message-text"
                            color={colors.primary}
                            size={27}
                        />
                        <Text style={styles.middleText}>Text</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topCallOption}>
                        <Icon 
                            type="materialCommunity"
                            name="video"
                            color={colors.primary}
                            size={27}
                        />
                        <Text style={styles.middleText}>Video</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.middleCallOptions}>
                    <Icon 
                        type="ionicon"
                        name="call-outline"
                        color={colors.grey}
                        size={27}
                    />
                    <View style={styles.phoneMobile}>
                        <Text>{phone_number}</Text>
                        <Text>Mobile</Text>
                    </View>

                    <View 
                      style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                      }}>
                        <Icon 
                            type="materialCommunity"
                            name="video"
                            color={colors.primary}
                            size={27}
                        />
                        <Icon
                            type="materialCommunity"
                            name="message-text"
                            color={colors.primary}
                            size={27}
                            style={[styles.msgIcon]}
                        />                          
                      </View>
                </View>
                <CustomButton
                style={{alignSelf: 'flex-end', marginRight: 20, width: 200}}
                primary
                title="Edit Contact"
                onPress={() => {
                    navigate(CREATE_CONTACT, {contact, editing: true});
                }}
                />


            </View>
        </ScrollView>
    );
};

export default ContactDetailsComponent;
