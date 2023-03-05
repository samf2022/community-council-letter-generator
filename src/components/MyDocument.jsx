import React from "react";
import { Page, Text, View, Image, Document, StyleSheet } from "@react-pdf/renderer";
import logo from "../assets/community-council-logo.png";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
    marginBottom: 20,
    fontSize: 14,
  },
  logo: {
    marginTop: 20,
    width: 220,
  },
  letterTitle: {
    textAlign: "center",
    fontSize: 12,
  },
  section: {
    margin: 10,
    padding: 20,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      <View style={styles.header}>
        <Text>República Bolivariana de Venezuela</Text>
        <Text>Municipio Bermúdez – Parroquia Santa Catalina Del Edo.Sucre</Text>
        <Text>Consejo Comunal “9 De Abril” RIF. J-400628830</Text>
        <Image style={styles.logo} src={logo}></Image>
      </View>
      <View style={styles.letterTitle}>
        <Text>CONSTANCIA DE RESIDENCIA</Text>
      </View>
      <View style={styles.section}>
        <Text>Trext</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
