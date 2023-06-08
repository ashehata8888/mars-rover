import {useState} from 'react'
import "./RoverReport.css"
import RoverImg from '../images/roverimg.png'

export default function RoverReport ({x,y,direction}){
//     const [xArr,setXArr]=useState([x])
//     const [yArr,setYArr]=useState([y])
//     const [dirArr,setDirArr]=useState([direction])

//  if (x > 0 || y > 0 || direction != ""){
//     xArr.push(x)
//     yArr.push(y)
//     dirArr.push(direction)
//  }
   
    

    return (
        <>
        <div className="row-md-4">
    <h4 className="text-center"><strong>Rover Report</strong></h4>

    <div className="profile-card-4 text-center"><img src={RoverImg} className="img"/>
        <div className="profile-content">
            <div className="profile-description" style={{fontSize:"15pt",marginBottom:"20px"}}>Current rover coordinates after updates</div>
            <div className="row1">
                <div className="col-xs-4" style={{display: "inline-block",marginBottom:"5px"}}>
                    <div className="profile-overview" style={{marginRight:"10px"}}>
                        <p>X</p>
                        <h4 style={{margin:"0"}}>( {
                        //  xArr[xArr.length - 1]
                         x
                        } ,</h4></div>
                </div>
                <div className="col-xs-4" style={{display: "inline-block",marginBottom:"5px"}}>
                    <div className="profile-overview" style={{marginRight:"10px"}}>
                        <p>Y</p>
                        <h4>{
                        //  yArr[yArr.length - 1]
                        y
                        } )</h4></div>
                        
                  
                </div>
                <div className="col-xs-4" style={{display: "inline-block",marginBottom:"5px"}}>
                    <div className="profile-overview" style={{marginRight:"10px"}}>
                        <p>DIRECTION</p>
                        <h4>{ 
                        // dirArr[dirArr.length - 1]
                        direction
                        }</h4></div>
                </div>
            </div>
        </div>
    </div>
</div>

        </>
    )
}