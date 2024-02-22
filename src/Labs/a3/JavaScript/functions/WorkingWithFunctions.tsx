import ArrowFunctions from "./ArrowFunctions";
import ES5Functions from "./ES5Functions";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameter";
import ImpliedReturn from "./ImpliedReturn";

function WorkingWithFunctions() {
    return(
       <div>
          <h1>Working With Functions</h1>
          <ES5Functions />
          <ArrowFunctions />
          <ImpliedReturn />
          <FunctionParenthesisAndParameters />
       </div>
    );
 }
 export default WorkingWithFunctions