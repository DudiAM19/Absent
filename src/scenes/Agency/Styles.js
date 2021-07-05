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
        margin: width * .07,
        fontSize: RFValue(26),
        marginTop: width * .09
    },
    logoSection: {
        width: width * .2,
        height: width * .2,
        backgroundColor: Colors.WHITE,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Colors.GRAY,
        marginTop: width * .05
    },
    logo: {
        width: width * .1,
        height: width * .1
    },
    contentSection: {
        height: width * .9,
        // backgroundColor: 'red', 
        marginVertical: width * .2,
        margin: width * .08,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: Colors.GRAY
    },
    agencyProfile: {
        flexDirection: 'row'
    },
    textProfile: {
        fontFamily: Fonts.PMedium,
        fontSize: RFValue(16),
        margin: width * .06
    },
    textMercu: {
        marginVertical: width * .06,
        fontFamily: Fonts.PRegular,
        fontSize: RFValue(16),
        color: Colors.BLACK_TEXT,
        width: width * .6
    }
})