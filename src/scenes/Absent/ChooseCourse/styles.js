import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "styles";
const { width } = Dimensions.get("window");
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    header: {
        height: width * .2,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textHeader: {
        color: Colors.WHITE,
        fontFamily: Fonts.PMedium,
        fontSize: RFValue(26)
    },
    iconBack: {
        fontSize: RFValue(30),
        color: Colors.WHITE
    },
    contentSection: {
        width: width,
        height: width * .1,
        // backgroundColor: 'red',
        marginTop: width * .2,
        marginBottom: width * .08,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.BLACK_TEXT
    },
    textContent: {
        fontFamily: Fonts.PMedium,
        fontSize: RFValue(20),
        color: Colors.BLACK_TEXT
    },
    dataSection: {
        // backgroundColor: 'red',
        height: width * .1,
        marginHorizontal: width * .09,
        borderBottomWidth: 1,
        borderBottomColor: Colors.GRAY,
        marginTop: width * .05,
        flexDirection: 'row',
    },
    textData: {
        fontFamily: Fonts.PRegular,
        fontSize: RFValue(18),
        color: Colors.BLACK_TEXT,
        marginHorizontal: width * .05,
        flex: 1
    },
    icon: {
        fontSize: RFValue(25),
        color: Colors.BLACK_TEXT
    },
})