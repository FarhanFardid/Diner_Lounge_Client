

const ContactCard = ({icon,title,content}) => {
    return (
        <div>
            <div> 
              {icon} 
            </div>
            <div>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default ContactCard;
