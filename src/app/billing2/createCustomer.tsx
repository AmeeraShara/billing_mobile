import AppHeader from "@/components/AppHeader";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "./customerStyles";

export default function CreateCustomer() {
  const [customerName, setCustomerName] = useState("");
  const [nic, setNic] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    customerName?: string;
    nic?: string;
    mobile?: string;
    email?: string;
    address?: string;
  }>({});

  // Frontend Validation
  const validateForm = (): boolean => {
    const newErrors: {
      customerName?: string;
      nic?: string;
      mobile?: string;
      email?: string;
      address?: string;
    } = {};

    // Customer Name Validation
    const trimmedName = customerName.trim();
    if (!trimmedName) {
      newErrors.customerName = "Customer Name is required";
    } else if (trimmedName.length < 2) {
      newErrors.customerName = "Name must be at least 2 characters";
    } else if (trimmedName.length > 100) {
      newErrors.customerName = "Name must not exceed 100 characters";
    } else if (!/^[a-zA-Z\s\-\.']+$/.test(trimmedName)) {
      newErrors.customerName = "Name contains invalid characters";
    }

    // NIC Validation (Sri Lanka)
    const trimmedNic = nic.trim().toUpperCase();
    if (!trimmedNic) {
      newErrors.nic = "NIC is required";
    } else {
      const nicPattern = /^([0-9]{9}[VX]|[0-9]{12})$/;
      if (!nicPattern.test(trimmedNic)) {
        newErrors.nic = "Invalid NIC format. Use 9 digits + V/X or 12 digits";
      }
    }

    // Mobile Validation (Sri Lanka)
    const trimmedMobile = mobile.trim();
    if (!trimmedMobile) {
      newErrors.mobile = "Mobile Number is required";
    } else {
      const cleanMobile = trimmedMobile.replace(/[\s\-+()]/g, '');
      const mobilePattern = /^(?:0|94)?[0-9]{9}$/;
      if (!mobilePattern.test(cleanMobile)) {
        newErrors.mobile = "Invalid mobile format. Use 07XXXXXXXXX or 947XXXXXXXX";
      } else {
        const mobileClean = cleanMobile.replace(/^(?:94)?0?/, '');
        if (mobileClean.length !== 9) {
          newErrors.mobile = "Mobile must have exactly 9 digits after prefix";
        }
      }
    }

    // Email Validation (optional but validate if provided)
    const trimmedEmail = email.trim();
    if (trimmedEmail) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(trimmedEmail)) {
        newErrors.email = "Invalid email format";
      } else if (trimmedEmail.length > 100) {
        newErrors.email = "Email must not exceed 100 characters";
      }
    }

    // Address Validation (optional but validate if provided)
    const trimmedAddress = address.trim();
    if (trimmedAddress && trimmedAddress.length < 5) {
      newErrors.address = "Address must be at least 5 characters";
    } else if (trimmedAddress && trimmedAddress.length > 500) {
      newErrors.address = "Address must not exceed 500 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearFieldError = (field: keyof typeof errors) => {
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  const saveCustomer = async () => {
    // Validate form
    if (!validateForm()) {
      const firstError = Object.values(errors)[0];
      if (firstError) {
        Alert.alert("Validation Error", firstError);
      }
      return;
    }

    try {
      setLoading(true);

      // Clean mobile number
      const cleanMobile = mobile.trim().replace(/[\s\-+()]/g, '');

      const payload = {
        customer_name: customerName.trim(),
        nic: nic.trim().toUpperCase(),
        mobile: cleanMobile,
        email: email.trim(),
        address: address.trim(),
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
        }
      );

      const data = await response.json();

      console.log("API Response:", data);

      if (data.success) {
        // Reset form
        setCustomerName("");
        setNic("");
        setMobile("");
        setEmail("");
        setAddress("");
        setErrors({});
        setLoading(false);
        
        // Show brief success message
        Alert.alert(
          "✅ Success",
          data.message || "Customer added successfully!",
          [{ text: "OK" }]
        );
        
        // ✅ Redirect immediately after showing alert
        // Use setTimeout to ensure alert shows briefly
        setTimeout(() => {
          router.replace("/billing2/sales");
        }, 100);
        
      } else {
        setLoading(false);
        // Handle validation errors from backend
        if (data.errors && Array.isArray(data.errors)) {
          Alert.alert("Validation Error", data.errors.join("\n"));
        } else {
          Alert.alert("Error", data.message || "Failed to add customer");
        }
      }
    } catch (error) {
      console.log("API Error:", error);
      setLoading(false);
      Alert.alert(
        "Connection Error",
        "Cannot connect to server. Please check your connection and try again."
      );
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <AppHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.card}>
          {/* Back Button */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.replace("/billing2/sales")}
            activeOpacity={0.7}
          >
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Add New Customer</Text>
          <Text style={styles.subtitle}>Fill in the details below</Text>

          <View style={styles.divider} />

          {/* Customer Name */}
          <View style={styles.field}>
            <Text style={styles.label}>
              Customer Name <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              placeholder="Enter full name"
              style={[styles.input, errors.customerName && styles.inputError]}
              value={customerName}
              onChangeText={(text) => {
                setCustomerName(text);
                clearFieldError("customerName");
              }}
              maxLength={100}
              editable={!loading}
            />
            {errors.customerName && (
              <Text style={styles.errorText}>{errors.customerName}</Text>
            )}
          </View>

          {/* NIC */}
          <View style={styles.field}>
            <Text style={styles.label}>
              NIC <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              placeholder="e.g., 123456789V or 200012345678"
              style={[styles.input, errors.nic && styles.inputError]}
              value={nic}
              onChangeText={(text) => {
                setNic(text.toUpperCase());
                clearFieldError("nic");
              }}
              autoCapitalize="characters"
              maxLength={12}
              editable={!loading}
            />
            {errors.nic && <Text style={styles.errorText}>{errors.nic}</Text>}
            <Text style={styles.helperText}>
              Format: 9 digits + V/X or 12 digits
            </Text>
          </View>

          {/* Mobile */}
          <View style={styles.field}>
            <Text style={styles.label}>
              Mobile <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              placeholder="e.g., 0712345678"
              keyboardType="phone-pad"
              style={[styles.input, errors.mobile && styles.inputError]}
              value={mobile}
              onChangeText={(text) => {
                setMobile(text);
                clearFieldError("mobile");
              }}
              maxLength={12}
              editable={!loading}
            />
            {errors.mobile && (
              <Text style={styles.errorText}>{errors.mobile}</Text>
            )}
            <Text style={styles.helperText}>
              Format: 07XXXXXXXXX or 947XXXXXXXX
            </Text>
          </View>

          {/* Email */}
          <View style={styles.field}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="Enter email address"
              keyboardType="email-address"
              style={[styles.input, errors.email && styles.inputError]}
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                clearFieldError("email");
              }}
              autoCapitalize="none"
              maxLength={100}
              editable={!loading}
            />
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          </View>

          {/* Address */}
          <View style={styles.field}>
            <Text style={styles.label}>Home Address</Text>
            <TextInput
              placeholder="Enter complete address"
              multiline
              numberOfLines={4}
              style={[styles.addressInput, errors.address && styles.inputError]}
              value={address}
              onChangeText={(text) => {
                setAddress(text);
                clearFieldError("address");
              }}
              maxLength={500}
              editable={!loading}
              textAlignVertical="top"
            />
            {errors.address && (
              <Text style={styles.errorText}>{errors.address}</Text>
            )}
          </View>

          {/* Add Customer Button */}
          <TouchableOpacity
            style={[styles.addButton, loading && styles.addButtonDisabled]}
            onPress={saveCustomer}
            disabled={loading}
            activeOpacity={0.8}
          >
            {loading ? (
              <ActivityIndicator color="#ffffff" size="small" />
            ) : (
              <Text style={styles.addButtonText}>Add Customer</Text>
            )}
          </TouchableOpacity>

          {/* Cancel Button */}
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => router.replace("/billing2/sales")}
            disabled={loading}
            activeOpacity={0.7}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}