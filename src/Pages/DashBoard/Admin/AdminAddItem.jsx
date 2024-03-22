import { ImSpoonKnife } from "react-icons/im";
import SectionTitle from "../../../Shared/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const image_Hosting_Token = import.meta.env.VITE_Image_Upload_Token;
const AdminAddItem = () => {
   
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const image_Hosting_Url = `https://api.imgbb.com/1/upload?key=${image_Hosting_Token}`

  const onSubmit = data => {

    const formData = new FormData();
    formData.append('image', data.image[0])
    fetch(image_Hosting_Url, {
        method: "POST",
        body: formData
    })
    .then(res =>res.json())
    .then (imgResponse =>{
        console.log(imgResponse)
        if(imgResponse.success){
            const imgURL = imgResponse.data.display_url;
            const {name,price,category,recipe} = data;
            const newItem = {name, price:parseFloat(price), category, recipe, image:imgURL}
            console.log(newItem); 
            axiosSecure.post('/menu', newItem)
            .then(data=>{
                console.log(data.data)
                if (data.data.insertedId) {
                    reset();
                    Swal.fire({
                      title: "Success",
                      text: "New Recipe Added to Menu Successfully ",
                      icon: "success",
                      confirmButtonText: "Cool",
                    });
                  } 
            })

        }
    })
    console.log(data);
  }
  console.log(image_Hosting_Token)
  return (
    <div>
       <Helmet>
    <title>Diner Lounge | Add Menu Item</title>
   
  </Helmet>
      <SectionTitle
        heading="Add An Item"
        subHeading="What's New "
      ></SectionTitle>
      <div className="p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-5 m-5 bg-slate-200 rounded-lg" >
          <div className="form-control w-full col-span-2 px-3 ">
            <label className="label">
              <span className="label-text font-bold">Recipe Name*</span>
            </label>
            <input
              type="text"
              placeholder="Enter recipe name"
              {...register("name", { required: true })}
              className="input input-bordered w-full"
            />
               {errors.name && <span className="text-red-700">Recipe name is required</span>}
             </div>
            <div className="form-control w-full px-3 ">
  <label className="label">
    <span className="label-text  font-bold">Category*</span>

  </label>
  <select defaultValue="category" className="select select-bordered" {...register("category", { required: true })}>
 
    <option disabled >Category</option>
    <option>offered</option>
    <option>popular</option>
    <option>pizza</option>
    <option>dessert</option>
    <option>salad</option> 
    <option>soup</option> 
    {errors.category && <span className="text-red-700">Category is required</span>}
  </select>
  
 
</div>
         
        
          <div className="form-control w-full px-3">
            <label className="label">
              <span className="label-text font-bold">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Enter price"
              {...register("price", { required: true })}
              className="input input-bordered w-full "
            />
            {errors.price && <span className="text-red-700">Price is required</span>}
          </div>
          <div className="form-control col-span-2 px-3">
  <label className="label">
    <span className="label-text  font-bold">Recipe Details*</span>
  </label>
  <textarea className="textarea textarea-bordered h-24" placeholder="Enter recipe details" {...register("recipe", { required: true })}></textarea>
  {errors.recipe && <span className="text-red-700">Recipe details is required</span>}
</div>
<div className="form-control w-full px-3 py-1">
  <label className="label">
    <span className="label-text font-bold">Upload an image*</span>
  
  </label>
  <input type="file" className="file-input file-input-bordered w-full" {...register("image", { required: true })} />
  {errors.image && <span className="text-red-700">Recipe image is required</span>}

</div>

<div className="col-span-2 p-1 bg-slate-900 w-48 h-16 btn btn-square mx-auto flex justify-center items-center text-white rounded-lg  hover:bg-slate-700 ">
<i> <ImSpoonKnife className="h-5 w-5"/></i>
<input type="submit" className=" text-white" value="Add Item" /> </div>
        </form>
      </div>
    </div>
  );
};

export default AdminAddItem;
