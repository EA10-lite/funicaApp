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
    marginTop: 104,
    flex: 1,
    justifyContent: "center"
  }
})


export default Profile;