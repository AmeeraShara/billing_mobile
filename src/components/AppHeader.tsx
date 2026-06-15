import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function AppHeader() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [bill2Expanded, setBill2Expanded] = useState(false);

  const [quotationExpanded, setQuotationExpanded] = useState(false);
  const [reportsExpanded, setReportsExpanded] = useState(false);

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const data = await AsyncStorage.getItem("user");
      if (data) {
        setUser(JSON.parse(data));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const navigateTo = (route: string) => {
    setDrawerVisible(false);

    setTimeout(() => {
      router.replace(route as any);
    }, 150);
  };

  const logout = () => {
    Alert.alert("Logout", "Are you sure want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },

      {
        text: "Logout",
        style: "destructive",
        onPress: async () => {
          await AsyncStorage.removeItem("user");
          router.replace("/");
        },
      },
    ]);
  };

  const menuItems = [
    {
      icon: "cube-outline",
      title: "INV",
      route: "/inventory",
    },

    {
      icon: "layers-outline",
      title: "AVA",
      route: "/availability",
    },

    {
      icon: "receipt-outline",
      title: "BILL",
      route: "/billing",
    },

    {
      icon: "construct-outline",
      title: "Repair",
      route: "/repair",
    },

    {
      icon: "people-outline",
      title: "SUP",
      route: "/suppliers",
    },

    {
      icon: "briefcase-outline",
      title: "MGR",
      route: "/manager",
    },

    {
      icon: "document-text-outline",
      title: "PO",
      route: "/purchaseorders",
    },

    {
      icon: "wallet-outline",
      title: "FIN",
      route: "/finance",
    },

    {
      icon: "person-circle-outline",
      title: "HR",
      route: "/hr",
    },

    {
      icon: "stats-chart-outline",
      title: "REP",
      route: "/reports",
    },

    {
      icon: "settings-outline",
      title: "SET",
      route: "/settings",
    },
  ];

  const bill2Menus = [
    {
      title: "Sales",
      route: "/billing2/sales",
    },


    {
      title: "Payment",
      route: "/billing2/payment",
    },

    {
      title: "Today Invoices",
      route: "/billing2/todayInvoices",
    },

    {
      title: "Quotation",
      children: [
        {
          title: "New Quotation",
          route: "/billing2/quotation/new",
        },

        {
          title: "On Going Quotation",
          route: "/billing2/quotation/ongoing",
        },

        {
          title: "Quotation List",
          route: "/billing2/quotation/list",
        },

        {
          title: "Report",
          route: "/billing2/quotation/report",
        },
      ],
    },

    {
      title: "Cheque",
      route: "/billing2/cheque",
    },

    {
      title: "Return Cheque",
      route: "/billing2/returnCheque",
    },

    {
      title: "OPS",
      route: "/billing2/ops",
    },

    {
      title: "Item Return",
      route: "/billing2/itemReturn",
    },

    {
      title: "Drawer",
      route: "/billing2/drawer",
    },

    {
      title: "Search",
      route: "/billing2/search",
    },

    {
      title: "Warranty",
      route: "/billing2/warranty",
    },

    {
      title: "Reports",

      children: [
        {
          title: "Credit Report",
          route: "/billing2/reports/credit",
        },

        {
          title: "Customer Report",
          route: "/billing2/reports/customer",
        },

        {
          title: "Sales Report",
          route: "/billing2/reports/sales",
        },

        {
          title: "Customer Bills",
          route: "/billing2/reports/customerBills",
        },

        {
          title: "Invoice Pay",
          route: "/billing2/reports/invoicePay",
        },

        {
          title: "Daily Sold Qty",
          route: "/billing2/reports/dailySoldQty",
        },
      ],
    },
  ];

  return (
    <>
      {/* HEADER */}

      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>NB</Text>
        </View>

        <TouchableOpacity onPress={() => setDrawerVisible(true)}>
          <Ionicons name="menu" size={32} color="#111827" />
        </TouchableOpacity>
      </View>

      {/* DRAWER */}

      <Modal visible={drawerVisible} transparent animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.drawer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.drawerHeader}>
                <View>
                  <Text style={styles.drawerName}>
                    {user?.full_name || "Administrator"}
                  </Text>

                  <Text style={styles.drawerRole}>
                    {user?.role || "System User"}
                  </Text>
                </View>

                <TouchableOpacity onPress={() => setDrawerVisible(false)}>
                  <Ionicons
                    name="close-circle-outline"
                    size={34}
                    color="#2563EB"
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.line} />

              {menuItems.map((item, index) => {
                if (item.title === "BILL") {
                  return (
                    <View key={index}>
                      <TouchableOpacity
                        style={styles.drawerItem}
                        onPress={() => navigateTo(item.route)}
                      >
                        <Ionicons
                          name={item.icon as any}
                          size={23}
                          color="#64748B"
                        />

                        <Text style={styles.drawerText}>{item.title}</Text>
                      </TouchableOpacity>

                      {/* BILL2 */}

                      <TouchableOpacity
                        style={styles.drawerItem}
                        onPress={() => setBill2Expanded(!bill2Expanded)}
                      >
                        <Ionicons
                          name="cash-outline"
                          size={23}
                          color="#64748B"
                        />

                        <Text style={styles.drawerText}>BILL2</Text>

                        <Ionicons
                          name={
                            bill2Expanded
                              ? "chevron-up-outline"
                              : "chevron-down-outline"
                          }
                          size={20}
                          color="#64748B"
                          style={{ marginLeft: "auto" }}
                        />
                      </TouchableOpacity>

                      {bill2Expanded &&
                        bill2Menus.map((sub, i) => {
                          if (sub.children) {
                            return (
                              <View key={i}>
                                <TouchableOpacity
                                  style={styles.subMenuParent}
                                  onPress={() => {
                                    if (sub.title === "Quotation")
                                      setQuotationExpanded(!quotationExpanded);

                                    if (sub.title === "Reports")
                                      setReportsExpanded(!reportsExpanded);
                                  }}
                                >
                                  <Text style={styles.subMenuText}>
                                    • {sub.title}
                                  </Text>

                                  <Ionicons
                                    name="chevron-down-outline"
                                    size={18}
                                    color="#64748B"
                                    style={{ marginLeft: "auto" }}
                                  />
                                </TouchableOpacity>

                                {(sub.title === "Quotation"
                                  ? quotationExpanded
                                  : reportsExpanded) &&
                                  sub.children.map((child, j) => (
                                    <TouchableOpacity
                                      key={j}
                                      style={styles.childMenu}
                                      onPress={() => navigateTo(child.route)}
                                    >
                                      <Text style={styles.childMenuText}>
                                        - {child.title}
                                      </Text>
                                    </TouchableOpacity>
                                  ))}
                              </View>
                            );
                          }

                          return (
                            <TouchableOpacity
                              key={i}
                              style={styles.subMenu}
                              onPress={() => navigateTo(sub.route)}
                            >
                              <Text style={styles.subMenuText}>
                                • {sub.title}
                              </Text>
                            </TouchableOpacity>
                          );
                        })}
                    </View>
                  );
                }

                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.drawerItem}
                    onPress={() => navigateTo(item.route)}
                  >
                    <Ionicons
                      name={item.icon as any}
                      size={23}
                      color="#64748B"
                    />

                    <Text style={styles.drawerText}>{item.title}</Text>
                  </TouchableOpacity>
                );
              })}

              <View style={styles.line} />

              <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
                <Ionicons name="log-out-outline" size={24} color="#EF4444" />

                <Text style={styles.logoutText}>Logout</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 45,
    paddingHorizontal: 18,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
  },

  logoText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  drawer: {
    width: "82%",
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: 55,
    paddingHorizontal: 25,
  },

  drawerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  drawerName: {
    fontSize: 24,
    fontWeight: "700",
  },

  drawerRole: {
    color: "#64748B",
    marginTop: 5,
  },

  line: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 20,
  },

  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },

  drawerText: {
    marginLeft: 15,
    fontSize: 17,
  },

  subMenu: {
    marginLeft: 45,
    paddingVertical: 10,
  },

  subMenuParent: {
    marginLeft: 45,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  childMenu: {
    marginLeft: 65,
    paddingVertical: 8,
  },

  subMenuText: {
    color: "#475569",
    fontSize: 15,
  },

  childMenuText: {
    color: "#64748B",
    fontSize: 14,
  },

  logoutBtn: {
    borderWidth: 1,
    borderRadius: 14,
    borderColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    marginBottom: 30,
  },

  logoutText: {
    marginLeft: 10,
    fontWeight: "700",
    color: "#EF4444",
  },
});
