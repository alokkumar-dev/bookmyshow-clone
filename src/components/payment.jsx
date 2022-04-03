
import { useParams } from "react-router-dom"
import axios from "axios";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addMovie } from "../Redux/action";
import { useNavigate } from "react-router-dom";
 export const Payment=()=>{
    let navigate = useNavigate();
    const {id} = useParams();
    const [movie, setMovie] = useState({})
    const [noseats,noseatselect]=useState(1)
    let mk=((Math.floor(Math.random() * 500) + 120)*noseats)
   let  lk=Math.floor(Math.random() * 100) + 20
   const [seats,seatselect]=useState(true)
   
    useEffect(() => {
		getMovies();
         
},[])
const getMovies = () => {
	axios.get(`https://bookmyshow-clone-fw14.herokuapp.com/movies/${id}`).then((res) => {
		setMovie(res.data)
        
		
	})
   
}
const takeseat=(bv)=>{
    noseatselect(bv)
}
const payit=()=>{
    seatselect(!seats)
}
const product=useSelector((store)=>

store.product.product
)

const bookmovie=()=>{
    
        alert("Paymet Sucessfull")
        navigate('/')
        
      
}
    return(
        
        <div>
            {seats ? <div className="ticketdiv">
            <div className="ticketpop">
                <div className="kjvfsfli">Select Seat</div>
                <span><span onClick={()=>{
                    takeseat(1)
                }}>1</span><span onClick={()=>{
                    takeseat(2)
                }}>2</span><span onClick={()=>{
                    takeseat(3)
                }}>3</span><span onClick={()=>{
                    takeseat(4)
                }}>4</span><span onClick={()=>{
                    takeseat(5)
                }}>5</span><span onClick={()=>{
                    takeseat(6)
                }}>6</span><span onClick={()=>{
                    takeseat(7)
                }}>7</span><span onClick={()=>{
                    takeseat(8)
                }}>8</span><span onClick={()=>{
                    takeseat(9)
                }}>9</span><span onClick={()=>{
                    takeseat(10)
                }}>10</span></span>
                <div className="kjvfsfla">No seat : {noseats}</div>
                <div onClick={payit} className="kjvfsfln">Pay</div>
            </div>
        </div>:""}
        
<div  className="Maindivpayment">
            <div  className="firstdivpayment">
                <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',padding:'10px',backgroundColor:'#f84464',color:'white',fontWeight:'bold',fontWeight:'400',fontSize:'20px',height:'35px'}}>
                    <span >V</span>
                    <span className="textv"><p>Share your Contact Details</p></span>
                </div>
                <div className="mmnjuu">
                    <form action="">
                        <input type="text" placeholder="Email address" />
                        <input type="text" placeholder="+91"/>
                        <button className="mmmnnn">Continue</button>
                    </form>
                </div>
                <div>
                <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',padding:'10px',fontWeight:'bold',backgroundColor:'#ebebeb',color: '#56585e',fontWeight:'400',fontSize:'20px'}}>
                    <span >V</span>
                    <span className="textv"><p>Unlock offers or Apply Promocodess</p></span>
                </div> 
                <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',padding:'10px',fontWeight:'bold',backgroundColor:"#ebebeb",color: '#56585e',fontWeight:'400',fontSize:'20px'}}>
                    <span >V</span>
                    <span className="textv"><p>More Payment options</p></span>
                </div> 
                
                <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',padding:'10px',fontWeight:'bold',backgroundColor:"#f7f7f7",color: '#56585e',fontWeight:'400',fontSize:'20px'}} >
                    <form action="">
                        <input type="checkbox" />
                        <label htmlFor="Earn Loyalty points">Earn Loyalty points</label>
                    </form>
                </div>
                </div>
            </div>
            
            <div  className="seconddivpayment">
            
                <div className="oghyt">
                <p>ORDER SUMMARY</p>
                <p>{movie.title} ({movie.language}) ({movie.movieType})<h4>Tickets : {noseats}</h4></p>
                <p>{movie.language}, {movie.screenType}</p>
                <p>PVR: Vaishnavi Sapphire Mall, Yeshwanthpur</p>
                <p>(AUDI 04)</p>
                <p>M-Ticket</p>
                <p>CLASSIC. - B15, H4</p>
                <p>Sat, 2 Apr, 2022</p>
                <p>05:40 PM</p>
                </div>
                <p>------------------------------------------------------------------------</p>
                <div className="jiohvfd">
                    <div className="kjhsdkhf">
                      <div>
                          <p>Sub Total</p>
                          
                          <p>Rs.{mk}</p>
                      </div>
                      <div>
                          <p>+ Convenience fees</p>
                          
                          <p>Rs.{lk}</p>
                      </div>
                    </div>
                
                <p>Show tax break  V</p>
                <div className="ghdsj">
                    <div>
                        <p>Contribution to <br /> BookASmile</p>
                        <p>(₹1 per ticket has been added)</p>
                        <p>View T&C</p>
                    </div>
                    <div>
                        <p>Re. 1</p>
                        <p>Remove</p>
                    </div>
                </div>
                <div className="lkhyty">
                    <span>Amount Payable</span>
                    <span>Rs.{lk+mk}</span>
                </div>
                <div className="uidsfiugf" onClick={bookmovie}>Pay amount</div>
            </div>
            </div>
            
        </div>
        <div className="payfooter">
            <p>Note:</p>
            <p> 1.You can cancel the tickets 4 hour(s) before the show. Refunds will be done according to Cancellation Policy.</p>
            <p>2.In case of Credit/Debit Card bookings, the Credit/Debit Card and Card holder must be present at the ticket counter while collecting the ticket(s).</p>
          <p>© Bigtree Entertainment Pvt. Ltd. Privacy Policy | Contact Us </p>
          <img className="uoiuo" src="//in.bmscdn.com/webin/payment/pcci.png"/>
          
        </div>
        </div>
        
    )
}