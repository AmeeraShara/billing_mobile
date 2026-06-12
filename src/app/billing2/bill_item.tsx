import AppHeader from "@/components/AppHeader";
import styles from "@/styles/billing2/bill_item";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function BillItem() {
  const { bill_no, cust_odr } = useLocalSearchParams();

  const [discountType, setDiscountType] = useState<"RS" | "%">("RS");

  return (
    <View style={styles.container}>
      <AppHeader />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <Text style={styles.title}>Sales Billing</Text>

          <View style={styles.billInfo}>
            <Text style={styles.billText}>
              Bill No : {bill_no || "T0000122"}
            </Text>
            <Text style={styles.billText}>
              Customer Order : {cust_odr || "N/A"}
            </Text>
          </View>

          <Text style={styles.sectionTitle}>Customer Details</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Customer Name</Text>
            <TextInput placeholder="Customer Name" style={styles.input} />
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>NIC</Text>
            <TextInput placeholder="NIC Number" style={styles.input} />
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Mobile</Text>
            <TextInput
              placeholder="Mobile Number"
              keyboardType="phone-pad"
              style={styles.input}
            />
          </View>

          <Text style={styles.sectionTitle}>Add Item</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Item Code</Text>
            <TextInput placeholder="Item Code" style={styles.input} />
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Item Description</Text>
            <TextInput placeholder="Item Description" style={styles.input} />
          </View>

          <View style={styles.doubleRow}>
            <View style={styles.half}>
              <Text style={styles.label}>Quantity</Text>
              <TextInput keyboardType="numeric" style={styles.input} />
            </View>

            <View style={styles.half}>
              <Text style={styles.label}>Unit Price</Text>
              <TextInput keyboardType="numeric" style={styles.input} />
            </View>
          </View>

          {/* Discount Section */}
          <View style={styles.row}>
            <Text style={styles.label}>Discount</Text>

            <View style={styles.discountContainer}>
              <TextInput
                placeholder="0.00"
                keyboardType="numeric"
                style={styles.discountInput}
              />

              <View style={styles.discountTypeGroup}>
                <TouchableOpacity
                  style={[
                    styles.discountOption,
                    discountType === "RS" && styles.discountOptionActive,
                  ]}
                  onPress={() => setDiscountType("RS")}
                >
                  <Text
                    style={[
                      styles.discountOptionText,
                      discountType === "RS" && styles.discountOptionTextActive,
                    ]}
                  >
                    Rs
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.discountOption,
                    discountType === "%" && styles.discountOptionActive,
                  ]}
                  onPress={() => setDiscountType("%")}
                >
                  <Text
                    style={[
                      styles.discountOptionText,
                      discountType === "%" && styles.discountOptionTextActive,
                    ]}
                  >
                    %
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.btnText}>+ Add To Bill</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.invoiceCard}>
          <Text style={styles.invoiceTitle}>Invoice Summary</Text>

          <View style={styles.summaryRow}>
            <Text>Returned Cheques</Text>
            <Text>0.00</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text>Postponed Cheques</Text>
            <Text>0.00</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text>Deposited Cheques</Text>
            <Text>0.00</Text>
          </View>
        </View>

        <View style={styles.creditCard}>
          <Text style={styles.invoiceTitle}>Credit Details</Text>

          <View style={styles.summaryRow}>
            <Text>Up To 30+</Text>
            <Text>4,000</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text>Up To 14+</Text>
            <Text>11,695</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text>Up To 7+</Text>
            <Text>11,695</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text>Up To Now</Text>
            <Text>11,695</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text>Remaining Credit Limit</Text>
            <Text>9,928,305</Text>
          </View>
        </View>

        <View style={styles.totalCard}>
          <Text style={styles.totalText}>Total Amount : Rs. 0.00</Text>
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.primaryBtn}>
            <Text style={styles.btnText}>Print Bill</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.deleteBtn}>
            <Text style={styles.btnText}>Delete Bill</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => router.push("/billing2/sales")}
          >
            <Text style={styles.btnText}>Save Bill</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
