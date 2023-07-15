import { useState } from "react";
import { useForm } from "react-hook-form";


const Form = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    
    return (
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <input {...register("Name")} placeholder="name..." />
        <br />
        <input {...register("SurName")} placeholder="surname..." />
        <br />
        <select {...register("Membership Selected", { required: true })}>
          <option value="1">basic mensual</option>
          <option value="2">medium mensual</option>
          <option value="3">premium mensual</option>
          <option value="4">basic anual</option>
          <option value="5">medium anual</option>
          <option value="6">premium anual</option>
        </select>
        <p>{data}</p>
        <input type="submit" />
      </form>
    );
}

export default Form;