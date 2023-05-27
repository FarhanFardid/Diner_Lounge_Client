

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center space-y-4 py-4">
            <p  className="text-sm text-yellow-600  w-60 mx-auto border-b-4 p-1 italic">-- {subHeading} --</p>
            <h3 className="text-3xl text-slate-900 uppercase w-fit mx-auto border-b-4 p-1">{heading}</h3>
        </div>
    );
};

export default SectionTitle;