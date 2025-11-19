'use client';
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { activateFormSchema } from "@/lib/definitions";
import z from "zod";

function ActivateForm() {
    const formActivate = useForm<z.infer<typeof activateFormSchema>>({
        resolver: zodResolver(activateFormSchema),
        defaultValues: {
            codeId: ''
        },
    })

    function onSubmit(values: z.infer<typeof activateFormSchema>) {
        console.log(values)
    }
    return (
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
    );
}

export default ActivateForm;