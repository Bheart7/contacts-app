/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from '../../components/common/Icon';
import ContactsComponent from '../../components/ContactsComponent';
import getContacts from '../../context/actions/contacts/getContacts';
import {GlobalContext} from '../../context/Provider'
import { useNavigation,useFocusEffect } from '@react-navigation/native';
import { CONTACT_DETAIL } from '../../constants/routeNames';
import { navigate } from '../../navigations/SideMenu/RootNavigation';


const Contacts = ({navigation}) => {
    const [sortBy, setSortBy] = useState(null);
    const {setOptions, toggleDrawer} = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const contactsRef = useRef([]);
    

    const {
        contactsDispatch,
        contactsState: {
        getContacts: {data, loading},
    }} = useContext(GlobalContext);

    useEffect(() => {
        getContacts()(contactsDispatch);
    }, []);
    console.log('dortBS', sortBy);

    const getSettings = async () => {
        const sortPref = await AsyncStorage.getItem('sortBy');
        if(sortPref) {
            setSortBy(sortPref);
        }
    }

    useFocusEffect(useCallback(() => {
        getSettings()

        return () => {

        }
    }, []))

    useEffect(() => {
        const prev = contactsRef.current;
        contactsRef.current = data;

        const newList = contactsRef.current;

        if(newList.length-prev.length===1) {
            const newContact = newList.find(
                item => !prev.map(i => i.id).includes(item.id)
            );
            navigate(CONTACT_DETAIL, {item: newContact})
        }

    }, [data.length]);

    useEffect(() => {
        setOptions({headerLeft: () => (
        <TouchableOpacity onPress={() => {
            toggleDrawer();
        }}>
            <Icon type="material" style={{padding: 10}} size={25} name="menu" />
        </TouchableOpacity>
        ),
     });
    }, []);
    return (
        <ContactsComponent
         modalVisible={modalVisible}
         setModalVisible={setModalVisible} 
         data={data}
         loading={loading}
         sortBy={sortBy}
        />
    );
};

export default Contacts;
