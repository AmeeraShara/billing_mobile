import { useRouter } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Text style={styles.heading}>Login</Text>

        <Text style={styles.subText}>Please enter username and password.</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.rememberRow}>
          <Switch value={remember} onValueChange={setRemember} />
          <Text style={styles.rememberText}>Remember me</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/dashboard")}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A9A4E6",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  loginBox: {
    width: "95%",
    backgroundColor: "#C7C4F0",
    padding: 30,
    borderWidth: 1,
    borderColor: "#999",
  },

  heading: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  subText: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  label: {
    width: 100,
    fontSize: 18,
  },

  input: {
    width: 220,
    height: 40,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#888",
    paddingHorizontal: 10,
  },

  rememberRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },

  rememberText: {
    fontSize: 18,
    marginLeft: 10,
  },

  button: {
    alignSelf: "center",
    width: 200,
    backgroundColor: "#E5E5E5",
    borderWidth: 1,
    borderColor: "#888",
    paddingVertical: 10,
    marginTop: 15,
  },

  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "#000",
  },
});
