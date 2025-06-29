import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, ScrollView, Pressable, } from "react-native";
import { NoResult, SearchInput } from "@/components/main";
import { Products } from "@/containers";
import products from "@/data/products";
import { ProductDTO } from "@/dto/product.dto";
import { AntDesign } from "@expo/vector-icons";

const DEBOUNCE_DELAY = 300;

const Search = () => {
    const [search, setSearch] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState<ProductDTO[]>([]);
    const debounceRef = useRef<number | null>(null);

    useEffect(() => {
        if (!search.trim()) {
            setResults([]);
            return;
        }
        setIsLoading(true);
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(async () => {
            try {
                const response = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
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
        <View style={styles.page}>
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
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <Products 
                                    products={results}
                                />
                            </ScrollView>
                        )}
                    </View>
                )}

                { search.length <= 0 && (
                    <View style={{ paddingHorizontal: 24, flex: 1 }}>
                        <View style={[styles.resultCount, styles.recentSearchHeader]}>
                            <Text style={styles.label}>Recent search</Text>
                            <Pressable>
                                <Text style={styles.count}>Clear All</Text>
                            </Pressable>
                        </View>
                        <ScrollView style={{ flex: 1}} showsVerticalScrollIndicator={false}>
                            {[
                                "Chair", 
                                "Table",
                                "Foam Padded Chair",
                                "Mabel Flower Vase",
                                "Glass Package"
                            ].map((item, index)=> (
                                <RecentSearch 
                                    search={item}
                                    key={index}
                                    handleClear={()=> null}
                                />
                            ))}
                        </ScrollView>
                    </View>
                )}
            </View>
        </View>
    )
}

type RecentSearchProps = {
    search:     string;
    handleClear: ()=> void;
}


const RecentSearch = ({ search, handleClear } : RecentSearchProps) => {
    return (
        <Pressable>
            <View style={styles.row}>
                <Text style={styles.recentSearch}>{search}</Text>
                <View style={styles.iconBox}>
                    <AntDesign name="close" size={14} color={"#757575"}/>
                </View>
            </View>
        </Pressable>
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
        marginTop: 40,
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
        paddingHorizontal: 24,
    },
    resultCount: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
    },
    recentSearchHeader: {
        paddingBottom: 16, 
        borderBottomColor: "#757575",
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 0,
    },
    recentSearch: {
        color: "#757575",
        fontSize: 16,
    },
    iconBox: {
        borderColor: "#757575",
        borderWidth: 1,
        borderRadius: 8,
        padding: 4,
    },
});

export default Search;