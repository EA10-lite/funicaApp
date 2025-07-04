import { Button } from "@/components/main";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";
import { router } from "expo-router";
import React, { useState } from "react";
import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";

const onboardingImage1 = require("@/assets/images/img-1.jpg");
const onboardingImage2 = require("@/assets/images/img-3.jpg");
const onboardingImage3 = require("@/assets/images/img-4.jpg");

// const onboardingImage1 = require("@/assets/images/undraw_successful-purchase.png");
// const onboardingImage2 = require("@/assets/images/undraw_certificate.png");
// const onboardingImage3 = require("@/assets/images/undraw_happy-news.png");


type imageProps = {
    uri: ImageSourcePropType
}
const ImagePlaceholder = ({ uri } : imageProps) => {
    return (
        <Image 
            source={uri} 
            style={styles.image}
        />
    )
}

const Onboarding = () => {
    const [step, setStep] = useState<number>(1);

    const goToNext = () => {
        if(step < 3) {
            setStep(prevStep => prevStep + 1);
        }
        else {
            AsyncStorage.setItem('isOnboarded', 'true');
            router.replace("/auth");
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.imgPlaceholder}>
                <ImagePlaceholder 
                    uri={
                        step === 1 ? onboardingImage1 : 
                        step === 2 ? onboardingImage2 :
                        onboardingImage3 
                    }
                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.text}>
                    {
                        step === 1 ? "We provide high quality product just for you" :
                        step === 2 ? "Your satisfaction is our number one priority" : 
                        "Let's fulfill your house needs with Funica right now!"
                    }
                </Text>
                <View style={styles.sliders}>
                    <View style={[styles.slider, step === 1 && styles.activeSlider]} />
                    <View style={[styles.slider, step === 2 && styles.activeSlider]} />
                    <View style={[styles.slider, step === 3 && styles.activeSlider]} />
                </View>

                <View style={{ width: "100%" }}>
                    <Button 
                        label={step === 3 ? "Get Started" : "Next"} 
                        onPress={goToNext} 
                        variant="dark" 
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    imgPlaceholder: {
        flex: 0.65,
        alignItems: "center",
        justifyContent: "center",
    },
    footer: {
        flex: 0.35,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        padding: 20,
        width: "100%",
    },
    image: {
        height: "100%",
        resizeMode: "cover",
        width: "100%",
    },
    text: {
        fontSize: 38,
        lineHeight: 44,
        fontWeight: 600,
        textAlign: "center",
    },
    sliders: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
    },
    slider: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#dfe0df"
    },
    activeSlider: {
        width: 30,
        borderRadius: 8,
        backgroundColor: "#000"
    }
})

export default Onboarding;