import {useState} from 'react'

function Register(){
    let user={};
    let [message, setmessage]=useState("hello")
    let [boxvisible, setboxvisible]=useState(false)
    function readvalue(property,value){
        // /adding property in the object
  user[property]=value;
     

    }
    // function register(){
    //     if(user.password===user.cpassword){
    //         delete user.cpassword;
    //         // console.log(user)
    //         fetch("http://localhost:8000/user/register",{
    //             method:'POST',
    //             headers:{
    //                 'Content-Type':"application/json"
    //             },
    //             body: JSON.stringify(user)
    //         })
    //         .then((response)=>response.json())
    //         .then((data)=>{
    //             console.log(data);
    //         })
    //         .catch((err)=>{
    //             console.log(err)
    //         })
    //     }
    // }
 function register() {
        if (user.password === user.cpassword) {
            console.log(JSON.stringify(user));
            delete user.cpassword;

          fetch('http://localhost:8000/user/register/', {
                headers: {
                    'Content-Type': "application/json"
                },
                method: 'POST',
                body: JSON.stringify(user)
            })
             .then((response)=>response.json())
             .then((data)=>{
                  setmessage(data.message);
                  setboxvisible(true)
                 console.log(data);
                // setTimeout(()=>{
                //     setboxvisible(false)
                // },3000)
             }) 
            // console.log(await res.json());
            .catch((err)=>{
                console.log(err)
            })
        }
        else {
            console.log('DO NOT MATCH')
        }
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
               <input type="text" placeholder="Enter Name" onChange={(event)=>{readvalue("name",event.target.value)}}/>
               <input type="email" placeholder="Enter email" onChange={(event)=>{readvalue("email",event.target.value)}}/>
               <input type="text" placeholder="Enter username" onChange={(event)=>{readvalue("username",event.target.value)}}/>
               <input type="password" placeholder="Enter password" onChange={(event)=>{readvalue("password",event.target.value)}}/>
               <input type="password" placeholder="Enter password Again" onChange={(event)=>{readvalue("cpassword",event.target.value)}}/>
                <button onClick={register}>Register</button>
            </div>

        </section>
    )
}

export default Register;