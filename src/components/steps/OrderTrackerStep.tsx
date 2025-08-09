import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const steps = [
  { icon: 'box', label: 'Verified' },
  { icon: 'truck', label: 'Shipped' },
  { icon: 'users', label: 'Customs' },
  { icon: 'dropbox', label: 'Delivered' },
];

const currentStep = 2;

const OrderTrackerStep = () => {
    return (
        <View style={styles.container}>
            {steps.map((step, index) => {
                const isActive = index <= currentStep;
                const isLast = index === steps.length - 1;

                return (
                <React.Fragment key={index}>
                    <View style={styles.step}>
                        <FontAwesome5
                            name={step.icon}
                            size={24}
                            color={isActive ? '#000' : '#ccc'}
                        />
                    </View>
                    {!isLast && (
                        <View
                            style={[
                            styles.line,
                            { backgroundColor: index < currentStep ? '#000' : '#ccc' },
                            ]}
                        />
                    )}
                </React.Fragment>
                );
            })}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    step: {
        width: 38,
        height: 38,
        borderRadius: 18,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        height: 2,
        width: 40,
        backgroundColor: '#ccc',
    },
});

export default OrderTrackerStep;
