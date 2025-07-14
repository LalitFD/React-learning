import { Component } from "react";
import data from "./data";
import "./Style.css"


class Card extends Component {
    constructor() {
        super();
        this.state = {
            productList: data
        }
    }
    render() {
        return <>
            <div className="firstDiv">
                {
                    this.state.productList.map((item, index) => {
                        return <>
                            <div className="secondDiv">
                                <img src={item.thumbnail}></img>
                                <h5>{item.title}</h5>
                                <h4>{item.price + " ₹ "}</h4>
                                <button className="btn">Buy Now</button>

                            </div>
                        </>

                    })
                }
            </div >
        </>
    }
}

export default Card;