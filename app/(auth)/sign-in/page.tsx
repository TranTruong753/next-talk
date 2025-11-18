'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { forgotFormSchema, signInFormSchema } from '@/lib/definitions';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';


export default function Page() {

    // 1. Define your form.
    const formSignIn = useForm<z.infer<typeof signInFormSchema>>({
        resolver: zodResolver(signInFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const formForgotPw = useForm<z.infer<typeof forgotFormSchema>>({
        resolver: zodResolver(forgotFormSchema),
        defaultValues: {
            email: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof signInFormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }


    function onSubmitForgotPw(values: z.infer<typeof forgotFormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (

        <Card className="w-full shadow-xl border-0">
            <CardHeader className="space-y-2 text-center">
                <div className="mx-auto w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <CardTitle className="text-2xl font-bold text-primary">Welcome to Next-talk</CardTitle>
                <CardDescription className="text-gray-600">
                    Please sign in with your email account
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">

                <Button
                    className="cursor-pointer w-full bg-linear-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2.5 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                    Sign In With Google
                </Button>

                <Separator />

                {/* Form */}
                <Form {...formSignIn}>
                    <form onSubmit={formSignIn.handleSubmit(onSubmit)} id='sign-in-form' className="space-y-1 mb-0" noValidate>
                        <FormField
                            control={formSignIn.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type='email' placeholder="Input your email" {...field} />
                                    </FormControl>
                                    {/* <FormDescription>
                                                    This is your public display name.
                                                </FormDescription> */}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={formSignIn.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type='password' placeholder="Input your password" {...field} />
                                    </FormControl>
                                    {/* <FormDescription>
                                                    This is your public display name.
                                                </FormDescription> */}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
                {/* Forgot */}


                <Dialog
                    onOpenChange={(open) => {
                        if (open) formForgotPw.reset(); // Reset khi mở dialog
                    }}
                >

                    <DialogTrigger asChild>
                        <div className="flex justify-end items-center w-full  ">
                            <span className=" text-purple-600 cursor-pointer hover:scale-[1.02] transition-transform duration-300 font-medium underline text-sm">
                                Forgot password?
                            </span>

                        </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Forgot password</DialogTitle>
                            <DialogDescription>
                                Please enter your email address to receive a new password.
                            </DialogDescription>
                        </DialogHeader>
                        <Form {...formForgotPw}>
                            <form onSubmit={formForgotPw.handleSubmit(onSubmitForgotPw)} id='forgot-form' noValidate>
                                <FormField
                                    control={formForgotPw.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type='email' placeholder="Input your email" {...field} />
                                            </FormControl>
                                            {/* <FormDescription>
                                                        This is your public display name.
                                                    </FormDescription> */}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </form>
                        </Form>

                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline" className='cursor-pointer' >Cancel</Button>
                            </DialogClose>
                            <Button form='forgot-form' type="submit" className="cursor-pointer bg-linear-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2.5 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                            >Send</Button>
                        </DialogFooter>
                    </DialogContent>

                </Dialog>

                {/* Button login */}
                <Button form='sign-in-form' className="group cursor-pointer w-full relative bg-transparent text-purple-600 font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl">

                    <div className="absolute inset-0 rounded-lg bg-linear-to-br from-purple-500 to-pink-500 p-[2px]">
                        <div className="h-full w-full bg-white rounded-md  transition-all duration-300"></div>
                    </div>


                    <span className="relative z-10 transition-colors duration-300">
                        Sign In
                    </span>
                </Button>


                <div className="flex justify-center items-center w-full font-medium ">
                    <Link href={'/sign-up'} className=" text-purple-600 cursor-pointer hover:scale-[1.02] transition-transform duration-300">
                        Create account
                    </Link>

                </div>

            </CardContent>
        </Card>

    );
}