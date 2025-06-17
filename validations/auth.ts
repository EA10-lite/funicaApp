import * as yup from "yup";

export const signup_schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(24).required(),
    remember: yup.boolean().required(),
});

export const reset_password_schema = yup.object().shape({
    newPassword: yup.string().min(6).max(24).required(),
    confirmPassword: yup.string().min(6).max(24).required(),
});