import { Link } from "react-router-dom";
import "./MyThali.css"
const MyThali = () =>{
  return (
   <div>
     <h1>WelCome To DigiKull Restaurant</h1>
    <div className="thali-main">
     <div className="thali-background">
      <img src="https://thumbs.dreamstime.com/b/indian-thali-26440151.jpg" alt="panjabiThali" className="thali-image"/>
      <h1 className="thali-name">Royal Thali</h1>
      <p className="thali-price">Thali Price:350/-</p>
      <p className="thali-include">Includes:-Chapati,Bhaji,Dal</p>
      <Link to="/royalthali" className="link-royal-tahli" >To know More Click Me</Link>
     </div>
     <div className="thali-background">
      <img src="https://t4.ftcdn.net/jpg/02/75/39/13/360_F_275391367_Hro3Ql1iFsCNtd86zWYuqa0Qe5cc7goE.jpg" alt="panjabiThali" className="thali-image"/>
      <h1 className="thali-name">South Indian Thali</h1>
      <p className="thali-price">Thali Price:350/-</p>
      <p className="thali-include">Includes:-Chapati,Bhaji,Dal</p>
      <a  className="link-royal-tahli" >To know More Click Me</a>
     </div>
     <div className="thali-background">
      <img src="https://opt.toiimg.com/recuperator/img/toi/m-61275869/61275869.jpg&width=500&resizemode=4" alt="panjabiThali" className="thali-image"/>
      <h1 className="thali-name">Maharastrian Thali</h1>
      <p className="thali-price">Thali Price:350/-</p>
      <p className="thali-include">Includes:-Chapati,Bhaji,Dal</p>
      <a  className="link-royal-tahli" >To know More Click Me</a>
     </div>
   </div>
   </div>
  )
}
export default MyThali;