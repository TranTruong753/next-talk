'use client'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { NavUser } from "./nav-user"
import { Moon, Sun } from "lucide-react"
import { Switch } from "./ui/switch"
import { NavMain } from "./nav-main"
import { useTheme } from "next-themes"
import React from "react"


const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    friends: [
        { id: 1, name: "John Doe", status: "online", avatar: "/avatars/john.jpg", lastMessage: "Hello there!" },
        { id: 2, name: "Jane Smith", status: "offline", avatar: "/avatars/jane.jpg", lastMessage: "See you tomorrow" },
        { id: 3, name: "Mike Johnson", status: "online", avatar: "/avatars/mike.jpg", lastMessage: "How are you?" },
        { id: 4, name: "Sarah Wilson", status: "online", avatar: "/avatars/sarah.jpg", lastMessage: "I sent the documents" },
        { id: 5, name: "Sarah DD", status: "online", avatar: "/avatars/sarah.jpg", lastMessage: "I sent the documents" },
    ],
    group: [
        { id: 1, nameGroup: "3 anh hùng", avatar: "/avatars/john.jpg", nameUserSend: 'Tuấn',lastMessage: "Hello there!" },
        { id: 2, nameGroup: "Chiên đội", avatar: "/avatars/jane.jpg", nameUserSend: 'Anh',lastMessage: "See you tomorrow" },
        { id: 3, nameGroup: "Bay đội", avatar: "/avatars/jane.jpg", nameUserSend: 'Anh',lastMessage: "See you tomorrow" },

    ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { theme, setTheme } = useTheme()
    const [isClient, setIsClient] = React.useState(false)

    React.useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <div className="rounded-2xl flex justify-between items-center gap-3 p-4 border bg-gradient-to-br from-purple-500 to-pink-500">
                    <h1 className="text-white font-semibold">Next-Talk</h1>
                    <div className="flex gap-x-1 items-center">
                        <Sun color="white" size={20} />
                        <Switch className="cursor-pointer" id="airplane-mode" checked={isClient && theme === 'dark'} onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
                        <Moon color="white" size={20} />
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <NavMain friends={data.friends} group={data.group} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    )
}