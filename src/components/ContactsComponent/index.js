import React from 'react'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Image } from 'react-native'
import colors from '../../assets/theme/colors'
import styles from './styles'
import Icon from '../common/Icon'
import Message from '../common/Message'
import { useNavigation } from '@react-navigation/core';
import {CONTACT_DETAIL, CREATE_CONTACT} from '../../constants/routeNames'

const ContactsComponent = ({data, loading, sortBy}) => {
    const {navigate} = useNavigation();
    const ListEmptyComponent = () => {
        return (
        <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
            <Message info message="No contacts to show" />
        </View>
        );
    };

    const renderItem = ({item}) => {
        const { contact_picture, first_name, last_name, phone_number, country_code } = item;
        return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => {
            navigate(CONTACT_DETAIL, {item});
        }}>
            <View style={styles.item}>
                {contact_picture? (
                 <Image style={{width: 45, height: 45, borderRadius: 100}} source={{uri:contact_picture}} />
                 ): (
                 <View style={{
                        width: 45, 
                        height: 45, 
                        backgroundColor: colors.blue, 
                        borderRadius: 100,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                     }}>
                     <Text style={styles.name, {color: colors.white}}>{first_name[0]}</Text>
                     <Text style={styles.name, {color: colors.white}}>{last_name[0]}</Text>
                 </View>
                 )}
                 <View style={{paddingLeft: 20}}>
                     <View style={{flexDirection: 'row'}}>
                      <Text style={styles.name}>{first_name}</Text>
                      <Text style={styles.name}> {last_name}</Text>
                     </View>
                    <Text style={styles.phoneNumber}>{`+${country_code} ${phone_number}`}</Text>
                 </View>
            </View>
            <Icon name="right" type="ant" size={18} color={colors.grey} />
        </TouchableOpacity>)
    };

    return (
        <>
        <View style={{backgroundColor: colors.white }}>
             {loading && (
             <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
               <ActivityIndicator color={colors.primary} size="large" />
             </View>
             )}

             {!loading && (
                 <View style={{paddingVertical: 20}}>
                     <FlatList
                     renderItem={renderItem} 
                     data={sortBy?data.sort((a,b) => {
                        if(sortBy === 'First Name') {
                            if(b.first_name>a.first_name) {
                                return -1
                            } else {
                                return 1
                            }
                        }

                        if(sortBy === 'Last Name') {
                            if(b.last_name>a.last_name) {
                                return -1
                            } else {
                                return 1
                            }
                        }
                     }): data}
                     ItemSeparatorComponent={() => (<View style={{height: 0.5, backgroundColor: colors.grey }}></View>)}
                     ListEmptyComponent={ListEmptyComponent} 
                     keyExtractor={(item) => String(item.id)}
                     ListFooterComponent={<View style={{height: 150}}></View>}
                     />
                 </View>
              )}
        </View>
        <TouchableOpacity style={styles.floatingActionButton} onPress={() => {navigate(CREATE_CONTACT)}}>
            <Icon type="feather" size={22} name="plus" color={colors.white} />
        </TouchableOpacity>
        </>
    );
};

export default ContactsComponent;
