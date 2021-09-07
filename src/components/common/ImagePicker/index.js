import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import RBSheet from "react-native-raw-bottom-sheet"
import Icon from '../Icon'
import colors from '../../../assets/theme/colors'
import ImagePickerCropper from 'react-native-image-crop-picker';


const ImagePicker = React.forwardRef(({onFileSelected}, ref) => {
    const options = [
        {
            name: "Take from camera", 
            icon:<Icon color={colors.grey} size={21} name="camera" />,
            onPress:() => {
                ImagePickerCropper.openCamera({
                    width: 300,
                    height: 300,
                    cropping: true,
                    freeStyleCropEnabled: true,
                }).then((images) => {
                    onFileSelected(images);
                }).catch(error => {
                    console.log('error', error);
                });
            }
        }, 
        {
            name: "Choose from Gallery", 
            icon:<Icon color={colors.grey} size={21} name="image" />,
            onPress:() => {
                ImagePickerCropper.openPicker({
                    width: 300,
                    height: 300,
                    cropping: true,
                    freeStyleCropEnabled: true,
                }).then((images) => {
                    onFileSelected(images);
                }).catch(error => {
                    console.log('error', error);
                });
            }
        },
    ]
    return (
        <RBSheet
          ref={ref}
          height={160}
          openDuration={250}
          closeOnDragDown
          customStyles={{
            container: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }
          }}
        >
            <View style={styles.optionsWrapper}>
            {options.map(({name, icon, onPress}) => (
            <TouchableOpacity onPress={onPress} style={styles.pickerOption} key={name}>
                {icon}<Text style={styles.text}>{name}</Text>
                </TouchableOpacity>
                ))}
            </View>
        </RBSheet>
    )
})

export default ImagePicker
