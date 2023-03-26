import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Input } from 'react-native-elements';
import { useTheme } from 'react-native-paper';
import { RFValue } from '../lib';
  
const GlobalInput = ({Label, Style, ...props }) => {

    const {colors} = useTheme();

    return (
        <View style={{width: "100%"}}>
            <Input
                {...props}
                style={[
                    styles.input, 
                    {color: colors.textcolor},
                    Style
                ]}
            /> 
        </View>
    );
};

const styles = StyleSheet.create({
    input: {       
        fontSize: RFValue(14)
    },
});

export default GlobalInput;
