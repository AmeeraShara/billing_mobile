import AppHeader from "@/components/AppHeader";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Billing2Menu() {
  const menus = [
    { title: "Sales", route: "/billing2/sales", icon: "cart-outline" },
    { title: "Billing", route: "/billing2/billing", icon: "receipt-outline" },
    { title: "Payment", route: "/billing2/payment", icon: "card-outline" },
    { title: "Today Inv", route: "/billing2/todayInvoices", icon: "calendar-outline" },
    { title: "Quotation", route: "/billing2/quotation", icon: "document-outline" },
    { title: "Cheque", route: "/billing2/cheque", icon: "cash-outline" },
    { title: "Return Chq", route: "/billing2/returnCheque", icon: "refresh-outline" },
    { title: "OPS", route: "/billing2/ops", icon: "construct-outline" },
    { title: "Item Return", route: "/billing2/itemReturn", icon: "arrow-undo-outline" },
    { title: "Drawer", route: "/billing2/drawer", icon: "wallet-outline" },
    { title: "Search", route: "/billing2/search", icon: "search-outline" },
    { title: "Warranty", route: "/billing2/warranty", icon: "shield-checkmark-outline" },
    { title: "Reports", route: "/billing2/reports", icon: "stats-chart-outline" },
  ];

  return (
    <View style={{ flex: 1 }}>
      <AppHeader />

      <ScrollView style={styles.container}>
        <Text style={styles.title}>BILL2 Modules</Text>

        <View style={styles.grid}>
          {menus.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => router.push(item.route as any)}
            >
              <Ionicons
                name={item.icon as any}
                size={28}
                color="#2563EB"
              />

              <Text style={styles.text}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#F5F5F5",
  },

  title: {
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
    paddingVertical: 22,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 15,
    elevation: 3,
  },

  text: {
    marginTop: 8,
    fontSize: 11,
    textAlign: "center",
    fontWeight: "700",
  },
});