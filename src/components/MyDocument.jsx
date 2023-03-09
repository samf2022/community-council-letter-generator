import React from "react";
import { Page, Text, View, Image, Document, StyleSheet } from "@react-pdf/renderer";
import logo from "../assets/community-council-logo.png";

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
    fontSize: "14px",
  },
  logo: {
    marginTop: 20,
    width: 220,
  },
  letterTitle: {
    textAlign: "center",
    fontSize: "12px",
  },
  section: {
    margin: 10,
    padding: 20,
    flexGrow: 1,
  },
  mainText: {
    lineHeight: 1.7,
    marginRight: "3cm",
    marginLeft: "3.5cm",
    fontSize: "12px",
    textAlign: "justify",
  },
});

const MyDocument = ({ name, document, sex }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text>República Bolivariana de Venezuela</Text>
        <Text>Municipio Bermúdez – Parroquia Santa Catalina Del Edo.Sucre</Text>
        <Text>Consejo Comunal “9 De Abril” RIF. J-400628830</Text>
        <Image style={styles.logo} src={logo}></Image>
      </View>
      <View style={styles.letterTitle}>
        <Text>CONSTANCIA DE RESIDENCIA</Text>
      </View>
      <View style={styles.mainText}>
        <Text>
          Nosotras, FRIDENNYS CAROLINA FERMIN OLIVEROS, MORELLA DEL CARMEN FIGUERA VALDEZ y GRACIELA SANCHEZ,
          venezolanas, mayores de edad, hábiles en derecho, titulares de las Cédulas de Identidad Nº. 16.842.708,
          4.935.094 y 5.880.762, respectivamente, domiciliadas en el Sector “9 de Abril”, aledaño a la sede de
          Automotriz Oriental,C.A (Autorica), vía Carúpano-San José, parroquia Santa Catalina, municipio Bermúdez del
          estado Sucre; en nuestra condición de Voceras del Consejo Comunal del citado Sector, hacemos constar que
          conocemos de vista, trato y comunicación desde hace más de veinte (20) años,{" "}
          {sex === "female" ? "a la" : "al"} {sex === "female" ? "ciudadana" : "ciudadano"} {name} ,{" "}
          {sex === "female" ? "venezolana" : "venezolano"}, mayor de edad, {sex === "female" ? "soltera" : "soltero"},
          militar retirado, hábil en derecho, titular de la Cédula de Identidad No.
          {document} y {sex === "female" ? "domiciliada" : "domiciliado"} en el Callejón 9 de Abril, casa s/n de nuestro
          Sector y por el conocimiento que tenemos de {sex === "female" ? "ella" : "él"} damos fe de que es{" "}
          {sex === "female" ? "una" : "un"} {sex === "female" ? "ciudadana" : "ciudadano"} de BUENA CONDUCTA. Constancia
          que expedimos a solicitud de parte interesada en Carúpano, a los veintiún días del mes de enero de dos mil
          veintitrés. (21-01-2023).
        </Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
