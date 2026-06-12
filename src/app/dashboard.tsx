import AppHeader from "@/components/AppHeader";
import { Ionicons } from "@expo/vector-icons";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Dashboard() {
  const modules = [
    { title: "INV", icon: "cube-outline" },
    { title: "AVA", icon: "layers-outline" },
    { title: "BILL", icon: "receipt-outline" },
    { title: "BILL2", icon: "cash-outline" },
    { title: "Repair", icon: "construct-outline" },
    { title: "SUP", icon: "people-outline" },
    { title: "MGR", icon: "briefcase-outline" },
    { title: "PO", icon: "document-text-outline" },
    { title: "FIN", icon: "wallet-outline" },
    { title: "HR", icon: "person-circle-outline" },
    { title: "REP", icon: "stats-chart-outline" },
    { title: "SET", icon: "settings-outline" },
  ];

  return (
    <View style={{ flex: 1 }}>
      <AppHeader />

      <ScrollView style={styles.container}>
        <Text style={styles.heading}>Bill2 Mobile Dashboard</Text>

        <View style={styles.grid}>
          {modules.map((item, index) => (
            <TouchableOpacity key={index} style={styles.card}>
              <Ionicons name={item.icon as any} size={30} color="#2563EB" />

              <Text style={styles.cardText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 15,
  },

  heading: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "31%",
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 25,
    alignItems: "center",
    marginBottom: 15,
    elevation: 3,
  },

  cardText: {
    marginTop: 10,
    fontWeight: "700",
    fontSize: 13,
  },
});
