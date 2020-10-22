import { AUTH_USER, LOGOUT_USER, ADD_REVIEW, CLEAR_REVIEW } from "../types";
import * as api from "../../api";

export const registerUser = (userData) => ({
  type: AUTH_USER,
  payload: api.registerUser(userData),
});

export const loginUser = (userData) => ({
  type: AUTH_USER,
  payload: api.loginUser(userData)
});

export const autoSignIn = () => ({
  type: AUTH_USER,
  payload: api.autoSignIn()
})

export const logoutUser = () => ({
  type: LOGOUT_USER,
  payload: api.logoutUser()
})

export const updateProfile = (formData, isEmailChanged) => ({
  type: AUTH_USER,
  payload: api.updateProfile(formData, isEmailChanged)
})

export const addReview = (data, user) => ({
  type: ADD_REVIEW,
  payload: api.addReview(data, user)
})

export const clearReview = () => ({
  type: CLEAR_REVIEW,
  payload: null
})
