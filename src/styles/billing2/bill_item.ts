import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6fa",
  },

  scroll: {
    padding: 15,
    paddingBottom: 40,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 16,
    marginBottom: 15,
    elevation: 3,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1565c0",
    marginBottom: 15,
  },

  billInfo: {
    backgroundColor: "#eef4ff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },

  billText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1565c0",
    marginTop: 10,
    marginBottom: 10,
  },

  row: {
    marginBottom: 12,
  },

  label: {
    marginBottom: 6,
    fontWeight: "600",
    color: "#444",
  },

  input: {
    borderWidth: 1,
    borderColor: "#dcdcdc",
    borderRadius: 10,
    backgroundColor: "#fff",
    height: 50,
    paddingHorizontal: 12,
  },

  doubleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  half: {
    width: "48%",
  },

  /* Discount Styles */

  discountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  discountInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    borderRadius: 10,
    backgroundColor: "#fff",
    height: 50,
    paddingHorizontal: 12,
  },

  discountTypeGroup: {
    flexDirection: "row",
    marginLeft: 8,
  },

  discountOption: {
    width: 55,
    height: 50,
    borderWidth: 1,
    borderColor: "#1565c0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginLeft: 4,
  },

  discountOptionActive: {
    backgroundColor: "#1565c0",
  },

  discountOptionText: {
    color: "#1565c0",
    fontWeight: "700",
    fontSize: 15,
  },

  discountOptionTextActive: {
    color: "#fff",
  },

  /* Buttons */

  addBtn: {
    backgroundColor: "#1565c0",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  primaryBtn: {
    backgroundColor: "#1565c0",
    height: 52,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  deleteBtn: {
    backgroundColor: "#c62828",
    height: 52,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },

  buttonGroup: {
    gap: 10,
    marginBottom: 30,
  },

  /* Summary Cards */

  invoiceCard: {
    backgroundColor: "#e8eeff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },

  creditCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },

  invoiceTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 15,
    color: "#1a237e",
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },

  totalCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },

  totalText: {
    textAlign: "right",
    fontSize: 22,
    fontWeight: "700",
    color: "#1565c0",
  },
});
