import React, {useState} from "react"; 
import ReactDOM from "react-dom"; 
import App from "./App"; 

//
//function Webpage(){
//    const name = "David"; 
//
//    
//    return <>
//            <section>
//            <header> <h1> Hello {name}</h1> </header> 
//                <p> suck my dick </p>
//            </section>
//             <Clock />   
//            </>
//}
//
////nesting components: 
//function Clock(props){
//    const [time, setTime] = useState(new Date().toLocaleTimeString("UK"));
//    
//    setInterval(() => setTime(new Date().toLocaleTimeString("UK")), 1000); 
//    
//    
//    
//    return <p> It is currently: {time}</p>

//const element = <> 
//      <h1> Hello World </h1>
//      <p> Lorem ipsum, dolor sit... </p>
//      </>; 
ReactDOM.render(<App />, document.getElementById("root")); 