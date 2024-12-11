import { Link } from "react-router-dom";


const Card = ({item}) => {
    const {image,name,id} = item
    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
  <figure className="pt-5">
    <img
      src={image}
      alt={name}
      className="rounded-xl w-full h-96 object-contain" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Templete {id}</h2>
  
    <div className="w-full">
      <Link to={`/coverpage/${id}`} className="btn btn-sm bg-primary text-xl">Edit</Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Card;