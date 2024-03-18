import CustomStepConnector from "./CustomStepConnector";
import GetStarted from "./GetStarted";

const BeforeHome: React.FC<any> = () => (
  <div>
    <div className="center">
      <h1 className="center">Screen Sharing App</h1>
    </div>
    <GetStarted />
    <div className="center">
      <h2 className="center">Steps to follow</h2>
    </div>
    <CustomStepConnector />
  </div>
);

export default BeforeHome;
