

const ContactCard = ({icon,title,content}) => {
    return (
        <div className="flex flex-col items-center justify-center text-center ">
            <div className=" border-2 bg-[#D1A054] w-64 p-2 "> 
              <h3 className="ps-28 text-2xl text-white">{icon} </h3>
            </div>
            <div className="space-y-2 py-2 bg-slate-100 w-60 p-1 h-28">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="font-medium">{content}</p>
            </div>
        </div>
    );
};

export default ContactCard;
