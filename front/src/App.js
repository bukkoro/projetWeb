import React, {  useState } from "react";
import LoginRegisterForm from "./loginRegisterForm"
import Header from "./header"
import ReactDOM from "react-dom"
import UploadImageForm from "./uploadImageForm";
import MainPage from "./mainPage";

function App() {
  const [isregistered, setIsregistered] = useState();

  /*return(
    <UploadImageForm/>
  )*/
  
  
  if(!isregistered){
    return (
      <LoginRegisterForm setIsregistered={setIsregistered}/>
    );
  } else {
      return (
      <Header/>
      );
  } 


}
export default App;
/*if(document.getElementById("root")){
  ReactDOM.render(<App />, document.getElementById("root"));
}*/