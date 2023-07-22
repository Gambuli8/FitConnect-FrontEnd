import logo from "../../images/fitconnectimg.png";

const SuccessfulPurchase = () => {
  return (
        <div className="bg-white mx-auto p-6 rounded-lg shadow-lg max-w-sm mt-10"
        style={{ display: "flex", flexDirection: "column", justifyContent: "center",
        alignItems: "center",}}>        
        <img className="h-24 inline mb-4" src={logo} alt="Logo" />
        <h2 className="text-3xl font-bold text-green-500 mb-4">Compra Exitosa</h2>
        <p className="text-sm text-gold mb-4">Detalles de la compra:</p>
            <ul>Producto</ul>
            <p>Nombre del producto</p>
        <ul className="list-disc ml-6 mb-4">
            <p>Cantidad: 1</p>
            <p>Total Gastado: $100</p>
            <p>Fecha: 21 de Julio de 2023</p>
        </ul>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Volver al Inicio
        </button>
    </div>
  );
};

export default SuccessfulPurchase;

