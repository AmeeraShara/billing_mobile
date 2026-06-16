import AppHeader from "@/components/AppHeader";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function TodayInvoices() {
  return (
    <View style={styles.container}>
      <AppHeader />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.titleBox}>
          <Text style={styles.title}>
            List of ALL Invoices, Payments and Return Invoices
          </Text>
          <Text style={styles.date}>2026-06-15</Text>
        </View>

        {/* Legend */}
        <View style={styles.legendRow}>
          <View style={styles.legendItem}>
            <View style={[styles.colorBox, { backgroundColor: "red" }]} />
            <Text>Discounted Inv</Text>
          </View>

          <View style={styles.legendItem}>
            <View style={[styles.colorBox, { backgroundColor: "green" }]} />
            <Text>Cash</Text>
          </View>

          <View style={styles.legendItem}>
            <View style={[styles.colorBox, { backgroundColor: "#14B8A6" }]} />
            <Text>Bank</Text>
          </View>

          <View style={styles.legendItem}>
            <View style={[styles.colorBox, { backgroundColor: "blue" }]} />
            <Text>Cheque</Text>
          </View>

          <View style={styles.legendItem}>
            <View style={[styles.colorBox, { backgroundColor: "black" }]} />
            <Text style={{ color: "black" }}>Credit</Text>
          </View>
        </View>

        {/* Completed Invoices */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Today Invoices [Completed]</Text>
          </View>

          <View style={styles.tableHeader}>
            <Text style={styles.headerCell}>#</Text>
            <Text style={styles.headerCell}>Invoice No</Text>
            <Text style={styles.headerCell}>Time</Text>
            <Text style={styles.headerCell}>Amount</Text>
            <Text style={styles.headerCell}>Customer</Text>
          </View>

          <View style={styles.emptyRow}>
            <Text>No completed invoices</Text>
          </View>
        </View>

        {/* Pending Invoices */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Pending Invoices</Text>
          </View>

          <View style={styles.tableHeader}>
            <Text style={styles.headerCell}>#</Text>
            <Text style={styles.headerCell}>Invoice No</Text>
            <Text style={styles.headerCell}>Date</Text>
            <Text style={styles.headerCell}>Amount</Text>
            <Text style={styles.headerCell}>Customer</Text>
          </View>

          <View style={styles.emptyRow}>
            <Text>No pending invoices</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },

  scrollContainer: {
    padding: 15,
  },

  titleBox: {
    backgroundColor: "#E5E5E5",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#8B0000",
    textAlign: "center",
  },

  date: {
    fontSize: 16,
    fontWeight: "700",
    color: "#8B0000",
    marginTop: 5,
  },

  legendRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  colorBox: {
    width: 20,
    height: 20,
    marginRight: 5,
  },

  section: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 2,
  },

  sectionHeader: {
    backgroundColor: "#D9D9D9",
    padding: 12,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
  },

  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#4285D4",
    paddingVertical: 12,
  },

  headerCell: {
    flex: 1,
    color: "#FFF",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 16,
  },

  emptyRow: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#FFF",
  },
});
