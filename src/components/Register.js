function Register(){
    let user={};
    function readvalue(property,value){
        // /adding property in the object
  user[property]=value;
  

    }
    function register(){
        if(user.password===user.cpassword){
            delete user.cpassword;
            // console.log(user)
            fetch("http://localhost:8000/user/register",{
                method:"POST",
                headers:{
                    "Content-Type":"applicaion/json"
                },
                body: JSON.stringify(user)
            })
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data);
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
    return(
        <section className="main">
            <div className="register">
               <h1 className="title">Create an Account</h1>
               <input type="text" placeholder="Enter Name" onChange={(event)=>{readvalue("name",event.target.value)}}/>
               <input type="email" placeholder="Enter email" onChange={(event)=>{readvalue("email",event.target.value)}}/>
               <input type="text" placeholder="Enter username" onChange={(event)=>{readvalue("username,",event.target.value)}}/>
               <input type="password" placeholder="Enter password" onChange={(event)=>{readvalue("password",event.target.value)}}/>
               <input type="password" placeholder="Enter password Again" onChange={(event)=>{readvalue("cpassword",event.target.value)}}/>
               <button onClick={register}>Register</button>
            </div>

        </section>
    )
}

export default Register;