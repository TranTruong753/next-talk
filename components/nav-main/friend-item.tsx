import { FriendInterface } from "@/lib/type";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

type FriendItemProps = { friend: FriendInterface; }

function FriendItem({ friend }: FriendItemProps) {
    return (
        <div
            className={`m-2 rounded-2xl flex items-center gap-3 px-3 py-2 border cursor-pointer hover:bg-muted/50`}
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
    );
}

export default FriendItem;