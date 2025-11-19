'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { activateFormSchema } from '@/lib/definitions';
import { UserCheck } from 'lucide-react';


export default function Page() {
    const formActivate = useForm<z.infer<typeof activateFormSchema>>({
        resolver: zodResolver(activateFormSchema),
        defaultValues: {
            codeId: ''
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof activateFormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }


    return (
        <Card className="w-full shadow-xl border-0">
            <CardHeader className="space-y-2 text-center">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                    <UserCheck color='white' />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">Activate account to Next-talk</CardTitle>
                <CardDescription className="text-gray-600">
                    Activate your account to log in.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">

                {/* Form */}
                <Form {...formActivate}>
                    <form onSubmit={formActivate.handleSubmit(onSubmit)} className="space-y-1" noValidate>
                        <FormField
                            control={formActivate.control}
                            name="codeId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Code</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Input your code" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-end items-center w-full  ">
                            <span className=" text-purple-600 cursor-pointer hover:scale-[1.02] transition-transform duration-300 font-medium underline text-sm">
                                Resend code?
                            </span>
                        </div>


                        <Button type='submit'
                            className="mt-2 cursor-pointer w-full bg-linear-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2.5 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                        >
                            Activate
                        </Button>
                    </form>
                </Form>




            </CardContent>
        </Card>

    );
}
