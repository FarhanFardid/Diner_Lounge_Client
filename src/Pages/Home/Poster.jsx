import poster from '../../assets/home/chef-service.jpg'

const Poster = () => {
    return (
        <div style={{backgroundImage:`url(${poster})`}}>
            <div className='p-16 text-center '>
                <div className='p-4 bg-black bg-opacity-50 w-2/3 h-2/3 mx-auto text-white'>
                <h3 className='text-4xl font-semibold text-center '>Diner Lounge</h3>
                <p className='text-lg font-normal p-9 '>Diner Lounge has swiftly emerged as a prominent player in the restaurant industry, captivating the hearts and taste buds of food enthusiasts with its exquisite cuisine, charming ambiance, and top-notch service. Located in the heart of a bustling metropolitan city, Diner Lounge stands out as a culinary haven, drawing food connoisseurs from far and wide. The restaurant`s menu offers an extensive array of dishes inspired by international flavors and innovative culinary techniques</p>
            </div></div>
     
            
        </div>
    );
};

export default Poster;