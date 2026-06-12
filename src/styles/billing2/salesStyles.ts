import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  card: {
    margin: 15,
    backgroundColor: "#e9e9e9",
    borderRadius: 20,
    padding: 18,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1769d2",
  },

  dropdown: {
    width: 90,
    height: 35,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  row: {
    marginBottom: 15,
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
  },

  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#8bc49d",
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    marginTop: 10,
  },

  btn: {
    width: 120,
    height: 45,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 5,
  },

  searchCard: {
    margin: 15,
    backgroundColor: "#e9e9e9",
    borderRadius: 15,
    padding: 15,
  },

  searchTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },

  searchRow: {
    flexDirection: "row",
    marginBottom: 10,
  },

  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
  },

  searchBtn: {
    width: 70,
    height: 40,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
