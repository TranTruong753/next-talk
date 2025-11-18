import React from "react";
import Image from 'next/image'

export default function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <React.Fragment>
            <main className="contain-content mx-auto h-full bg-gradient-to-br from-purple-500 to-pink-500">

                <div className="flex h-screen w-full items-center">
                    {/* Phần hình ảnh - chiếm 2/3 */}
                    <div className="w-2/3 relative h-[95%]">
                        <Image
                            src="/imgs/Illustration.png"
                            alt="Login Illustration"
                            fill
                            style={{ objectFit: "contain" }}
                            priority
                            className="brightness-105 absolute  "
                        />
                        {/* Overlay gradient để text dễ đọc hơn nếu cần */}

                    </div>
                    {/* Phần form - chiếm 1/3 và đẩy sang trái */}
                    <div className="w-1/3 flex h-full items-center justify-center p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-l-2xl dark:from-indigo-950 dark:to-gray-900">
                        <div className="w-full max-w-md px-4">

                            {children}
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
}