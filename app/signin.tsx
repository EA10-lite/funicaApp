import { Field, Submit } from "@/src/components/forms";
import { GoBack, LoginWithSocials, Logo, OrDivider } from "@/src/components/main";
import { useAuthContext } from "@/context/AuthContext";
import { signup_schema } from "@/validations/auth";
import { Link, useRouter } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type signupProps = {
    email:      string;
    password:   string;
}

const Signin = () => {
    const router = useRouter();
    const { signIn } = useAuthContext();

    const handleSubmit = async (values: signupProps) => {
        signIn();
        router.replace("/(app)");
    };


    return (
        <View style={styles.container}>
            <GoBack />

            <View style={styles.logoContainer}>
                <Logo size="lg" variant="dark" />
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.title}>Login your account</Text>
                <Formik
                    initialValues={{ email: "", password: "", remember: true }}
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
                                <Link href="/forgot-password" style={styles.boldLink}> Forgot Password </Link>
                            </View>

                            <Submit 
                                label="Sign in" 
                                loading={false} 
                                disable={values["email"].length <= 0 || values["password"].length <= 0}
                            />
                            

                            <OrDivider />
                            <LoginWithSocials hasText={false} />


                            <Text style={styles.link}> Don't have an account ? <Link href={"/signup"} style={styles.boldLink}>Signup</Link></Text>
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
        marginBottom: 24,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    row: {
        marginVertical: 15,
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