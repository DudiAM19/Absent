import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "styles";
const { width } = Dimensions.get("window");
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    Header: {
        height: width * .4,
        width: width,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        alignItems: 'center'
    },
    textHeader: {
        color: Colors.WHITE,
        fontFamily: Fonts.PMedium,
        fontSize: RFValue(17),
        textAlign: 'center',
        margin: width * .07
    },
    logoSection: {
        width: width * .2,
        height: width * .2,
        backgroundColor: Colors.WHITE,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Colors.GRAY
    },
    logo: {
        width: width * .1,
        height: width * .1
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
    icon: {
        // marginTop: width * .01,
        marginLeft: width * .03,
        fontSize: RFValue(25),
        color: Colors.BLACK_TEXT
    },
    textData: {
        fontFamily: Fonts.PRegular,
        fontSize: RFValue(18),
        color: Colors.BLACK_TEXT,
        marginHorizontal: width * .02
    }
})