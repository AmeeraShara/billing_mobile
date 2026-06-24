import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    margin: 16,
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    marginBottom: 12,
    alignSelf: "flex-start",
  },
  backText: {
    fontSize: 16,
    color: "#007AFF",
    fontWeight: "600",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1a2332",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7a8f",
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#e8ecf1",
    marginVertical: 16,
  },
  field: {
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2c3e50",
    marginBottom: 6,
  },
  required: {
    color: "#e74c3c",
    fontSize: 16,
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#dce1e8",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    backgroundColor: "#fafbfc",
    color: "#1a2332",
  },
  inputError: {
    borderColor: "#e74c3c",
    borderWidth: 2,
    backgroundColor: "#fdf2f2",
  },
  errorText: {
    color: "#e74c3c",
    fontSize: 12,
    marginTop: 4,
    fontWeight: "500",
  },
  helperText: {
    color: "#7f8c8d",
    fontSize: 12,
    marginTop: 4,
    fontStyle: "italic",
  },
  addressInput: {
    borderWidth: 1.5,
    borderColor: "#dce1e8",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    backgroundColor: "#fafbfc",
    color: "#1a2332",
    minHeight: 100,
    textAlignVertical: "top",
  },
  addButton: {
    backgroundColor: "#007AFF",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
    shadowColor: "#007AFF",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  addButtonDisabled: {
    backgroundColor: "#8ab4f8",
    shadowOpacity: 0.1,
  },
  addButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  cancelButton: {
    marginTop: 12,
    paddingVertical: 14,
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#dce1e8",
  },
  cancelButtonText: {
    color: "#6b7a8f",
    fontSize: 15,
    fontWeight: "600",
  },
  // Additional utility styles
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  mt8: {
    marginTop: 8,
  },
  mb8: {
    marginBottom: 8,
  },
});

export const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a2332",
  },
  card: {
    backgroundColor: "#243447",
    shadowColor: "#000",
    shadowOpacity: 0.3,
  },
  title: {
    color: "#e8ecf1",
  },
  subtitle: {
    color: "#8a9bb5",
  },
  label: {
    color: "#e8ecf1",
  },
  input: {
    backgroundColor: "#1a2332",
    borderColor: "#3a4a5f",
    color: "#e8ecf1",
  },
  inputError: {
    borderColor: "#e74c3c",
    backgroundColor: "#2a1a1a",
  },
  helperText: {
    color: "#6b7a8f",
  },
  cancelButton: {
    borderColor: "#3a4a5f",
  },
  cancelButtonText: {
    color: "#8a9bb5",
  },
});