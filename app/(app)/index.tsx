import { Header } from "@/components/main";
import { StyleSheet, SafeAreaView, ScrollView} from "react-native";
import { Categories, Products, SpecialOffers, Filters } from "@/containers";
import products from "@/data/products";

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <SpecialOffers />
        <Categories />
        <Filters />
        <Products products={products}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
})


export default Index;