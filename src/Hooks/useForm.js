import React,{useState} from 'react'

const useForm = (validate) => {
   
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: ""
    });
    
    const [error, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((pre) => {
            return {
                ...pre,
                [name]: value,
            }
        })
     
    }
    const onSubmit=(e)=> {
        e.preventDefault()
        setErrors(validate(values))
       
    }

    return { handleChange ,values ,onSubmit ,error };
}

export default useForm;