import { Text, View, StyleSheet} from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text> Profile </Text>
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


export default Profile;