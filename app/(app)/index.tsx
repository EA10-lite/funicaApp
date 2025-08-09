import { Header, SearchPlaceholder } from "@/src/components/main";
import { StyleSheet, SafeAreaView, View} from "react-native";
import { Categories, Products, SpecialOffers, Filters } from "@/containers";
import products from "@/src/data/products";
import { CustomScrollView } from "@/layout";

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <CustomScrollView>
        <View style={{ paddingHorizontal: 24, paddingVertical: 24}}>
          <SearchPlaceholder />
          <SpecialOffers />
          <Categories />
          <Products products={products}/>
        </View>
      </CustomScrollView>
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