import AppHeader from "@/components/AppHeader";
import styles from "@/styles/billing2/customerStyles";

import { router } from "expo-router";
import { useState } from "react";

import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function CreateCustomer() {
  const [customerName, setCustomerName] = useState("");
  const [nic, setNic] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const saveCustomer = async () => {
    if (!customerName.trim()) {
      Alert.alert("Validation", "Customer Name is required");
      return;
    }

    if (!nic.trim()) {
      Alert.alert("Validation", "NIC is required");
      return;
    }

    if (!mobile.trim()) {
      Alert.alert("Validation", "Mobile Number is required");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        customer_name: customerName,
        nic: nic,
        mobile: mobile,
        email: email,
        address: address,
      };

      console.log("Sending Payload:", payload);

      const response = await fetch(
        "http://localhost:8000/api/create_customer.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();

      console.log("API Response:", data);

      if (data.success) {
        Alert.alert("Success", data.message);

        setCustomerName("");
        setNic("");
        setMobile("");
        setEmail("");
        setAddress("");

        router.replace("/billing2/sales");
      } else {
        Alert.alert("Error", data.message);
      }
    } catch (error) {
      console.log("API Error:", error);

      Alert.alert("Connection Error", "Cannot connect to PHP server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <AppHeader />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          {/* Back Button */}

          <TouchableOpacity
            style={styles.back}
            onPress={() => router.replace("/billing2/sales")}
          >
            <Text>Back</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Customer Detail</Text>

          {/* Customer Name */}

          <View style={styles.field}>
            <Text style={styles.label}>Customer Name *</Text>

            <TextInput
              placeholder="Customer Name"
              style={styles.input}
              value={customerName}
              onChangeText={setCustomerName}
            />
          </View>

          {/* NIC */}

          <View style={styles.field}>
            <Text style={styles.label}>NIC *</Text>

            <TextInput
              placeholder="NIC Number"
              style={styles.input}
              value={nic}
              onChangeText={setNic}
            />
          </View>

          {/* Mobile */}

          <View style={styles.field}>
            <Text style={styles.label}>Mobile *</Text>

            <TextInput
              placeholder="Mobile Number"
              keyboardType="phone-pad"
              style={styles.input}
              value={mobile}
              onChangeText={setMobile}
            />
          </View>

          {/* Email */}

          <View style={styles.field}>
            <Text style={styles.label}>Email</Text>

            <TextInput
              placeholder="Email Address"
              keyboardType="email-address"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.line} />

          {/* Address */}

          <Text style={styles.label}>Home Address</Text>

          <TextInput
            placeholder="Enter Address"
            multiline
            numberOfLines={4}
            style={styles.address}
            value={address}
            onChangeText={setAddress}
          />

          {/* Add Customer */}

          <TouchableOpacity
            style={styles.addBtn}
            onPress={saveCustomer}
            disabled={loading}
          >
            <Text>{loading ? "Saving..." : "Add Customer"}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
