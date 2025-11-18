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
import { signUpFormSchema } from '@/lib/definitions';
import { UserPlus } from 'lucide-react';


export default function Page() {
    const formSignUp = useForm<z.infer<typeof signUpFormSchema>>({
        resolver: zodResolver(signUpFormSchema),
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof signUpFormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }


    return (
        <Card className="w-full shadow-xl border-0">
            <CardHeader className="space-y-2 text-center">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                    <UserPlus color='white' />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">Register to Next-talk</CardTitle>
                <CardDescription className="text-gray-600">
                    You can log in with your email account without registering.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">

                <Button
                    className="cursor-pointer w-full bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2.5 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                    Sign In With Google
                </Button>

                <Separator />

                {/* Form */}
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


                <div className="flex justify-center items-center w-full font-medium gap-x-1">
                    <div>
                        <p className='inline mr-1'>Do you have an account?</p>
                        <Link href={'/sign-in'} className=" text-purple-600 cursor-pointer hover:scale-[1.02] transition-transform duration-300">
                            Sign In
                        </Link>
                    </div>

                </div>

            </CardContent>
        </Card>

    );
}
