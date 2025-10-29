import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image'

export default function Page() {
    return (
        <div className="flex h-screen w-full">
             {/* Phần hình ảnh - chiếm 2/3 */}
            <div className="w-2/3 relative h-full">
                <Image
                    src="/imgs/Illustration.png"
                    alt="Login Illustration"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                    className="brightness-105 p-6"
                />
                {/* Overlay gradient để text dễ đọc hơn nếu cần */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
            </div>
            {/* Phần form - chiếm 1/3 và đẩy sang trái */}
            <div className="w-1/3 flex items-center justify-center p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-l-2xl dark:from-indigo-950 dark:to-gray-900">
                <div className="w-full max-w-md px-4">
                    <Card className="w-full shadow-xl border-0">
                        <CardHeader className="space-y-2 text-center">
                            <div className="mx-auto w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
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
                                className="cursor-pointer w-full bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2.5 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                            >
                                Sign In With Google
                            </Button>
                          
                        </CardContent>
                    </Card>
                </div>
            </div>

           
        </div>
    );
}