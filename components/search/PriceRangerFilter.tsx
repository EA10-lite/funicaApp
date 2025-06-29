import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const screenWidth = Dimensions.get('window').width;

const PriceRangeFilter = () => {
    const [values, setValues] = useState([20, 140]);

    const onValuesChange = (values: number[]) => {
        setValues(values);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Price Range</Text>

            {/* Optional: Add histogram-style bars here */}

            <MultiSlider
                values={values}
                onValuesChange={onValuesChange}
                min={0}
                max={200}
                step={1}
                sliderLength={screenWidth - 48}
                selectedStyle={{ backgroundColor: 'black',}}
                unselectedStyle={{ backgroundColor: '#e2e2e2' }}
                trackStyle={{ height: 4 }}
                customMarker={() => <View style={styles.marker} />}
            />

            <View style={styles.priceLabels}>
                <Text style={styles.price}>${values[0]}</Text>
                <Text style={styles.price}>${values[1]}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
    },
    title: {
        fontSize: 16, 
        fontWeight: '600',
        marginBottom: 6,
    },
    marker: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: 'black',
        backgroundColor: 'white',
    },
    priceLabels: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price: {
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export default PriceRangeFilter;
