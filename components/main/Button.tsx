import React from 'react';
import { Colors } from '@/constants/Colors';
import { StyleSheet, Pressable, Text } from 'react-native';
import { Link, Href } from 'expo-router';

type ButtonProps = {
  label: string;
  variant?: 'dark' | 'light';
  onPress?: () => void;
  href?: Href;
};

const Button = ({ label, variant = 'light', onPress, href }: ButtonProps) => {
    const backgroundColor = variant === 'dark' ? Colors.dark.bg : Colors.light.bg;
    const color = variant === 'dark' ? Colors.dark.text : Colors.light.text;

    const buttonStyles = [styles.button, { backgroundColor }];

    if (href) {
        return (
            <Link href={href} style={buttonStyles}>
                <Text style={[styles.buttonLabel, { color }]}>{label}</Text>
            </Link>
        );
    }

    return (
        <Pressable
            onPress={onPress}
            style={buttonStyles}
            accessibilityRole="button"
            accessibilityLabel={label}
        >
            <Text style={[styles.buttonLabel, { color }]}>{label}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        maxWidth: '100%',
        flexGrow: 1,
        borderRadius: 133,
        paddingHorizontal: 16,
        paddingVertical: 18,
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6,
    },
    buttonLabel: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Button;