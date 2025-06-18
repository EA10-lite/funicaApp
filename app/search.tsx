import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, } from "react-native";
import { NoResult, SearchInput } from "@/components/main";
import { Products } from "@/containers";
import products from "@/data/products";

const DEBOUNCE_DELAY = 300;

type Product = {
    id:         string;
    title:      string;
    price:      string;
    rating:     number;
    imageUri:   string;
}

const Search = () => {
    const [search, setSearch] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState<Product[]>([]);
    const debounceRef = useRef<number | null>(null);

    const handleSearch = () => {
        
    }

    useEffect(() => {
        if (!search.trim()) {
            setResults([]);
            return;
        }
        setIsLoading(true);
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(async () => {
            try {
                const response = products.filter(product => product.title.includes(search));
                setResults(response);
            } catch (e) {
                setResults([]);
            } finally {
                setIsLoading(false);
            }
        }, DEBOUNCE_DELAY);
        return () => {
            if (debounceRef.current) clearTimeout(debounceRef.current);
        };
    }, [search]);

    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.container}>
                <View style={styles.search}>
                    <SearchInput 
                        placeholder="search for furniture"
                        value={search}
                        handleChange={(value)=> setSearch(value)}
                        name="search"
                        isLoading={isLoading}
                        hasFilter={true}
                    />
                </View>
                { search.length > 1 && !isLoading && (
                    <View style={styles.resultCount}>
                        <Text style={styles.label}>Results for "{ search }"</Text>
                        <Text style={styles.count}>{ results.length } found</Text>
                    </View>
                )}

                { search.length > 0 && !isLoading && (
                    <View style={styles.result}>
                        {results.length <= 0 ? (
                            <NoResult 
                                title="Not Found"
                                subtitle="Sorry we couldn't find any product related to the search keyword. Please check again or try another search."
                            />
                        ) : (
                            <Products 
                                products={results}
                            />
                        )}
                    </View>
                )}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 24,
    },
    search: {
        marginBottom: 16,
        paddingHorizontal: 24,
    },
    label: {
        fontSize: 18,
        fontWeight: '600',
    },
    count: {
        fontSize: 14,
        fontWeight: '600'
    },
    result: {
        flexGrow: 1,
        marginTop: 24,
    },
    resultCount: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
});

export default Search;