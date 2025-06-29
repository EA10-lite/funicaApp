import React, { PropsWithChildren } from "react";
import { ScrollView, View } from "react-native";

const CustomScrollView = ({ children } : PropsWithChildren) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingBottom: 120 }}>
                {children}
            </View>
        </ScrollView>
    )
}

export default CustomScrollView;