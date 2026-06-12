import AppHeader from "@/components/AppHeader";
import styles from "@/styles/billing2/customerStyles";

import { router } from "expo-router";

import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function CreateCustomer() {
  return (
    <View style={styles.container}>
      <AppHeader />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          {/* BACK BUTTON */}

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

            <TextInput placeholder="Customer Name" style={styles.input} />
          </View>

          {/* NIC */}

          <View style={styles.field}>
            <Text style={styles.label}>NIC *</Text>

            <TextInput placeholder="NIC Number" style={styles.input} />
          </View>

          {/* Mobile */}

          <View style={styles.field}>
            <Text style={styles.label}>Mobile *</Text>

            <TextInput
              placeholder="Mobile Number"
              keyboardType="phone-pad"
              style={styles.input}
            />
          </View>

          {/* Email */}

          <View style={styles.field}>
            <Text style={styles.label}>Email</Text>

            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              style={styles.input}
            />
          </View>

          <View style={styles.line} />

          {/* Address */}

          <Text style={styles.label}>Home Address</Text>

          <TextInput
            placeholder="Address"
            multiline
            numberOfLines={4}
            style={styles.address}
          />

          {/* Add Customer */}

          <TouchableOpacity style={styles.addBtn}>
            <Text>Add Customer</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
