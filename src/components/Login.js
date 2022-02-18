import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Login(){

    let navigate= useNavigate();
    let user={};
    let [message, setmessage]=useState("hello")
    let [boxvisible, setboxvisible]=useState(false)
    function readvalue(property,value){
        // /adding property in the object
  user[property]=value;
     

    }
    
 function loginaccount() {
     console.log(JSON.stringify(user))
       
          fetch('http://localhost:8000/user/login', {
                headers: {
                    'Content-Type': "application/json"
                },
                method: 'POST',
                body: JSON.stringify(user)
            })
             .then((response)=>response.json())
             .then((data)=>{
                 if(data.success===true){
                     localStorage.setItem("vs_details",JSON.stringify({token:data.token,user_id:data.user_id}))
                  navigate("/vedios")
                 }
                 else{
                   
                    setmessage(data.message);
                    setboxvisible(true)
                  
                  setTimeout(()=>{
                      setboxvisible(false)
                  },3000)
                 }
                
             }) 
            // console.log(await res.json());
            .catch((err)=>{
                console.log(err)
            })
        
    }
    return(
        <section className="main">
            <div className="message-bg">
            {
                    boxvisible===true?(
                     <div className="message">
                         {message}
                      </div>
                    ):null
                }
                      
            </div>
            <div className="account">
               <h1 className="title">Create an Account</h1>
              
               <input type="text" placeholder="Enter username" onChange={(event)=>{readvalue("username",event.target.value)}}/>
               <input type="password" placeholder="Enter password" onChange={(event)=>{readvalue("password",event.target.value)}}/>
              
                <button onClick={loginaccount}>Login</button>
            </div>

        </section>
    )
}

export default Login;