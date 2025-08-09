import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type AvatarProps = {
    uri:        string;
    initials?:   string;
}

const Avatar = ({ uri, initials } : AvatarProps) => {
    const formatInitials = (initials: string) => {
        if(initials.length <= 2) return initials;
        if(initials.split(' ').length > 1) {
            const splitedText = initials.split(' ');
            return splitedText[0][0] + splitedText[1][0];
        }

        else {
            return initials.slice(0,2);
        }
        
    }
    return (
        <View style={styles.avatar}>
            { uri && <Image source={uri} style={styles.avatarImg} /> }
            {!uri && initials && (
                <Text style={styles.initials}>{ formatInitials(initials) }</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    avatar: {
        width: 56,
        height: 56,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e7e7e7',
    },
    avatarImg: {
        width: 56,
        height: 56,
        borderRadius: '50%',
    },
    initials: {
        fontSize: 24,
        fontWeight: '700'
    },
});

export default Avatar;