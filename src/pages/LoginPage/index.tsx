import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormModel } from "../../models";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const navigate = useNavigate();

  // Validation Schema
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Geçerli bir e-posta adresi giriniz")
      .required("Bu alan zorunludur"),
    password: yup
      .string()
      .min(8, "Şifre en az 8 karakter olmalıdır")
      .matches(/[A-Z]/, "Şifre en az bir büyük harf içermelidir")
      .matches(/\d/, "Şifre en az bir rakam içermelidir")
      .required("Bu alan zorunludur"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormModel>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginFormModel) => {
    const { email, password } = data;
    console.log(data);
    if (email === "user@mail.com" && password === "Password1") {
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Giriş Yap</h2>
      <div>
        <input
          {...register("email")}
          type="text"
          placeholder="Email: user@mail.com yazabilirsiniz"
        />
        {errors.email && (
          <div className="form-error">{errors.email.message}</div>
        )}
      </div>

      <div>
        <input
          {...register("password")}
          type="password"
          placeholder="Şifre: Password1 yazabilirsiniz"
        />
        {errors.password && (
          <div className="form-error">{errors.password.message}</div>
        )}
      </div>

      <button type="submit">
        Giriş
        <FontAwesomeIcon icon={faChevronRight} size="xs" />
      </button>
    </form>
  );
};

export default LoginPage;
