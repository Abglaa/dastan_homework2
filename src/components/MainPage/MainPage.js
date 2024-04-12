import About from "../About/About";
import Title from "../Title/Title";


function MainPage() {
    return (
        <div>
            <About info={{title: "Some Title", body:"Some body"}}/>
            <Title text="Hello world"/>
        </div>
    )
}

export default MainPage