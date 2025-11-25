import React, { useState } from "react";
import { InputGroup } from "../components/ui/InputGroup";
import { PasswordInput } from "../components/ui/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button/Button";

const INI_FORM_DATA = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(INI_FORM_DATA);
  const [formErrors, setFormErrors] = useState(INI_FORM_DATA);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

     
      // navigate("/dashboard");


      if (
        formData.email === "admin@example.com" &&
        formData.password === "123"
      ) {
        console.log("Login Success!");
        navigate("/dashboard");
      } else {
      
        setFormErrors({
          email: "Invalid Email or Password",
          password: "Invalid Email or Password",
        });
      }

    }, 1500);
  };

  return (
    <div className="w-full md:w-auto md:min-w-[356px] mx-auto p-4">

      {/* Header */}
      <div className="flex flex-col items-start space-y-4">
        <img src="/svgs/brand-logo/logo-trazi.svg" alt="Brand Logo" />
        <h4 className="text-start text-2xl font-semibold">Welcome ADMIN</h4>
      </div>

      <form className="mt-6 space-y-5" onSubmit={handleFormSubmit}>
        <InputGroup
          label="Email Address"
          labelClassName="font-semibold"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="@example.com"
          errorMessage={formErrors.email}
          inputClassName={!formErrors.email && "border-gray-300"}
          hasError={!!formErrors.email}
        />

        <InputGroup
          label="Password"
          labelClassName="font-semibold"
          errorMessage={formErrors.password}
        >
          <PasswordInput
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="***********"
            inputClassName={!formErrors.password && "border-gray-300"}
            hasError={!!formErrors.password}
          />
        </InputGroup>

        <Link to="/">
          <p className="mt-1 text-end font-medium text-sm text-gray-800">
            Forgot Password?
          </p>
        </Link>

        <Button
          variant="secondary"
          type="submit"
          disabled={isLoading}
          className="w-full mt-4 rounded-xl text-sm text-black font-semibold bg-gradient-to-r from-[#FFE784] to-[#FAD129]"
        >
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </form>
    </div>
  );
};
