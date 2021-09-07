/* eslint-disable prettier/prettier */
import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, Alert, Text, TouchableOpacity, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ContactDetailsComponent from '../../components/ContactDetailsComponent';
import { useNavigation } from '@react-navigation/core';
import Icon from '../../components/common/Icon';
import colors from '../../assets/theme/colors';
import {GlobalContext} from '../../context/Provider'
import deleteContact from '../../context/actions/contacts/deleteContact';
import { CONTACT_LIST } from '../../constants/routeNames';

const ContactDetail = () => {
    const {params: {item = {}} = {}} = useRoute();

    const {
            contactsDispatch, 
            contactsState: {
                deleteContact: {loading},
            },
        } = useContext(GlobalContext);
    
    const {setOptions, navigate} = useNavigation();

    useEffect(() => {
        if(item) {
            setOptions({
                title: item.first_name + " " + item.last_name,
                headerRight: () => {
                    return (
                    <View style={{flexDirection: 'row', paddingRight: 10}}>
                        <TouchableOpacity>
                            <Icon color={colors.primary} size={25} name={item.is_favorite ? 'star' : 'star-border'} type="material" />
                        </TouchableOpacity>
                        <TouchableOpacity  style={{paddingLeft: 12}} onPress={() => {
                            Alert.alert("Delete!","Are you sure you want to remove " + item.first_name + "?", [
                                {
                                    text: "Cancel",
                                    onPress: () => {},
                                },
                                {
                                    text: "Confirm",
                                    onPress: () => {
                                        deleteContact(item.id)(contactsDispatch)(() => {
                                            navigate(CONTACT_LIST);
                                        });
                                    },
                                }
                            ]);                            
                        }}>
                            {loading ? <ActivityIndicator size="small" color={colors.primary} /> : (<Icon color={colors.primary} size={25} name='delete' type="material" />)}
                        </TouchableOpacity>
                    </View>
                    );
                },
            });
        }
    }, [item, loading]);

    return <ContactDetailsComponent contact={item} />;
    
};

export default ContactDetail;
