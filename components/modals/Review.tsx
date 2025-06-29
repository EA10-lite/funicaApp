import React, { PropsWithChildren } from "react";
import { View, StyleSheet, Text, Modal, Pressable } from "react-native";
import { OrderCard } from "../cards";
import { OrderDTO } from "@/dto/product.dto";
import { Formik } from "formik";
import { Field, StarRating, Submit } from "../forms";


type ReviewProps = PropsWithChildren<{
    closeModal:     ()=> void;
    isOpen:         boolean;
    item:           OrderDTO | null;
}>;

const Review = ({ closeModal, isOpen, item } : ReviewProps) => {

    return (
        <Modal animationType="slide" transparent={true} visible={isOpen}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.title}>Leave Review</Text>
                    </View>

                    <Formik
                        initialValues={{ rating: "", review: ""}}
                        onSubmit={(values)=> console.log(values)}
                    >
                        {()=> (
                            <>
                                <View style={styles.modalBody}>
                                    { item && (
                                        <OrderCard 
                                            id={item.id}
                                            title={item.title}
                                            price={item.price}
                                            imageUri={item.imageUri}
                                            quantity={item.quantity}
                                            rating={item.rating}
                                            status="completed"
                                        />
                                    )}
                                </View>

                                <View style={styles.modalBody}>
                                    <Text style={styles.title}>How is your order?</Text>
                                    <Text style={styles.subtitle}>Please give us your rating and also your review...</Text>


                                    <StarRating 
                                        name="rating"
                                    />

                                    <Field 
                                        name="review"
                                        placeholder="Tell us what you think about the product"
                                        isActive={true}
                                    />
                                </View>

                                <View style={styles.modalFooter}>
                                    <View style={styles.btnContainer}>
                                        <Pressable onPress={closeModal} style={styles.cancelBtn}>
                                            <Text style={styles.btnText}>Cancel</Text>
                                        </Pressable>
                                    </View>

                                    <View style={styles.btnContainer}>
                                        <Submit 
                                            label="Submit"
                                            loading={false}
                                        />
                                    </View>

                                </View>
                            </>
                        )}
                    </Formik>

                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000000aa',
    },
    modalContent: {
        width: '100%',
        backgroundColor: '#fcfcfc',
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 24,
    },
    modalHeader: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 24,
        borderBottomWidth: 1,
        borderBlockColor: '#f3f3f3',
        backgroundColor: '#fcfcfc'
    },
    title: {
        fontSize: 20,
        fontWeight: '600', 
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
        marginVertical: 16,
    },
    modalBody: {
        paddingTop: 24,
        borderBottomWidth: 1,
        borderBlockColor: '#f3f3f3',
    },
    btnContainer: {
        width: '50%',
    },
    cancelBtn: {
        width: '100%',
        backgroundColor: "#e7e7e7",
        paddingHorizontal: 16,
        paddingVertical: 18,
        borderRadius: 133,
    },
    btnText: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    modalFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingVertical: 24,
    },
})

export default Review;