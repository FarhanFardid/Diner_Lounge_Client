

const CommonBanner = ({img, size,content,heading}) => {
    return (
     
        <div className="hero h-[700px]" style={{ backgroundImage: `url(${img})` }}>
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content bg-black py-20 px-32 bg-opacity-40">
          <div className="max-w-md ">
            <h1 className={`${(size !== null)? "text-6xl" : "text-2xl" } mb-5 text-5xl font-bold uppercase`}>{heading}</h1>
            <p className={`${(size !== null)? "text-xl" : "text-lg" } mb-5 `}>{content}</p>
       
          </div>
        </div>
      </div>
        
    );
};

export default CommonBanner;