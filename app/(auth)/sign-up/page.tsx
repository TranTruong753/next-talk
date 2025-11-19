import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { UserPlus } from 'lucide-react';
import SignUpForm from '@/components/sign-up/sign-up-form';


export default function Page() {
 

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
                <SignUpForm/>

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
