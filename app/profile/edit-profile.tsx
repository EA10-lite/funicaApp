import { Field, Select } from "@/src/components/forms";
import { Button, GoBack } from "@/src/components/main";
import { useAuthContext } from "@/context/AuthContext";
import { Formik } from "formik";
import React from "react";
import { ScrollView, StyleSheet, View, } from "react-native";

const EditProfile = () => {
    const { user } = useAuthContext();

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <GoBack label="Edit Profile Info" />
            </View>
                <Formik
                    initialValues={{ 
                        email: user?.email || "", 
                        firstName: user?.firstName || "", 
                        lastName: user?.lastName || "", 
                        country: user?.country || "", 
                        gender: user?.country || "", 
                        phone: user?.phone || "" 
                    }}
                    onSubmit={(values)=> console.log(values)}
                >
                    {()=> (
                        <>
                            <ScrollView style={styles.view}>
                                <View style={styles.body}>
                                    <Field 
                                        name="firstName"
                                        type="default"
                                        label="First Name"
                                    />
                                    <Field 
                                        name="lastName"
                                        type="default"
                                        label="Last Name"
                                    />
                                    <Field 
                                        name="email"
                                        type="email-address"
                                        label="Email Address"
                                    />
                                    <Select 
                                        name="country"
                                        options={["Ghana", "Nigeria", "Kenya", "Uganda", "South Africa", "Congo"]}
                                        placeholder=""
                                        label="Country"
                                    />
                                </View>
                            </ScrollView>
                            <View style={styles.footer}>
                                <Button
                                    label="Update"
                                    variant="dark"
                                />
                            </View>
                        </>
                    )}
                </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    view: {
        flex: 1,
        paddingVertical: 24,
    },
    head: {
        height: 80,
        marginBottom: 24,
    },
    body: {
        paddingHorizontal: 24,
        paddingBottom: 120,
    },
    
    field: {
        marginBottom: 24,
    },
    footer: {
        position: 'absolute',
        bottom: 44,
        width: '100%',
        paddingHorizontal: 24,
    },
});

export default EditProfile;