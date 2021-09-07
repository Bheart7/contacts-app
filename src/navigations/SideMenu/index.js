import React from 'react';
import { SafeAreaView, Image, Text, View, TouchableOpacity, Alert } from 'react-native';
import Container from '../../components/common/Container';
import { SETTINGS } from '../../constants/routeNames';
import logoutUser from '../../context/actions/auth/logoutUser';
import styles from './styles';
import Icon from '../../components/common/Icon';

const SideMenu = ({navigation, authDispatch}) => {

    const handleLogout = () => {
        navigation.toggleDrawer();
        Alert.alert("Logout!","Are you sure you want to logout?", [
            {
                text: "Cancel",
                onPress: () => {},
            },
            {
                text: "Confirm",
                onPress: () => {
                    logoutUser()(authDispatch);
                },
            }
        ]);
    };

    const menuItems = [
        {
            icon:<Icon type="fontisto" name="player-settings" size={18} />,
            name:"Settings", 
            onPress: () => {
            navigation.navigate(SETTINGS)
            },
        },
        {
            icon:<Icon type="material" name="logout" size={18} />,
            name:"Logout",
            onPress: handleLogout,
        },
    ];
    return (
        <SafeAreaView>
            <Container>
            <Image height={70} width={70} source={require('../../assets/images/logo.png')} style={styles.logoImage}/>
            <View style={{paddingHorizontal: '29%'}}>
                {menuItems.map(({name, icon, onPress}) => (
                <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
                    {icon}
                    <Text style={styles.itemText}>{name}</Text>
                </TouchableOpacity>
                 )
                )}
            </View>
            </Container>
        </SafeAreaView>
    )
}

export default SideMenu
