function  sendOTP(){
    const email = document.getElementById("email");
    const verify = document.getElementById("verify") [0];
   
    let otp_val = Math.floor(Math.random()*10000) 
    let email_body = `<h2> Your OTP is ${otp_val} </h2>`
  
    Email.send({ 
      SecureToken : "966d4e69-fca9-4a47-b0bf-31bc20188345",
      To : email.value,
      From : "darkbrogamersyt@gmail.com",
      Subject : "Email OTP using Javascript",
      Body :  email_body,
  }).then(
    message =>  {
      if(message === "OK"){
        alert(" OTP sent to your email "+email.value);
        verify.style.color = "flex";
        const otp_inp = document.getElementById("otp_inp");
        const otp_btn = document.getElementById("otp_btn");
  
        otp_btn.addEventListener('click', ()=>{
          if(otp_inp.value == otp_val)
          {
            alert("Email address verifed....")
          }
        })
      }
    }
  );
   }