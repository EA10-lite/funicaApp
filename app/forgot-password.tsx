import React from "react";
import { View, StyleSheet, Text} from "react-native";
import { GoBack, Logo, } from "@/src/components/main";
import { Formik } from "formik";
import { reset_password_schema } from "@/validations/auth";
import { Field, Submit } from "@/src/components/forms";

type signupProps = {
    newPassword:          string;
    confirmPassword:      string;
}

const Signin = () => {
    const handleSubmit = async (values: signupProps) => {};


    return (
        <View style={styles.container}>
            <GoBack label="Forgot Password" />

            <View style={styles.logoContainer}>
                <Logo size="lg" variant="dark" />
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.title}>Login your account</Text>
                <Formik
                    initialValues={{ newPassword: "", confirmPassword: "" }}
                    validationSchema={reset_password_schema}
                    onSubmit={(values)=> handleSubmit(values)}
                >
                    {({ values })=> (
                        <>
                            <Field 
                                name="newPassword"
                                isSecureText={true}
                                type="visible-password"
                                placeholder="Enter your password"
                            />

                            <Field 
                                name="confirmPassword"
                                isSecureText={true}
                                type="visible-password"
                                placeholder="Enter your password"
                            />

                            <Submit 
                                label="Sign in" 
                                loading={false} 
                                disable={values["newPassword"].length <= 0 || values["confirmPassword"].length <= 0}
                            />
                            
                        </>
                    )}
                </Formik>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logoContainer: {
        marginBottom: 24,
    },
    formContainer: {
        width: '100%',
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 24,
    },
});


export default Signin;