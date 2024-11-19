import { crearCardCompra } from "./components/cardCompra.js";
import { crearCardVenta } from "./components/cardVenta.js";

const contenedorCompra = document.getElementById("cotizaciones-compra");
const contenedorVenta = document.getElementById("cotizaciones-venta");


const cotizaciones = [
  { tipo: "Dólar Oficial", compra: 965.58, venta: 1021.12 },
  { tipo: "Dólar Blue", compra: 1120.00, venta: 1140.00 },
  { tipo: "Dólar Tarjeta", compra: 0.00, venta: 1633.79 },
  { tipo: "Dólar MEP", compra: 1086.43, venta: 1087.18 },
];

cotizaciones.forEach(({ tipo, compra, venta }) => {
  contenedorCompra.innerHTML += crearCardCompra(tipo, compra);
  contenedorVenta.innerHTML += crearCardVenta(tipo, venta);
});