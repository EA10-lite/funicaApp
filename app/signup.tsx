import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { GoBack, LoginWithSocials, Logo, OrDivider } from "@/src/components/main";
import { Formik } from "formik";
import { signup_schema } from "@/validations/auth";
import { Checkbox, Field, Submit } from "@/src/components/forms";
import { Link } from "expo-router";

type signupProps = {
    email:      string;
    password:   string;
}

const Signin = () => {
    const handleSubmit = async (values: signupProps) => {};


    return (
        <View style={styles.container}>
            <GoBack />
            <View style={styles.logoContainer}>
                <Logo size="lg" variant="dark" />
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.title}>Create Account</Text>
                <Formik
                    initialValues={{ email: "", password: "", remeber: false }}
                    validationSchema={signup_schema}
                    onSubmit={(values)=> handleSubmit(values)}
                >
                    {({ values })=> (
                        <>
                            <Field 
                                name="email"
                                placeholder="Enter your email address"
                                type="email-address"
                            />

                            <Field 
                                name="password"
                                isSecureText={true}
                                type="visible-password"
                                placeholder="Enter your password"
                            />

                            <View style={styles.checkbox}>
                                <Checkbox   
                                    name="remeber" 
                                    label="Remeber me" 
                                />
                            </View>

                            <Submit 
                                label="Sign up" 
                                loading={false} 
                                disable={values["email"].length <= 0 || values["password"].length <= 0}
                            />
                            

                            <OrDivider />
                            <LoginWithSocials hasText={false} />


                            <Text style={styles.link}> Already have an account ? <Link href={"/signin"} style={styles.boldLink}>Signin</Link></Text>
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
    checkbox: {
        marginBottom: 32,
        marginTop: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    row: {
        marginVertical: 20,
    },
    link: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 400,
        marginTop: 44,
        color: '#9e9c9d',
    },
    boldLink: {
        fontWeight: '600',
        color: '#000',
    }
});


export default Signin;