

const CommonBanner = ({img, size,content,heading}) => {
    return (
     
        <div className="hero h-[700px]" style={{ backgroundImage: `url(${img})` }}>
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content bg-black py-20 px-32 bg-opacity-40">
          <div className="max-w-md ">
            <h1 className={`${(size === "big")? "text-6xl" : "text-3xl" } mb-5  font-bold uppercase`}>{heading}</h1>
            <p className={`${(size === "big")? "text-xl" : "text-base" } mb-5 `}>{content}</p>
       
          </div>
        </div>
      </div>
        
    );
};

export default CommonBanner;