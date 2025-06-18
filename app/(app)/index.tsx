import { Header } from "@/components/main";
import { Products } from "@/containers";
import products from "@/data/products";
import { StyleSheet, SafeAreaView, ScrollView} from "react-native";

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Products 
          products={products}
        />
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