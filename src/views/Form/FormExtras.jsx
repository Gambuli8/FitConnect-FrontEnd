/* eslint-disable react/prop-types */
const FormExtras = (props) => {
    console.log(props, "soy props");
    const cart = props?.cart;
    console.log(cart, "soy cart");
    const handleSubmit = ()=>{
        console.log(cart);
    }

return   (
  <div className="flex justify-center">
    <form  onSubmit={handleSubmit()} className="bg-white p-8 rounded shadow-lg w-96">
      <h1 className="text-xl mb-4">Adquiere los Extras que seleccionaste Y añadelos a tu membresia!</h1>

      <input
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
        value="Ir a pagar"
      />
    </form>
  </div>
);

};
  
export default FormExtras;