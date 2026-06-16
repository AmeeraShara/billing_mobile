import AppHeader from "@/components/AppHeader";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Payment() {
  const [customer, setCustomer] = useState("");
  const [mobile, setMobile] = useState("");
  const [salesman, setSalesman] = useState("");
  const [paymentNo, setPaymentNo] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");

  return (
    <View style={styles.container}>
      <AppHeader />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.headerBox}>
          <Text style={styles.headerText}>Customer Payment</Text>
        </View>

        {/* Customer Form */}
        <View style={styles.card}>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Customer</Text>
            <TextInput
              style={styles.input}
              placeholder="Customer Name"
              value={customer}
              onChangeText={setCustomer}
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Mobile</Text>
            <TextInput
              style={styles.input}
              value={mobile}
              onChangeText={setMobile}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Salesman</Text>
            <TextInput
              style={styles.input}
              value={salesman}
              onChangeText={setSalesman}
            />
          </View>

          <TouchableOpacity style={styles.getButton}>
            <Text style={styles.buttonText}>Get Data</Text>
          </TouchableOpacity>
        </View>

        {/* Payment Section */}
        <View style={styles.card}>
          <View style={styles.paymentTypes}>
            <View style={styles.paymentItem}>
              <View style={[styles.colorBox, { backgroundColor: "#0ea500" }]} />
              <Text>Cash</Text>
            </View>

            <View style={styles.paymentItem}>
              <View style={[styles.colorBox, { backgroundColor: "#c13aa8" }]} />
              <Text>Card</Text>
            </View>

            <View style={styles.paymentItem}>
              <View style={[styles.colorBox, { backgroundColor: "#00a6a6" }]} />
              <Text>Bank</Text>
            </View>

            <View style={styles.paymentItem}>
              <View style={[styles.colorBox, { backgroundColor: "#1a1aff" }]} />
              <Text>Cheque</Text>
            </View>
          </View>

          <View style={styles.searchRow}>
            <TextInput
              style={styles.searchInput}
              placeholder="Payment Number"
              value={paymentNo}
              onChangeText={setPaymentNo}
            />
            <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.searchIcon}>🔍</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.searchRow}>
            <TextInput
              style={styles.searchInput}
              placeholder="Cheque Payments by Invoice No"
              value={invoiceNo}
              onChangeText={setInvoiceNo}
            />
            <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.searchIcon}>🔍</Text>
            </TouchableOpacity>
          </View>

          {/* Table Header */}
          <View style={styles.tableHeader}>
            <Text style={styles.headerCell}>Date</Text>
            <Text style={styles.headerCell}>Payment ID</Text>
            <Text style={styles.headerCell}>Amount</Text>
          </View>

          {/* Row 1 */}
          <View style={styles.tableRow}>
            <Text style={styles.cell}>Invoice Amount</Text>
            <Text style={styles.cell}></Text>
            <Text style={styles.cell}>0.00</Text>
          </View>

          {/* Row 2 */}
          <View style={styles.tableRow}>
            <Text style={styles.cell}>Remaining Amount</Text>
            <Text style={styles.cell}></Text>
            <Text style={styles.cell}>0.00</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },

  scrollContainer: {
    padding: 12,
  },

  headerBox: {
    backgroundColor: "#e8e8e8",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },

  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0057b8",
  },

  card: {
    backgroundColor: "#e8e8e8",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  label: {
    width: 90,
    fontSize: 16,
    fontWeight: "500",
  },

  input: {
    flex: 1,
    height: 45,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#98c898",
    borderRadius: 6,
    paddingHorizontal: 10,
  },

  getButton: {
    alignSelf: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 25,
    paddingVertical: 12,
    marginTop: 10,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },

  paymentTypes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  paymentItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  colorBox: {
    width: 24,
    height: 24,
    marginRight: 5,
  },

  searchRow: {
    flexDirection: "row",
    marginBottom: 10,
  },

  searchInput: {
    flex: 1,
    height: 45,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
    paddingHorizontal: 10,
  },

  searchButton: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },

  searchIcon: {
    fontSize: 24,
  },

  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#3d6d94",
    paddingVertical: 10,
    marginTop: 10,
  },

  headerCell: {
    flex: 1,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

  tableRow: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 12,
  },

  cell: {
    flex: 1,
    textAlign: "center",
    fontSize: 15,
  },
});
