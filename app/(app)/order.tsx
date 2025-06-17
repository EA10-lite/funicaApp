import { Text, View, StyleSheet} from "react-native";

const Order = () => {
  return (
    <View style={styles.container}>
      <Text> Order </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})


export default Order;