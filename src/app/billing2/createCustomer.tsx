import AppHeader from "@/components/AppHeader";
import { API_CONFIG } from "@/config/api";
import apiService from "@/services/apiService";
import { router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import styles from "./customerStyles";

export default function CreateCustomer() {
  const [customerName, setCustomerName] = useState("");
  const [nic, setNic] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [testLoading, setTestLoading] = useState(false);
  const [testResults, setTestResults] = useState<string>("");
  const [resultType, setResultType] = useState<"success" | "error" | "info">(
    "info",
  );
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

    const trimmedNic = nic.trim().toUpperCase();
    if (!trimmedNic) {
      newErrors.nic = "NIC is required";
    } else {
      const nicPattern = /^([0-9]{9}[VX]|[0-9]{12})$/;
      if (!nicPattern.test(trimmedNic)) {
        newErrors.nic = "Invalid NIC format. Use 9 digits + V/X or 12 digits";
      }
    }

    const trimmedMobile = mobile.trim();
    if (!trimmedMobile) {
      newErrors.mobile = "Mobile Number is required";
    } else {
      const cleanMobile = trimmedMobile.replace(/[\s\-+()]/g, "");
      const mobilePattern = /^(?:0|94)?[0-9]{9}$/;
      if (!mobilePattern.test(cleanMobile)) {
        newErrors.mobile =
          "Invalid mobile format. Use 07XXXXXXXXX or 947XXXXXXXX";
      } else {
        const mobileClean = cleanMobile.replace(/^(?:94)?0?/, "");
        if (mobileClean.length !== 9) {
          newErrors.mobile = "Mobile must have exactly 9 digits after prefix";
        }
      }
    }

    const trimmedEmail = email.trim();
    if (trimmedEmail) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(trimmedEmail)) {
        newErrors.email = "Invalid email format";
      } else if (trimmedEmail.length > 100) {
        newErrors.email = "Email must not exceed 100 characters";
      }
    }

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

  // Clear results
  const clearResults = () => {
    setTestResults("");
    setResultType("info");
  };

  // TEST API Function - GET
  const testApiGet = async () => {
    try {
      setTestLoading(true);
      setTestResults(" Testing GET API...");
      setResultType("info");

      console.log(" Testing API Connection...");
      console.log("API URL:", API_CONFIG.baseUrl);

      const response = await apiService.testGet({
        test_param: "Hello from mobile GET",
        user_id: "12345",
      });

      console.log(" GET Test Response:", response);

      if (response.success) {
        const result =
          ` GET API Test Successful!\n\n` +
          ` URL: ${API_CONFIG.baseUrl}\n` +
          ` Message: ${response.message || "Success"}\n` +
          ` Timestamp: ${response.timestamp || new Date().toISOString()}\n` +
          ` API Key: ${response.api_key_used || "N/A"}\n` +
          ` Params: ${JSON.stringify(response.received_params, null, 2)}`;

        setTestResults(result);
        setResultType("success");
      } else {
        const result =
          ` GET API Test Failed!\n\n` +
          `Error: ${response.message || "Unknown error"}\n` +
          `Code: ${response.error_code || "N/A"}`;

        setTestResults(result);
        setResultType("error");
      }
    } catch (error) {
      console.error("GET Test Error:", error);
      const result =
        ` GET API Test Error!\n\n` +
        `Error: ${error instanceof Error ? error.message : "Unknown error"}\n` +
        `Please check console for details.`;

      setTestResults(result);
      setResultType("error");
    } finally {
      setTestLoading(false);
    }
  };

  // TEST API Function - POST
  const testApiPost = async () => {
    try {
      setTestLoading(true);
      setTestResults(" Testing POST API...");
      setResultType("info");

      const payload = {
        test_data: "Hello from mobile POST",
        customer_name: "Test Customer",
        mobile: "0712345678",
        timestamp: new Date().toISOString(),
      };

      const response = await apiService.testPost(payload);

      console.log(" POST Test Response:", response);

      if (response.success) {
        const result =
          ` POST API Test Successful!\n\n` +
          ` URL: ${API_CONFIG.baseUrl}\n` +
          ` Message: ${response.message || "Success"}\n` +
          ` Timestamp: ${response.timestamp || new Date().toISOString()}\n` +
          ` API Key: ${response.api_key_used || "N/A"}\n` +
          ` Sent Data: ${JSON.stringify(payload, null, 2)}\n` +
          ` Received: ${JSON.stringify(response.received_params, null, 2)}`;

        setTestResults(result);
        setResultType("success");
      } else {
        const result =
          ` POST API Test Failed!\n\n` +
          `Error: ${response.message || "Unknown error"}\n` +
          `Code: ${response.error_code || "N/A"}`;

        setTestResults(result);
        setResultType("error");
      }
    } catch (error) {
      console.error("POST Test Error:", error);
      const result =
        ` POST API Test Error!\n\n` +
        `Error: ${error instanceof Error ? error.message : "Unknown error"}\n` +
        `Please check console for details.`;

      setTestResults(result);
      setResultType("error");
    } finally {
      setTestLoading(false);
    }
  };

  const saveCustomer = async () => {
    if (!validateForm()) {
      const firstError = Object.values(errors)[0];
      if (firstError) {
        Alert.alert("Validation Error", firstError);
      }
      return;
    }

    try {
      setLoading(true);
      setTestResults("");
      setResultType("info");

      const cleanMobile = mobile.trim().replace(/[\s\-+()]/g, "");

      const payload = {
        customer_name: customerName.trim(),
        nic: nic.trim().toUpperCase(),
        mobile: cleanMobile,
        email: email.trim(),
        address: address.trim(),
      };

      console.log(" Sending Payload:", payload);

      const response = await apiService.createCustomer(payload);

      console.log(" API Response:", response);

      if (response.success) {
        setCustomerName("");
        setNic("");
        setMobile("");
        setEmail("");
        setAddress("");
        setErrors({});
        setLoading(false);

        const result =
          ` Customer Added Successfully!\n\n` +
          ` Name: ${payload.customer_name}\n` +
          ` NIC: ${payload.nic}\n` +
          ` Mobile: ${payload.mobile}\n` +
          ` Email: ${payload.email || "N/A"}\n` +
          ` Address: ${payload.address || "N/A"}\n` +
          ` Message: ${response.message || "Success"}`;

        setTestResults(result);
        setResultType("success");

        Alert.alert(
          " Success",
          response.message || "Customer added successfully!",
          [{ text: "OK" }],
        );

        setTimeout(() => {
          router.replace("/billing2/sales");
        }, 100);
      } else {
        setLoading(false);
        const result =
          ` Failed to Add Customer!\n\n` +
          `Error: ${response.message || "Unknown error"}`;

        setTestResults(result);
        setResultType("error");

        Alert.alert("Error", response.message || "Failed to add customer");
      }
    } catch (error) {
      console.log(" API Error:", error);
      setLoading(false);

      const result =
        ` Connection Error!\n\n` +
        `Error: ${error instanceof Error ? error.message : "Unknown error"}\n` +
        `Please check:\n` +
        `• PHP server is running (php -S localhost:8000)\n` +
        `• API URL: ${API_CONFIG.baseUrl}`;

      setTestResults(result);
      setResultType("error");

      Alert.alert(
        "Connection Error",
        "Cannot connect to server. Please check your connection and try again.",
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

          {/* TEST API Buttons Section */}
          <View style={styles.testSection}>
            <Text style={styles.testSectionTitle}>🔧 API Test (Local)</Text>
            <Text style={styles.helperText}>URL: {API_CONFIG.baseUrl}</Text>
            <View style={styles.testButtonRow}>
              <TouchableOpacity
                style={[styles.testButton, styles.testGetButton]}
                onPress={testApiGet}
                disabled={testLoading || loading}
                activeOpacity={0.7}
              >
                {testLoading ? (
                  <ActivityIndicator color="#FFFFFF" size="small" />
                ) : (
                  <Text style={styles.testButtonText}>Test GET</Text>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.testButton, styles.testPostButton]}
                onPress={testApiPost}
                disabled={testLoading || loading}
                activeOpacity={0.7}
              >
                {testLoading ? (
                  <ActivityIndicator color="#FFFFFF" size="small" />
                ) : (
                  <Text style={styles.testButtonText}>Test POST</Text>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.testButton, styles.testClearButton]}
                onPress={clearResults}
                disabled={testLoading || loading}
                activeOpacity={0.7}
              >
                <Text style={styles.testButtonText}>Clear</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Results Display Section */}
          {testResults ? (
            <View
              style={[
                styles.resultsContainer,
                resultType === "success" && styles.resultsSuccess,
                resultType === "error" && styles.resultsError,
                resultType === "info" && styles.resultsInfo,
              ]}
            >
              <ScrollView
                style={styles.resultsScroll}
                showsVerticalScrollIndicator={true}
              >
                <Text
                  style={[
                    styles.resultsText,
                    resultType === "success" && styles.resultsTextSuccess,
                    resultType === "error" && styles.resultsTextError,
                    resultType === "info" && styles.resultsTextInfo,
                  ]}
                >
                  {testResults}
                </Text>
              </ScrollView>
            </View>
          ) : null}

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
            {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
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
