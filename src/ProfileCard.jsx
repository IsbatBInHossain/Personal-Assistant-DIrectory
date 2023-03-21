const ProfileCard = ({title, handle, imgSrc}) =>{
    return (
        <div>
            <img src={imgSrc} alt="pda logo"/>
            <div>The title is {title}</div>
            <div>The handlename is {handle}</div>
        </div>
    )
};

export default ProfileCard;