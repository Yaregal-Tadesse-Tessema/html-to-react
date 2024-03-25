import logo from "./logo.svg";
import "./App.css";
import Activity from "./pages/activity";
import ApiKey from "./pages/api-keys";
import Billing from "./pages/billing";
import Overview from "./pages/overview";
import Referrals from "./pages/referrals";
import Security from "./pages/security";
import Settings from "./pages/settings";
import Statements from "./pages/statements";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Activity />
      {/* <Settings /> */}
      {/* <ApiKey /> */}
      {/* <Security /> */}
      {/* <Referrals /> */}
      {/* <Billing /> */}
      {/* <Statements /> */}
      {/* <Overview /> */}
      {/* </header> */}
    </div>
  );
}

export default App;
