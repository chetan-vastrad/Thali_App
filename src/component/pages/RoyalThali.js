import "./RoyalThali.css";
import "./RoyalThali.css";
import { useSelector , useDispatch} from "react-redux";
import { curdAction } from "../../reducer/curdSlice";
const RoyalThali = () => {
  const dummyPriduct={id:1,rate:10,img:"abc",counter:1}
const counter=useSelector((state)=>state.curd.item)
console.log(counter);
  const dispatch=useDispatch();
  const addCurdHandler = () =>{
    dispatch(curdAction.addCurd(dummyPriduct))
    
  }

  const removeCurdHandler =() =>{
    dispatch(curdAction.reduceCurd())
  }
  return (
    <div>
    
      <h1 className="royal-thali-heading">WelCome To Royal Thali</h1>
      <div className="royal-thali-image-div">
        <div className="royal-thali-curd-div">
          <img
            src="https://images.pexels.com/photos/5946623/pexels-photo-5946623.jpeg?auto=compress&cs=tinysrgb&w=400"
            className="royal-thali-curd"
          />
          {/* <p className="curdcounter">Qty:-{curdCounter}</p> */}
          <h6 className="royal-thali-title">Curd</h6>
          <div className="royal-thali-btn-div">
          <button className="royal-thali-add-btn-curd" onClick={removeCurdHandler}>Remove</button>{" "}
          <span className="royal-thali-span-curd"></span>{" "}
          <button className="royal-thali-remove-btn-curd" onClick={addCurdHandler}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RoyalThali;
