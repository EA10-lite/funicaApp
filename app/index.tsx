import { Link } from "expo-router";
import { Text, View, StyleSheet} from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text> Home </Text>
      <Link href="/onboarding"> onboarding </Link>
      <Link href="/auth"> auth </Link>
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


export default Index;