import { GroupInterface } from "@/lib/type";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";


type GroupItemProps = { groupItem: GroupInterface; }

function GroupItem({ groupItem }: GroupItemProps) {
    return (
        <div
            className={`m-2 rounded-2xl flex items-center gap-3 px-3 py-2 border cursor-pointer hover:bg-muted/50`}
        >
            <div className="relative">
                <Avatar className="select-none flex justify-center items-center rounded-full w-[45px] h-[45px] bg-gray-300">
                    <AvatarImage src={groupItem.avatar} alt={groupItem.nameGroup} />
                    <AvatarFallback>{groupItem.nameGroup.charAt(0)}</AvatarFallback>
                </Avatar>

            </div>

            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                    <p className="font-medium truncate">{groupItem.nameGroup}</p>
                </div>
                <p className="text-sm text-muted-foreground truncate">
                    {`${groupItem.nameUserSend} : ${groupItem.lastMessage}`}
                </p>
            </div>
        </div>
    );
}

export default GroupItem;