import propTypes from "prop-types";

function UserProfile(props) {
  return (
    <div className="card">
      <img src="https://media.istockphoto.com/photos/winter-paysage-picture-id182902156?b=1&k=20&m=182902156&s=170667a&w=0&h=T-p_uID6Nc2l3Ww5X42LlSBODHav5Qn31UHe4PRaWNc=" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.user}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  );
}

UserProfile.propTypes = {
  user: propTypes.string
}

export default UserProfile;