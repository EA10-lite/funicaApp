import { PageHeader } from "@/components/main";
import { useSession } from "@/context/AuthContext";
import { Entypo, Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Text, View, StyleSheet, ScrollView, Pressable, SafeAreaView} from "react-native";

const Profile = () => {
  const { user } = useSession();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <PageHeader pageTitle="My Profile" />
        </View>

        <ScrollView 
          style={styles.view} 
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <View style={styles.imgContainer}>
              <Image 
                source={"https://media.gettyimages.com/id/1460124878/photo/social-media-connection-and-woman-typing-on-a-phone-for-communication-app-and-chat-web-search.jpg?s=612x612&w=0&k=20&c=fJvxm6AuV1B0RkSKPx9BOuy-JQTevt1Ah0kySJ_GeRY="} 
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
              <Pressable style={styles.editBtn}>
                <Entypo name="edit" size={16} color="white" />
              </Pressable>
            </View>

            <View className="">
              <Text style={styles.title}>{user?.lastName} {user?.firstName}</Text>
              <Text style={styles.subtitle}>{user?.phone}</Text>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.fields}>  
              <View style={{ borderBottomWidth: 1, borderBottomColor: "#efefef"}}>
                <Field 
                  title="Edit Profile" 
                  icon="user" 
                  handlePress={()=> router.push("/profile/edit-profile")} 
                />
                <Field 
                  title="Address" 
                  icon="map" 
                  handlePress={()=> router.push("/profile/address")} 
                />
                <Field 
                  title="Wishlist" 
                  icon="heart" 
                  handlePress={()=> router.push("/profile/wishlist")} 
                />
              </View>

              <View style={{ borderBottomWidth: 1, borderBottomColor: "#efefef"}}>
                <Field 
                  title="Notification" 
                  icon="bell" 
                  handlePress={()=> router.push("/profile/notification")} 
                />
                <Field 
                  title="Securiry" 
                  icon="lock" 
                  handlePress={()=> router.push("/profile/settings")} 
                />
                <Field 
                  title="Theme" 
                  icon="sun" 
                  handlePress={()=> router.push("/profile/theme")} 
                />
              </View>
              <View style={{ borderBottomWidth: 1, borderBottomColor: "#efefef"}}>
                <Field 
                  title="Help Center" 
                  icon="info" 
                  handlePress={()=> router.push("/profile/wishlist")} 
                />
                <Field 
                  title="Privacy Policy" 
                  icon="lock" 
                  handlePress={()=> router.push("/profile/wishlist")} 
                />
                <Field 
                  title="Invite Friends" 
                  icon="users" 
                  handlePress={()=> router.push("/profile/wishlist")} 
                />
              </View>
              <View>
                <Field title="Logout" icon="log-out"  />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

type FeatherIcon = "user" | "users" | "heart" | "lock" | "bell" | "map-pin" | "map" | "sun" | "info" | "log-out";

type FieldProps = {
  title:        string;
  handlePress?: ()=> void;
  icon:         FeatherIcon;
}

const Field = ({ title, handlePress, icon}: FieldProps) => {
  return (
    <Pressable onPress={handlePress}>
      <View style={styles.field}>
        <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
          <Feather name={icon} size={20} color="black" />
          <Text style={styles.fieldTtile}>{ title }</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  pageHeader: {
    paddingHorizontal: 24,
  },
  view: { 
    paddingHorizontal: 24,
    paddingVertical: 44,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#efefef",
    borderBottomWidth: 1,
    paddingBottom: 16,
    marginBottom: 16,
  },
  imgContainer: {
    marginBottom: 8
  },
  editBtn: {
    width: 24,
    height: 24,
    backgroundColor: "#111110",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 0,
    bottom: 10,
    zIndex: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: '400'
  },
  body: {},
  fields: {
    marginBottom: 24,
  },
  field: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  fieldTtile: {
    fontSize: 15,
    fontWeight: '400',
  },
})


export default Profile;