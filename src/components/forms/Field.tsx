import React from "react";
import { View, StyleSheet, KeyboardTypeOptions } from "react-native";
import { FormikValues, useFormikContext } from "formik";

import Error from "./Error";
import Label from "./Label";
import Input from "./Input";


type fieldProps = {
    name:           string;
    label?:         string;
    placeholder?:   string;
    type?:           KeyboardTypeOptions | undefined;
    disabled?:      boolean;
    isActive?:      boolean;
    Icon?:          React.ElementType;
    isSecureText?:  boolean;
}


const Field = ({
    name,
    label,
    placeholder,
    isActive,
    type="default",
    Icon,
    isSecureText = false,
} : fieldProps) => {
    const { values, errors, touched, handleChange} = useFormikContext<FormikValues>();


    return (
        <View style={styles.field}>
            { label && <Label label={label} /> }

            <Input 
                name={name}
                value={values[name]}
                Icon={Icon}
                visible={!!touched?.[name]}
                isActive={isActive}
                error={errors?.[name] as string | undefined}
                handleChange={handleChange}
                isSecureText={isSecureText}
                placeholder={placeholder}
                type={type}
            />


            <Error 
                error={errors?.[name] as string | undefined}
                visible={!!touched?.[name]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    field: {
        marginBottom: 16,
    }
})

export default Field;