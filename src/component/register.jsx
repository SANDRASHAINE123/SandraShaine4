import { useState } from "react";
import{useNavigate} from"react-router-dom";
import axios from "axios";
function Signin()
{
    const navigate=useNavigate();
    const[result,setResult]=useState('');
    const [username, setUserName] = useState('');
     const [password, setPassword] = useState('');
     const[email,setEmail]=useState('');
     const[repassword,setRepassword]=useState('');
     const[error,setError]=useState(false);

  async function handleSubmit()
  {
    const minPasswordLength=4;
    if(password.length==repassword.length)
      if(password==repassword){
        setResult({email,password,repassword});
        setError(false);
        //navigate('/login');
        const response= await axios.post('http://localhost:5001/login',{
          username,
          email,
          password
        });

      }
  }
function handleUsername(e)
{
    setUserName(e.target.value);
}
function handleEmail(e)
{
    setEmail(e.target.value);

}
function handlePassword(e)
{
    setPassword(e.target.value);
}
function handleRepassword(e)
{
    setRepassword(e.target.value);
}
function handlesubmit(e)
{
if(password==repassword)

{
    setResult({username,email,password,repassword});
    navigate('/login')
    axios.post('http://localhost:5001/register',{
        username,
        email,
        password
    })
}
else
setError(true)

}
const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'white',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '350px',
      padding: '30px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      backgroundColor: 'grey',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      gap: '15px',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '5px 0',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: 'green',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    error: {
      color: 'red',
      fontSize: '14px',
      marginTop: '10px',
    },
    result: {
      marginTop: '60px',
      textAlign: 'center',
    },
};
    return(
        <div style={styles.container}>
            <form style={styles.form}>
                    <input type="text" placeholder="enter your Username" onClick={handleUsername} style={styles.input} />
                    <input type='email'placeholder="enter your email" onClick={handleEmail} style={styles.input}/>                   
                    <input type="password" placeholder="enter your Password"onClick={handlePassword} style={styles.input}/>
                    <input type='password'placeholder="enter the repassword"onClick={handleRepassword} style={styles.input}/>
                     <button type="submit" onClick={handlesubmit} style={styles.button}>sign up</button>
                </form> 
                <div style={styles.result}>
                USERNAME={result.username}<br/>
                EMAIL={result.email}<br/>
                password={result.password}<br/>
                REPASSWORD={result.repassword}<br/>
                </div>
{ error== true?<h1>invalid</h1>:''}
        </div>
    )
        
    

    };

export default Signin;