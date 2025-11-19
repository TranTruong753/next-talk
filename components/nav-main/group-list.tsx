import { GroupType } from "@/lib/type";
import GroupItem from "./group-item";

type GroupListProps = {group : GroupType}

function GroupList({group}:GroupListProps) {
    return (
        <div className="flex-1 overflow-y-auto">
            {group.map((g) => <GroupItem key={g.id} groupItem={g} />)}
        </div>
    );
}

export default GroupList;