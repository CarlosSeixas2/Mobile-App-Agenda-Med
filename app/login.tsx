import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useState } from "react";
import { Link } from "expo-router";

export default function LoginScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle="light-content" /> */}

      <Image
        source={require("../assets/images/image-login.jpg")}
        style={styles.imageTop}
        resizeMode="cover"
      />

      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>
          Acesse seu perfil com o login fornecido pela nutricionista
        </Text>

        <Text style={styles.inputLabel}>Email</Text>
        <View style={styles.inputContainer}>
          <Icon
            name="mail-outline"
            size={20}
            color="#4285F4"
            style={styles.icon}
          />
          <TextInput
            placeholder="roberto@dimo.com"
            placeholderTextColor="#597492"
            style={styles.input}
            keyboardType="email-address"
          />
        </View>

        <Text style={styles.inputLabel}>Senha</Text>
        <View style={styles.inputContainer}>
          <Icon
            name="lock-closed-outline"
            size={20}
            color="#4285F4"
            style={styles.icon}
          />
          <TextInput
            placeholder="********"
            placeholderTextColor="#597492"
            style={styles.input}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            style={styles.eyeIconContainer}
            onPress={togglePasswordVisibility}
          >
            <Icon
              name={passwordVisible ? "eye-outline" : "eye-off-outline"}
              size={20}
              color="#597492"
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Link href={"/"} style={styles.forgotPassword}>
            Esqueceu sua senha?
          </Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Ou faça login com</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <AntDesign name="google" size={20} />
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={20} color="#3b5998" />
            <Text style={styles.socialText}>Facebook</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.registerText}>
          Não tem uma conta?{" "}
          <Link href={"/"} style={styles.registerLink}>
            Cadastre-se
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  imageTop: {
    width: "100%",
    height: 240,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 41,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0D1B34",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#597492",
    marginBottom: 24,
    lineHeight: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: "#0D1B34",
    marginBottom: 6,
    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    marginBottom: 16,
    height: 48,
    paddingHorizontal: 12,
  },
  icon: {
    marginRight: 8,
  },
  eyeIconContainer: {
    padding: 4,
  },
  eyeIcon: {
    marginLeft: "auto",
  },
  input: {
    flex: 1,
    color: "#0D1B34",
    fontSize: 14,
  },
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginBottom: 24,
  },
  forgotPassword: {
    color: "#597492",
    fontSize: 12,
  },
  loginButton: {
    backgroundColor: "#4285F4",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 16,
  },
  loginButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  orText: {
    textAlign: "center",
    color: "#597492",
    fontSize: 14,
    marginVertical: 16,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    width: "48%",
    gap: 8,
  },
  socialText: {
    fontSize: 14,
    color: "#0D1B34",
  },
  registerText: {
    textAlign: "left",
    fontSize: 14,
    color: "#888888",
    marginTop: 8,
  },
  registerLink: {
    color: "#4894FE",
    fontWeight: "bold",
  },
});
