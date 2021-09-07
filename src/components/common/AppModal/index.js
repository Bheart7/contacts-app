import React from 'react'
import { View, Text, Modal, TouchableOpacity, ScrollView } from 'react-native'
import Icon from '../Icon'
import styles from './styles'
import PropTypes from 'prop-types'

const AppModal = ({modalVisible, title, modalBody,modalFooter, setModalVisible, closeOnTouchOutside}) => {
    return (
        <Modal visible={modalVisible} transparent>
            <TouchableOpacity onPress={() => {
                if(closeOnTouchOutside){
                    setModalVisible(false);
                }
            }} style={styles.wrapper}>
                <View style={styles.modalView}>
                    <ScrollView>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => {
                                setModalVisible(false)
                            }}>
                                <Icon size={27} type="evil" name="close" />
                            </TouchableOpacity>
                            <Text style={styles.title}>{title || 'RNContacts'}</Text>
                            <View />
                           
                        </View>
                        <View style={styles.footerSeparator}/>
                        <View style={styles.body}>{modalBody}</View>
                        {modalFooter}
                        {!modalFooter && (
                            <View>
                                <>
                                    <View style={styles.footerSeparator}/>
                                    <View style={styles.footerItems}>
                                        <View style={styles.footer}>
                                            <Text style={styles.footerText}>Privacy Policy</Text>
                                            <View style={styles.termsView} />
                                            <Text style={styles.footerText}>Terms of Services</Text>
                                        </View>
                                    </View>
                                </>
                            </View>
                        )}
                    </ScrollView>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}

AppModal.proptypes = {
    closeOnTouchOutside: PropTypes.bool,
}

AppModal.defaultProps = {
    closeOnTouchOutside: true,
}

export default AppModal