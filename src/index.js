import React from "react";
import ReactDOM from "react-dom/client";

let ele = document.querySelector('#root')
let root = ReactDOM.createRoot(ele)


class App extends React.Component {

    // variables
    // action 
    // render html

    constructor(props) {
        super(props)
        this.state = {
            latitude: null,
            longitude: null
        };

        window.navigator.geolocation.getCurrentPosition(
            (pos) => {
                //this.state.latitude = pos.coords.latitude
                this.setState({
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude
                });
            },
            (err) => {
                console.log(err)
            }

        )

    }

    // jsx
    render() {
        return <div>
            <h1>Latitute:{this.state.latitude}</h1>
            <h1>Longitude:{this.state.longitude}</h1>
        </div>;
    }


}






// function App() {

//     let latitude;
//     window.navigator.geolocation.getCurrentPosition(function(pos){
//         console.log(pos)
//         latitude = pos.coords.latitude

//     },function(err){
//         console.log(err)
//     })

//     return <h1>Latitute:{latitude}</h1>

// }
root.render(<App />)

// functional ----jsx create render
// class ---

//1 jsx create render
//2 state maintain , html
//3 point of execution --- asyn manage
