import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({
    wrapper: {
        height: 42,
        paddingHorizontal: 5,
        paddingVertical: 13,
        marginVertical: 5,
        borderRadius: 4,
    },
    textInput: {
        width: '100%',
        flex: 1,
    },
    error: {
        color: colors.danger,
        paddingTop: 4,
        fontSize: 12,
    },
});