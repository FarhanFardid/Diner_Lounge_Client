import { ImSpoonKnife } from "react-icons/im";
import SectionTitle from "../../../Shared/SectionTitle";

const AdminAddItem = () => {
  return (
    <div>
      <SectionTitle
        heading="Add An Item"
        subHeading="What's New "
      ></SectionTitle>
      <div className="p-4">
        <form className="grid grid-cols-2 gap-5 m-5 bg-slate-200 rounded-lg" >
          <div className="form-control w-full col-span-2 px-3 ">
            <label className="label">
              <span className="label-text font-bold">Recipe Name*</span>
            </label>
            <input
              type="text"
              placeholder="Enter recipe name"
              className="input input-bordered w-full"
            />
             </div>
            <div className="form-control w-full px-3 ">
  <label className="label">
    <span className="label-text  font-bold">Category*</span>

  </label>
  <select className="select select-bordered">
    <option disabled selected>Category</option>
    <option>offered</option>
    <option>popular</option>
    <option>pizza</option>
    <option>dessert</option>
    <option>salad</option> 
    <option>soup</option> 
  </select>
 
</div>
         
        
          <div className="form-control w-full px-3">
            <label className="label">
              <span className="label-text font-bold">Price*</span>
            </label>
            <input
              type="text"
              placeholder="Enter price"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control col-span-2 px-3">
  <label className="label">
    <span className="label-text  font-bold">Recipe Details*</span>
  </label>
  <textarea className="textarea textarea-bordered h-24" placeholder="Enter recipe details"></textarea>
  
</div>
<div className="form-control w-full px-3 py-1">
  <label className="label">
    <span className="label-text font-bold">Upload an image*</span>
  
  </label>
  <input type="file" className="file-input file-input-bordered w-full" />

</div>

<div className="col-span-2 p-3 w-fit mx-auto"> <button className="btn bg-slate-900">Add Item <ImSpoonKnife className="h-5 w-5 m-1"/> </button></div>
        </form>
      </div>
    </div>
  );
};

export default AdminAddItem;
