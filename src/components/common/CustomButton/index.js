import React from 'react'
import { View, Text ,TouchableOpacity, ActivityIndicator } from 'react-native'
import colors from '../../../assets/theme/colors';
import styles from './styles';



const CustomButton = ({
    title,
    primary,
    secondary,
    danger,
    disabled,
    loading,
    onPress,
}) => {
    const getBgColor = () => {
        if(disabled) {
            return colors.grey;
        }

        if(primary) {
            return colors.primary;
        }
        if(danger) {
            return colors.danger;
        } 
        if(secondary) {
            return colors.secondary;
        } 
    }

    return (
        <TouchableOpacity 
        disabled={disabled}
        onPress={onPress} 
        style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
            <View style={[styles.loaderSection]}>
                {title && <Text style={{color:disabled?"black": colors.white, paddingRight:loading?5:0}}>{loading? "Please wait...": title}</Text>}
                {loading && <ActivityIndicator color={primary? colors.secondary:colors.primary} />}
            </View> 
        </TouchableOpacity>
    )
}

export default CustomButton;
