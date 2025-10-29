import { UserRoundPlus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { SidebarMenu } from "./ui/sidebar"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"


export function NavMain({
  friends,
}: {
  friends: {
    id: number
    name: string
    avatar: string
    status: string
    lastMessage: string
  }[]
}) {
  return (
    <SidebarMenu>

      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">friends</h2>
        <Button variant="outline" size="icon" className="cursor-pointer  bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2.5 rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
          <UserRoundPlus size={18} color="white" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {friends.map((friend) => (
          <div
            key={friend.id}
            className={`m-2 rounded-2xl flex items-center gap-3 p-4 border cursor-pointer hover:bg-muted/50`}
          //   onClick={() => setSelectedFriend(friend)}
          >
            <div className="relative">
              <Avatar className="select-none flex justify-center items-center rounded-full w-[45px] h-[45px] bg-gray-300">
                <AvatarImage src={friend.avatar} alt={friend.name} />
                <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <Badge
                className={
                  cn("absolute -bottom-0 -right-0 h-3 w-3 rounded-full p-0 border border-white",
                    friend.status === 'online' ? "bg-green-500" : "bg-gray-400"
                  )}
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="font-medium truncate">{friend.name}</p>
              </div>
              <p className="text-sm text-muted-foreground truncate">
                {friend.lastMessage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SidebarMenu>
  );
}

