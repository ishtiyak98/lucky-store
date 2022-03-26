import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import QuestionsBlog from "./Components/QuestionsBlog/QuestionsBlog";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <div>
      <h1 className="text-center my-2">Bag Packer</h1>
      <Shop></Shop>
      <QuestionsBlog></QuestionsBlog>
    </div>
  );
}

export default App;
