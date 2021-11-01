import { Link, useParams } from "react-router-dom";

const SingleItem = () => {
  const { itemId } = useParams();

  return (
    <div className="mt-5 pt-5">
      <h2 className="mt-5 pt-5"> This is our {itemId} service</h2>

      <Link to="/items">
        <button className="btn btn-warning mb-5 mt-4">Go Back</button>
      </Link>
    </div>
  );
};

export default SingleItem;
