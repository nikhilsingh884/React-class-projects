
import { Provider } from "react-redux";
import Home from "./Pages/Home";
import { store } from "./Redux/store";
import FetchJS from "./Pages/FetchJS";
import FormHandling from "./Pages/FormHandling";



function App() {


    return (
        <>
            <Provider store={store}>

                <Home />
                <FetchJS />
                <FormHandling />
            </Provider>
        </>
    )
}
export default App;