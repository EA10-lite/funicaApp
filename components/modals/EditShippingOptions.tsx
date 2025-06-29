import React, { PropsWithChildren, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Modal from "react-native-modal";
import { Button, GoBack } from "@/components/main";
import { ShippingOption } from "@/components/checkout";
import { ShippingOptionDTO } from "@/dto/checkout.dto";

type EditShippingOptionProps = PropsWithChildren<{
    isOpen:             boolean;
    option:             ShippingOptionDTO;
    options:            ShippingOptionDTO[];
    closeModal:         () => void;
    chooseOption:       (option: ShippingOptionDTO) => void;
}>;

const EditShippingOptions = ({ isOpen, closeModal, chooseOption, option, options}: EditShippingOptionProps) => {
    const [selectedOption, setSelectedOption] = useState<ShippingOptionDTO>(option);

    const handleClick = () => {
        chooseOption(selectedOption);
        closeModal();
    }

    return (
        <Modal
            isVisible={isOpen}
            animationIn="slideInRight"
            animationOut="slideOutRight"
            onBackdropPress={closeModal}
            backdropOpacity={0}
            style={{ margin: 0 }}
        >
            <View style={styles.container}>
                <View style={styles.head}>
                    <GoBack 
                        label="Choose Shipping Type"
                        handlePress={closeModal}
                    />
                </View>
                <ScrollView style={styles.view}>
                    <View style={styles.body}>
                        { options.map((option, index)=> (
                            <View style={styles.field} key={index}>
                                <ShippingOption 
                                    isEditable={false}
                                    option={option}
                                    iconName={option.iconName}
                                    handleClick={()=> setSelectedOption(option)}
                                    isSelected={selectedOption?.type === option.type}
                                />
                            </View>
                        ))}
                    </View>
                </ScrollView>

                <View style={styles.footer}>
                    <Button 
                        label="Apply"
                        variant="dark"
                        onPress={handleClick}
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f3f3",
    },
    view: {
        flex: 1,
        paddingVertical: 20,
    },
    head: {
        height: 80,
        marginBottom: 24,
    },
    body: {
        paddingHorizontal: 24,
    },
    field: {
        marginBottom: 16,
    },
    footer: {
        position: 'absolute',
        bottom: 44,
        width: '100%',
        paddingHorizontal: 24,
    },
});

export default EditShippingOptions;