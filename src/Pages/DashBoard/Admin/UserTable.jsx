
import {FaTrashAlt} from 'react-icons/fa';
import {BsPersonCircle} from 'react-icons/bs';
const UserTable = ({person,index}) => {
    const {name,email,_id} = person;
    const handleDelete = id =>{
        console.log(id);
    }
    return (
        <tbody>
      
        <tr>
          
            <td className='font-bold'>{index+1}</td>
          
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <p>{name}</p>
              </div>
           
            </div>
          </td>
          <td>
          <div className="font-bold">{email}</div>
         
          </td>
          <td className='font-bold'><button><BsPersonCircle className='h-6 w-6'/></button> </td>
          <th>
            <button onClick={()=> handleDelete(_id)} className="btn btn-circle btn-sm bg-red-800"><FaTrashAlt/></button>
          </th>
        </tr>
       
       
        
      </tbody>
    );
};

export default UserTable;