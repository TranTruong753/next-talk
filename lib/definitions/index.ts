import { z } from 'zod'

export const signInFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .trim().min(1, { message: "Password is required." }),
})

export const forgotFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
})


export const signUpFormSchema = z.object({
  fullName: z.string().min(1, { message: "full name is required." }).trim(),
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .trim().min(1, { message: "Password is required." }),
})


export const activateFormSchema = z.object({
  codeId: z.string().trim().min(1, { message: "codeId is required." })
})


