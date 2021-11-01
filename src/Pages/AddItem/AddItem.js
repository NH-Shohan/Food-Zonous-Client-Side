import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios.post("http://localhost:5000/addItem", data).then((res) => {
      alert("Item Added Successfully!!!");
      reset();
    });
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="add-service d-block ">
        <h2 className="mt-5 ">Please Add a Service</h2>
        <hr className="border border-4 border-dark rounded-pill w-25 m-auto" />

        <form
          className="mt-md-5 pt-3 m-auto w-50 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("_id", { required: true, maxLength: 20 })}
            class="form-control border-warning mb-3"
            id="floatingInput"
            placeholder="ID"
            type="number"
          />
          <input
            {...register("foodName", { required: true, maxLength: 20 })}
            class="form-control border-warning mb-3"
            id="floatingInput"
            placeholder="Name"
          />
          <textarea
            {...register("description")}
            placeholder="Description"
            class="form-control border-warning mb-3"
            id="floatingTextarea2"
          />

          <input
            {...register("image")}
            placeholder="image url"
            class="form-control border-warning mb-3"
          />
          <input
            type="submit"
            class="btn btn-outline-warning btn-lg mt-3 mb-5 text-dark fw-bold"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
