import React from 'react';
import './App.css';
import logo from './images/logo.png';
import restaurant1 from './images/restaurant1.png';
import restaurant2 from './images/vintage-restos9.png';
import restaurant3 from './images/vintage-restos1.png';
/*import account from './images/account.png';
import password from './images/password.png';*/


class Login extends React.Component {

  constructor() {
    super();
    this.state = {username:"", password:"", wholeName:"", number:"", email:"", guest:"", notes:"", date:"" };

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleWholeName = this.handleWholeName.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.handleNotes = this.handleNotes.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAlert(event) {
    alert("Thank you for your registration! Please proceed to the restaurant now.");
  }
  handleUserChange(event) {
    this.setState({username: event.target.value})
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }
  handleWholeName(event) {
    this.setState({wholeName: event.target.value})
  }
  handleNumber(event) {
    this.setState({number: event.target.value})
  }
  handleEmail(event) {
    this.setState({email: event.target.value})
  }  
  handleGuest(event) {
    this.setState({guest: event.target.value})
  }
  handleNotes(event) {
    this.setState({notes: event.target.value})
  }
  handleDate(event) {
    this.setState({date: event.target.value})
  }
  handleSubmit() {
    if (this.state.username === ('Admin')) {
      if (this.state.password === ('admin')) {
        alert("Login Successfully!");
      } else {
        alert("Wrong Password.");
      }
    } else {
      alert("Wrong Username.");
    }
  }

  render() {

    return (
      
      <div>

        {/* LOGIN */ }
        <h1 id='login' className='top'>.</h1>

        <div className='login'>
              
          <img src={logo} alt='our logo' className='logo'></img>

          <h2>Login Account</h2>
              
          <form onSubmit={this.handleSubmit}>
            <section className="sectionOne">    
            <div className='border-bottom'>
              <div className='images'>
               {/*<img src={account} alt='our logo' className='account'></img>*/}
              </div> 
              <input type='text' placeholder='Username' id='username' onChange={this.handleUserChange} required></input>
            </div>    
            <br></br>
            <div className='border-bottom'>
              {/*<img src={password} alt='our logo' className='account'></img>*/}
            <input type='password' placeholder='Password' id='password' onChange={this.handlePasswordChange} required></input>
            </div>  
            <div className='rememberMe'>
              <input type="checkbox" value="remember" id="remember" />
              <label for="remember">Remember me</label>
            </div>
            <div className='rememberMe2'> 
              <a href='#forget'>Forget password?</a>
            </div>
            
            <br/><br/><br/>

            <a href='#confirm' className='login'>Login</a>

            <p className='create'>Don't have an account? <a href='#create'>Create</a> </p>
            </section>
          </form>

          <br></br>

        </div>

        {/* LOGIN SUCCESS */ }
        <h1 id='confirm' className='top2'>.</h1>

        <div className='confirm'>

          <h3> Login Successful. </h3>

          <a href='#login' className='logout'> Logout </a>

          <a href='#home' className='continue'> Continue </a>

          <br/>
        </div>

        <br/>

        {/* HOMEPAGE */ }
        <div className="home">

          <div className='logo' id="home">
            <img src={logo} alt='our logo' className='home' align='left'></img>
          </div>

          <br/><br/>
          <div className="navbar" align='right'>
            <a href='#home' className='nav'> HOME </a>
            <a href='#find' className='nav'> FIND RESTAURANT </a>
            <a href='#aboutus' className='nav'> ABOUT US </a>
            <a href='#login' className='nav'> LOGOUT </a>
          </div>

          
          <div>
            <br/><br/><br/><br/>
            <img src={restaurant1} className='welcome' alt='restaurant'></img>
            <h2 align='center'> "Click to eat app" is an app that helps you find your desire restaurants within the area wherever you are!</h2>
          </div>
          
        </div>


        {/* About us */ } 
        <h1 className='top'>.</h1>
        <div className='aboutus'>

          <div className='logo' id='aboutus'>
              <img src={logo} alt='our logo' className='home' align='left'></img>
            </div>

            <br/><br/>
            <div className="navbar" align='right' >

              <a href='#home' className='nav'> HOME </a>
              <a href='#find' className='nav'> FIND RESTAURANT </a>
              <a href='#aboutus' className='nav'> ABOUT US </a>
              <a href='#login' className='nav'> LOGOUT </a>

            </div>

            <br/><br/><br/><br/><br/><br/>

            <div className='about'>

              <h3> Click To Eat App</h3>
              <p> CLick to Eat app was developed by group of students in ITAE determined to help consumers to help finding restaurants near their specific location. This app is set to help people to reduced their pursuit of looking for a place to find. </p>

              <br/>
              <div>

                <h5>Leader: Sean Michael Iguin</h5>
                <h5>Members:</h5>
                <ol>
                  <li>Anna Beatrize Fontanilla</li>
                  <li>Mikaela Clodin Fuerte</li>
                  <li>Rachelann Ritz Hontiveros</li>
                  <li>Joan Hazel Moreno</li>
                </ol>

              </div>

            </div>

            { /* Finder */ } 
            <h1 className='top2'>.</h1>

            <div className='finder'>

              <div className='logo' id='find'>
                <img src={logo} alt='our logo' className='home' align='left'></img>
              </div>

              <br/><br/>
              <div className="navbar" align='right' >

                <a href='#home' className='nav'> HOME </a>
                <a href='#find' className='nav'> FIND RESTAURANT </a>
                <a href='#aboutus' className='nav'> ABOUT US </a>
                <a href='#login' className='nav'> LOGOUT </a>

              </div>

              <div className='search'>
                <form>

                  <input type='textarea' placeholder='Pin Location'></input>
                  <input type='Submit' value='Search'></input>

                </form>

                <br/>

                <div className='results'>
                  <h3>Search Results</h3>

                  <button className='finder'>

                  <a href='#form'> 
                      <img src={restaurant2} alt='sample' ></img>

                      <p> Barbara’s Heritage Restaurant </p>
                    </a>

                  </button>

                  <button className='finder'>

                  <a href='#form'> 
                      <img src={restaurant3} alt='sample' ></img>

                      <p> Lemuria Gourmet Restaurant </p>
                    </a>

                  </button>

                </div>

              </div>

            </div>

            {/* Form */}
            <div>

              <div className='logo' id='form'>
                  <img src={logo} alt='our logo' className='home' align='left'></img>
                </div>

                <br/><br/>
                <div className="navbar" align='right' >

                  <a href='#home' className='nav'> HOME </a>
                  <a href='#find' className='nav'> FIND RESTAURANT </a>
                  <a href='#aboutus' className='nav'> ABOUT US </a>
                  <a href='#login' className='nav'> LOGOUT </a>

                </div>

                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>

                <div className='form' > 
                <h2> Reservation </h2>

                  <form className='reserve' >

                    <label> Whole Name:  

                      <input type="text" placeholder="Name" id='fname' onChange={this.handleWholeName}/>
                    
                    </label>

                    <br/><br/>

                    <label> Contact Number: 

                      <input type="number" placeholder="Contact Number" id='contact'  onChange={this.handleNumber}/>

                    </label>

                    <br/> <br/>

                    <label>Email: 

                      <input type="text" placeholder="Email" id='email'  onChange={this.handleEmail}/>

                    </label>

                    <br/><br/>

                    <label>Number of Guest:

                      <input type="number" placeholder="Number of Guest" id='guestNum'  onChange={this.handleGuest}/>
                    
                    </label>
                    
                    <br/><br/>

                    <label>Additional Notes: 

                      <input type="text" placeholder="Notes" id='addNotes'  onChange={this.handleNotes}/> 

                    </label>

                    <br/><br/>

                    <label>Date and Time: 

                      <input type="datetime-local" name="datetime" id='dateandtime'  onChange={this.handleDate}/>
                    
                    </label>

                    <br/><br/>

                    <a className='form' onClick={this.handleAlert} href='#home'>
                      Submit
                    </a>
                  </form>
                </div>

            </div>

        </div>
        

      </div>
      

    );
    
  }
  
}
export default Login;