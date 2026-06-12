import AppHeader from "@/components/AppHeader";
import styles from "@/styles/billing2/salesStyles";

import { router } from "expo-router";

import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Sales() {
  return (
    <View style={styles.container}>
      <AppHeader />

      <ScrollView>
        <View style={styles.card}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>Sales Billing</Text>

            <TouchableOpacity style={styles.dropdown}>
              <Text>District</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Customer</Text>

            <TextInput placeholder="Customer Name" style={styles.input} />
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Mobile</Text>

            <TextInput keyboardType="phone-pad" style={styles.input} />
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Salesman</Text>

            <TextInput style={styles.input} />
          </View>

          <View style={styles.buttons}>
            {/* ✅ UPDATED BUTTON */}
            <TouchableOpacity
              style={styles.btn}
              onPress={() => router.push("/billing2/bill_item")}
            >
              <Text>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn}
              onPress={() => router.push("/billing2/createCustomer")}
            >
              <Text>Create Cust</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.searchCard}>
          <Text style={styles.searchTitle}>Search Customer</Text>

          {[
            "Invoice Number",
            "Customer ID",
            "Customer Name",
            "Mobile Number",
            "Unique ID",
          ].map((item, index) => (
            <View key={index} style={styles.searchRow}>
              <TextInput placeholder={item} style={styles.searchInput} />

              <TouchableOpacity style={styles.searchBtn}>
                <Text>Search</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
