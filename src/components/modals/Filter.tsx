import React, { PropsWithChildren } from "react";
import { View, StyleSheet, Text, Modal, Pressable } from "react-native";
import { Button } from "../main";
import { CategoryFilter, PriceRangeFilter, RatingFilter, SortFilter } from "../search";


type ReviewProps = PropsWithChildren<{
    closeModal:     ()=> void;
    isOpen:         boolean;
}>;

const Filter = ({ closeModal, isOpen, } : ReviewProps) => {

    return (
        <Modal animationType="slide" transparent={true} visible={isOpen}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.title}>Sort & Filter</Text>
                    </View>

                    <View style={styles.modalBody}>
                        <CategoryFilter />
                        <PriceRangeFilter />
                        <SortFilter />
                        <RatingFilter />
                    </View>

                    <View style={styles.modalFooter}>
                        <View style={styles.btnContainer}>
                            <Pressable onPress={closeModal} style={styles.cancelBtn}>
                                <Text style={styles.btnText}>Reset</Text>
                            </Pressable>
                        </View>

                        <View style={styles.btnContainer}>
                            <Button 
                                label="Apply"
                                variant="dark"
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#2354A4aa',
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

export default Filter;