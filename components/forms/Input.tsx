import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, KeyboardTypeOptions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Replace with your preferred icon library
import { FormikValues, useFormikContext } from 'formik';

type inputProps =  {
    name:               string;
    placeholder?:       string;
    type?:              KeyboardTypeOptions | undefined;
    handleChange:       (text: string) => void;
    error?:             string | null;
    visible:            boolean;
    isActive?:          boolean;
    disabled?:          boolean;
    value:              string;
    Icon?:              React.ElementType;
    handleIconClick?:   () => void;
    isSecureText:       boolean;
}

const Input = ({
    Icon,
    handleIconClick,
    name,
    placeholder,
    type,
    visible,
    isActive,
    error,
    value,
    disabled = false,
    isSecureText,
    ...otherProps
} : inputProps) => {
    const { values, handleChange } = useFormikContext<FormikValues>();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

   const inputRef = useRef<TextInput>(null);

    return (
        <View style={styles.container}>
            <TextInput 
                ref={inputRef}
                placeholder={placeholder}
                placeholderTextColor={"#5555"}
                keyboardType={type}
                onChangeText={handleChange(name)}
                onFocus={()=> setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={[
                    styles.input, 
                    (error && visible) && styles.errorInput,
                    (isFocused || isActive) && styles.activeInput,
                ]}
                secureTextEntry={isPasswordVisible ? false : isSecureText}
                value={values[name]}
                {...otherProps}
            />

            {isSecureText && (
                <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                    <Ionicons
                        name={isPasswordVisible ? 'eye' : 'eye-off'}
                        size={20}
                        color="#9e9e9e"
                    />
                </TouchableOpacity>
            )}
            {Icon && handleIconClick && (
                <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={handleIconClick}
                >
                    <Icon size={20} color="#9e9e9e" />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        marginBottom: 10,
    },
    input: {
        width: '100%',
        borderRadius: 16,
        paddingHorizontal: 18,
        paddingVertical: 16,
        fontSize: 14,
        fontWeight: '500',
        color: '#000',
        backgroundColor: '#fafafa',
    },
    errorInput: {
        borderWidth: 1,
        borderColor: '#FF0000',
        backgroundColor: '#FFEBEB',
    },
    activeInput: {
        borderColor: "#000",
        borderWidth: 1,
    },
    iconContainer: {
        position: 'absolute',
        right: 18,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Input;