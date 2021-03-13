import LoginRegisterForm from "./loginRegisterForm"
import UploadImageForm from "./uploadImageForm"
import ReactDOM from "react-dom"

function App() {
  return (
        <LoginRegisterForm/>
  );
}

export default App;
if(document.getElementById("root")){
  ReactDOM.render(<App />, document.getElementById("root"));
}