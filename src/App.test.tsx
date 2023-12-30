import {createRoot} from "react-dom/client";
import MainApp from "./App";


test('component should render', () => {
    const div = document.createElement('div')
    const root = createRoot(div)
    root.render(
        <MainApp/>)
    root.unmount()
})