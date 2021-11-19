import axios from "axios";
import purchase from "../../images/purchase.png";
import useAuth from "../../Hooks/useAuth";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const Orders = () => {
  const { itemName } = useParams();
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const history = useHistory();

  const onSubmit = (data) => {
    const { name, email, address, number, message } = data;
    const allData = { name, email, address, number, message, itemName };
    axios
      .post("https://food-zonous.herokuapp.com/addOrders", allData)
      .then((res) => {
        alert("Order Added Successfully!!!");
        reset();
        history.push("/myOrders");
      });
  };

  return (
    <div className="container mt-5 pt-5 ">
      <h1 className="my-4">
        Order for <span className="text-warning">{itemName}</span>
      </h1>
      <div className="row">
        <form className="mt-md-5 col-md-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-floating mb-3 ">
            <input
              {...register("name", { required: true, maxLength: 20 })}
              type="text"
              className="form-control border-warning"
              id="floatingInput"
              placeholder="name"
              value={user.displayName}
            />
            <label for="floatingInput">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              {...register("email", { required: true, maxLength: 20 })}
              type="email"
              className="form-control border-warning"
              id="floatingInput"
              placeholder="name@example.com"
              value={user.email}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              {...register("address", { required: true, maxLength: 20 })}
              type="text"
              className="form-control border-warning"
              id="floatingInput"
              placeholder="Address"
            />
            <label for="floatingInput">Address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              {...register("number", { required: true, maxLength: 20 })}
              type="number"
              className="form-control border-warning"
              id="floatingInput"
              placeholder="Phone Number"
            />
            <label for="floatingInput">Phone Number</label>
          </div>
          <div className="form-floating">
            <textarea
              {...register("message", { required: true, maxLength: 20 })}
              className="form-control border-warning"
              placeholder="Message"
              id="floatingTextarea2"
              style={{ height: "140px" }}
            ></textarea>
            <label for="floatingTextarea2">
              Any instruction for you delivery
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-outline-warning btn-lg mt-3 mb-5 text-dark"
          >
            Submit
          </button>
        </form>

        <img className="col-md-6 " src={purchase} alt="" />
      </div>
    </div>
  );
};

export default Orders;
