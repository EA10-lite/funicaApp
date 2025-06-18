import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, TextInput, StyleSheet} from "react-native";
import Loading from "./Loading";

type SearchInputProps = {
    placeholder?:   string;
    name:           string;
    value:          string;
    handleChange:   (text: string) => void;
    isLoading:      boolean;
    hasFilter:      boolean;
}

const SearchInput = ({
    placeholder,
    value,
    name,
    handleChange,
    isLoading,
    hasFilter,
} : SearchInputProps) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={[
            styles.search,
            isFocused && styles.activeInput,
        ]}>
            <Ionicons name="search-outline" size={20} color={isFocused ? "#000" : "#b9bdbe"} />
            <TextInput 
                placeholder={placeholder}
                placeholderTextColor="#5555"
                value={value}
                keyboardType="default"
                onChangeText={(text)=> handleChange(text)}
                onFocus={()=> setIsFocused(true)}
                onBlur={()=> setIsFocused(false)}
                style={[
                    styles.input
                ]}
            />

            {isLoading && (
                <Loading size={16} color="#000" />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        borderRadius: 16,
        backgroundColor: '#f5f5f5',
        paddingVertical: 16,
        paddingHorizontal: 16,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 6,
    },
    input: {
        flexGrow: 1,
    },
    activeInput: {
        borderColor: "#000",
        borderWidth: 1,
    },
});

export default SearchInput;