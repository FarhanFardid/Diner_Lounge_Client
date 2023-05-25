

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center space-y-4 py-2">
            <p  className="text-sm text-yellow-600  w-60 mx-auto border-b-4 p-1 italic">-- {subHeading} --</p>
            <h3 className="text-2xl text-slate-900 uppercase w-60 mx-auto border-b-4 p-1">{heading}</h3>
        </div>
    );
};

export default SectionTitle;