import { FaTrashAlt } from "react-icons/fa";
import { BsPersonCircle, BsPersonCheck } from "react-icons/bs";
import Swal from "sweetalert2";
const UserTable = ({ person, index, refetch }) => {
  const { name, email, _id, role } = person;

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Remove From User?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Remove'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE",
            headers:{
                "content-type" : "application/json"
            }
        })
        .then (res => res.json())
        .then (data => {
            if(data.deletedCount>0){
                refetch()
                Swal.fire(
                    'Deleted!',
                    'Person has been deleted from user.',
                    'success')
            }
          
        })
      
        
      }
    })
        }

  const handleAdmin = (id) => {
    Swal.fire({
      title: "Are you sure? Make This person Admin",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/admin/${id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              refetch();
              Swal.fire(
                "New Admin",
                "Person has been appointed as Admin.",
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
          <p className="font-bold">{name}</p>
        </td>
        <td>
          <div className="font-bold">{email}</div>
        </td>
        <td className="font-bold">
          {role === "admin" ? (
            <><button> <span className="flex flex-col items-center justify-center">
            Admin <BsPersonCheck className="h-6 w-6" />{" "}
          </span></button>
             
            </>
          ) : (
            <button onClick={() => handleAdmin(_id)} >
            <span className="flex flex-col items-center justify-center">User<BsPersonCircle className="h-6 w-6" /></span>  
            </button>
          )}{" "}
        </td>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className= {role === 'admin'? "btn btn-circle btn-sm bg-red-400 btn-disabled" : "btn btn-circle btn-sm bg-red-800"}   
          >
            <FaTrashAlt />
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default UserTable;
