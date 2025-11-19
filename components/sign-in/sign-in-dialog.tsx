'use client';
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { forgotFormSchema } from "@/lib/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";


function SignInDialog() {
    const formForgotPw = useForm<z.infer<typeof forgotFormSchema>>({
        resolver: zodResolver(forgotFormSchema),
        defaultValues: {
            email: "",
        },
    })

    function onSubmit(values: z.infer<typeof forgotFormSchema>) {
        console.log(values)
    }

    return (
        <Dialog
            onOpenChange={(open) => {
                if (open) formForgotPw.reset(); // Reset khi mở dialog
            }}
        >
            <div className="text-right">
                <DialogTrigger asChild>
                    <span className="select-none text-purple-600 cursor-pointer hover:scale-[1.02] transition-transform duration-300 font-medium underline text-sm">
                        Forgot password?
                    </span>
                </DialogTrigger>
            </div>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Forgot password</DialogTitle>
                    <DialogDescription>
                        Please enter your email address to receive a new password.
                    </DialogDescription>
                </DialogHeader>
                <Form {...formForgotPw}>
                    <form onSubmit={formForgotPw.handleSubmit(onSubmit)} id='forgot-form' noValidate>
                        <FormField
                            control={formForgotPw.control}
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
    );
}

export default SignInDialog;