
export const crearCardVenta = (tipo, valor) => `
    <div class="d-flex justify-content-between align-items-center py-4 m-2 mx-4">
        <span class="dolar-valores">${tipo}</span>
        <span class="fw-bold text">$${valor.toLocaleString("es-AR", { minimumFractionDigits: 2 })}</span>
    </div>
    <hr class="mt-0 mb-2 mx-4">
`;