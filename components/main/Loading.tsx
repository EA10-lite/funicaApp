import React, { useEffect, useRef } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Animated, Easing} from "react-native";

type LoadingProps = {
    size?:   number;
    color?:  string;
}

const Loading = ({ size = 32, color = "#fff"} : LoadingProps) => {
    const spinValue = useRef(new Animated.Value(0)).current;
    
    useEffect(() => {
        Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1, 
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    }, [spinValue]);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <AntDesign name="loading1" size={size} color={color} />
        </Animated.View>
    )
}

export default Loading;