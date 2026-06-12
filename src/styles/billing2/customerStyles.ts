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
    padding: 20,
    marginBottom: 30,
  },

  back: {
    width: 90,
    height: 35,
    borderWidth: 1,
    borderColor: "#555",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 10,
  },

  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    color: "#000099",
    marginBottom: 25,
  },

  field: {
    marginBottom: 15,
  },

  label: {
    fontSize: 16,
    marginBottom: 6,
    color: "#222",
  },

  input: {
    height: 45,
    width: "100%",
    borderWidth: 1,
    borderColor: "#8bc49d",
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
  },

  line: {
    height: 1,
    backgroundColor: "#999",
    marginVertical: 15,
  },

  address: {
    height: 90,
    width: "100%",
    borderWidth: 1,
    borderColor: "#8bc49d",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    textAlignVertical: "top",
  },

  addBtn: {
    width: 150,
    height: 50,
    borderWidth: 1,
    borderColor: "#555",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#eee",
    borderRadius: 5,
  },
});
