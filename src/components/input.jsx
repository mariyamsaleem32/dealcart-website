import { useState } from "react";

const Input = () => {
    // Single state object to hold all form values
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    // Generic change handler to update form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Submit handler
    const submit = () => {
        // Only submit if all fields are filled
        const { firstName, lastName, email, password } = formData;
        if (firstName && lastName && email && password) {
            alert("Form Submitted Successfully!");
            console.log(formData); // Normally you'd send this to a backend here
    
            // Reset the form fields after submission
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
            });
        } else {
            alert("Please fill in all fields!");
        }
    };
    

    return (
        <div>
            {/* Input fields */}
            <input
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
            />
            <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <button onClick={submit} disabled={Object.values(formData).includes("")}>
                Submit
            </button>
            <h4>First Name: {formData.firstName}</h4>
            <h4>Last Name: {formData.lastName}</h4>
            <h4>Email: {formData.email}</h4>
            <h4>Password: {formData.password}</h4>
        </div>
    );
};

export default Input;
