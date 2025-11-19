'use client';
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpFormSchema } from "@/lib/definitions";
import z from "zod";

function SignUpForm() {
    const formSignUp = useForm<z.infer<typeof signUpFormSchema>>({
        resolver: zodResolver(signUpFormSchema),
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
        },
    })
   
    function onSubmit(values: z.infer<typeof signUpFormSchema>) {
        console.log(values)
    }
    return (
        <Form {...formSignUp}>
            <form onSubmit={formSignUp.handleSubmit(onSubmit)} className="space-y-1" noValidate>
                <FormField
                    control={formSignUp.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full name</FormLabel>
                            <FormControl>
                                <Input placeholder="Input your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formSignUp.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type='email' placeholder="Input your email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formSignUp.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type='password' placeholder="Input your password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button className="mt-2 group cursor-pointer w-full relative bg-transparent text-purple-600 font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl">

                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-[2px]">
                        <div className="h-full w-full bg-white rounded-md  transition-all duration-300"></div>
                    </div>

                    <span className="relative z-10 transition-colors duration-300">
                        Register
                    </span>
                </Button>
            </form>
        </Form>
    );
}

export default SignUpForm;