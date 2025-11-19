import { ReactNode } from "react";
import { Button } from "./ui/button";

export function SectionHeader({ title, icon }: { title: string; icon: ReactNode }) {
    return (
        <div className="px-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold">{title}</h2>
            <Button variant="outline" size="icon" className="cursor-pointer bg-linear-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2.5 rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                {icon}
            </Button>
        </div>
    );
}
