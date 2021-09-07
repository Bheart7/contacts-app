import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
    logoImage: {
       height: 150,
       width: 150,
       alignSelf: 'center',
       marginTop: 20,
    },
    title: {
        fontSize: 21,
        textAlign: 'center',
        paddingTop: 5,
        fontWeight: '500',
    },
    subTitle: {
        fontSize: 17,
        textAlign: 'center',
        paddingVertical: 20,
        fontWeight: '500',
    },
    form: {
        paddingTop: 10,
    },
    createSection: {
        flexDirection: 'row',
    },
    linkBtn: {
        paddingLeft: 7,
        color: colors.primary,
        fontSize: 16
    },
    infoText: {
        fontSize: 17,
    }
});