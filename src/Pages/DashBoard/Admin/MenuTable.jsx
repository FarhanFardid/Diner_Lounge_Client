import { FaArrowCircleUp, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MenuTable = ({ item, index, refetch }) => {
  const { name, _id, image, price } = item;
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Remove Recipe From Menu?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // fetch(`http://localhost:5000/menu/${_id}`, {
        //     method: "DELETE",
        //     headers:{
        //         "content-type" : "application/json"
        //     }
        // })
        axiosSecure.delete(`/menu/${_id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire(
              "Deleted!",
              "Recipe has been deleted from Menu.",
              "success"
            );
          }
        });
      }
    });
  };
  return (
    <tbody>
      <tr>
        <td className="font-bold">{index + 1}</td>

        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-24 h-24">
                <img src={image} alt="item image" />
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="font-bold">{name}</div>
        </td>
        <td className="font-bold"> ${price}</td>
        <td>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle btn-sm bg-green-700"
          >
            <FaArrowCircleUp />
          </button>
        </td>
        <td>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle btn-sm bg-red-800"
          >
            <FaTrashAlt />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default MenuTable;
