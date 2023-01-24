

function Validate(values) {
    let errors = {};
   //username
    if (!values.username.trim()) {
         errors.username = "Username required";
    }else if (values.username.length < 3 || values.username.length > 16) {
         errors.username = "Username must be between 3 and 16 characters";
    }

    //email
    const regex = /[a - z0 -9._ % +-] +@[a - z0 - 9. -]+\.[a - z]{ 2, 4 } $/;
    if (!values.email.trim()) {
        errors.email = "Email required";
    } else if (!regex) {
        errors.email = "plz enter valid email";
    }

   //password   
    // const pwdCheck = /(?=.*\d)(?=.* [a - z])(?=.* [A - Z]).{ 8,}/;
    if (!values.password.trim()) {
        errors.password = "Password required";
    } else if(values.password.length < 8 && /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/){
        errors.password = "A minimum 8 characters password contains a combination of uppercase and lowercase letter and number are required.";
    } 
    
    

    if (!values.confirmpassword.trim()) {
        errors.confirmpassword = "Confirmm password required";
    }else if (values.confirmpassword.length < 8) {
        errors.confirmpassword="minimum eight characters"
    }
    else if (values.password !== values.confirmpassword) {
        errors.confirmpassword = "Password not match";
    }
    return errors;
}
export default Validate;
