import { FormikValues, useFormikContext } from "formik";
import React from "react";
import { Text, StyleSheet, Pressable} from "react-native";

type buttonProps = {
    label:          string;
    loading:        boolean;
    disable?:        boolean;
}


const Submit = ({ label, loading, disable }: buttonProps) => {
    const { handleSubmit } = useFormikContext<FormikValues>();
    return (
        <Pressable
            accessibilityRole="button"
            accessibilityLabel={label}
            disabled={disable || loading}
            onPress={()=> handleSubmit()}
            style={[styles.button, { opacity: disable ? 0.6 : 1 }]}
        >
            <Text style={[styles.buttonLabel]}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#000",
        width: '100%',
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
        color: "#fff",
    },
})

export default Submit;