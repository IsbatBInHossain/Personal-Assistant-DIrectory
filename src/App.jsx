import "bulma/css/bulma.css"
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png"
import CortanaImage from "./images/cortana.png"
import SiriImage from "./images/siri.png"

const App = (props) => (
          <div>
            <section className="hero is-primary">
              <div className="hero-body">
                <p className="title">
                    Personal Assistant Directory
                </p>
    {/* <p class="subtitle">
      Primary subtitle
    </p> */}
                </div>
              </section>
            <div className="container">
              <section className="section">
                <div className="columns">
                  <div className="column is-4">
                  <ProfileCard 
                    title="Alexa" 
                    handle="@alexa44" 
                    imgSrc={AlexaImage}
                    content="Amazon Alexa, also known simply as Alexa, is a virtual assistant technology largely based on a Polish speech synthesiser named Ivona, bought by Amazon in 2013."
                  />
                  </div>
                  <div className="column is-4">
                    <ProfileCard 
                      title="Cortana" 
                      handle="@cortana11" 
                      imgSrc={CortanaImage}
                      content="Cortana is a virtual assistant developed by Microsoft that uses the Bing search engine to perform tasks such as setting reminders and answering questions for the user."
                    />
                  </div>
                  <div className="column is-4">
                      <ProfileCard 
                        title="Siri" 
                        handle="@siri31" 
                        imgSrc={SiriImage}
                        content="Siri is a virtual assistant that is part of Apple Inc.'s iOS, iPadOS, watchOS, macOS, tvOS, and audioOS operating systems."  
                      />
                  </div>
                </div>
              </section>
            </div>
          </div>
  );

  export default App;