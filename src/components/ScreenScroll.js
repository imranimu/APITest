import { ScrollView} from 'react-native'
import React from 'react'

const ScreenScroll = ({children, containerStyle}) => {
    return (
        <ScrollView 
            showsVerticalScrollIndicator ={false}
            showsHorizontalScrollIndicator={false}
            style={containerStyle}
        >
            {children}
        </ScrollView>
    )
}

export default ScreenScroll;
 