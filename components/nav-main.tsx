import { UserRoundPlus, UsersRound } from "lucide-react"
import { SidebarMenu } from "./ui/sidebar"
import { FriendsType, GroupType } from "@/lib/type"
import { SectionHeader } from "./section-header"
import FriendList from "./nav-main/friend-list"
import GroupList from "./nav-main/group-list"
import { Separator } from "./ui/separator"



type NavMainProps = {
  friends: FriendsType,
  group: GroupType
}

export function NavMain({
  friends,
  group
}: NavMainProps) {
  return (
    <SidebarMenu className="overflow-y-hidden">
      <>
        <SectionHeader icon={<UserRoundPlus size={18} color="white" />} title="Friends" />
        <FriendList friends={friends} />
      </>
      <Separator className="my-2" />
      <>
        <SectionHeader icon={<UsersRound size={18} color="white" />} title="Group" />
        <GroupList group={group} />
      </>

    </SidebarMenu>
  );
}

