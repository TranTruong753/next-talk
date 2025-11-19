import { FriendsType } from "@/lib/type";
import FriendItem from "./friend-item";

type FriendListProps = {friends : FriendsType}

function FriendList({friends}:FriendListProps) {
    return (
        <div className="flex-2 overflow-y-auto">
            {friends.map((f) => <FriendItem key={f.id} friend={f} />)}
        </div>
    );
}

export default FriendList;