import BottomTabNavigator from "@/components/BottomTabNavigator";
import { Link } from "expo-router";
import { TouchableOpacity, View, Text } from "react-native";

export default function App() {
  // return <BottomTabNavigator />;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href="/login" asChild>
        <TouchableOpacity
          style={{ padding: 10, backgroundColor: "#007AFF", borderRadius: 5 }}
        >
          <Text style={{ color: "white" }}>Go to Login</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/register-step-1" asChild>
        <TouchableOpacity
          style={{ padding: 10, backgroundColor: "#007AFF", borderRadius: 5 }}
        >
          <Text style={{ color: "white" }}>Go to Register </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
