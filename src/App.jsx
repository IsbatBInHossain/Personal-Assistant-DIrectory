import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png"
import CortanaImage from "./images/cortana.png"
import SiriImage from "./images/siri.png"

const App = (props) => (
    <div>
      <div>Personal Assistance Directory</div>
      <ProfileCard title="Alexa" handle="@alexa44" imgSrc={AlexaImage}/>
      <ProfileCard title="Cortana" handle="@cortana11" imgSrc={CortanaImage}/>
      <ProfileCard title="Siri" handle="@siri31" imgSrc={SiriImage}/>
    </div>
  );

  export default App;