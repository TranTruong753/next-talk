export interface FriendInterface {
    id: number
    name: string
    avatar: string
    status: string
    lastMessage: string
}

export type FriendsType = FriendInterface[]

export interface GroupInterface {
    id: number
    nameGroup: string
    avatar: string
    nameUserSend: string,
    lastMessage: string
}

export type GroupType = GroupInterface[]

