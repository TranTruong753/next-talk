'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Send } from "lucide-react";

import React from "react";

const friends = [
  { id: 1, name: "John Doe", status: "online", avatar: "/avatars/john.jpg", lastMessage: "Hello there!" },
  { id: 2, name: "Jane Smith", status: "offline", avatar: "/avatars/jane.jpg", lastMessage: "See you tomorrow" },
  { id: 3, name: "Mike Johnson", status: "online", avatar: "/avatars/mike.jpg", lastMessage: "How are you?" },
  { id: 4, name: "Sarah Wilson", status: "online", avatar: "/avatars/sarah.jpg", lastMessage: "I sent the documents" },
];


export default function Home() {
  const [selectedFriend, setSelectedFriend] = React.useState(friends[0]);
  const [message, setMessage] = React.useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Handle send message logic here
    console.log("Sending message:", message);
    setMessage("");
  };


  return (
    <React.Fragment>
      <ResizablePanelGroup
        direction="horizontal"
        className=" border w-100 space-x-0!"
      >
        <ResizablePanel order={1} defaultSize={25} maxSize={25} minSize={20}>
          <div className="flex flex-col h-full border-r">
            <div className="m-2 rounded-2xl flex items-center gap-3 p-4 border bg-gradient-to-br from-purple-500 to-pink-500">
              <h1 className="text-white font-semibold">Next-Talk</h1>
            </div>
            <div className="p-4 ">
              <h2 className="text-xl font-semibold">List friends</h2>
            </div>

            <div className="flex-1 overflow-y-auto">
              {friends.map((friend) => (
                <div
                  key={friend.id}
                  className={`m-2 rounded-2xl flex items-center gap-3 p-4 border cursor-pointer hover:bg-muted/50 ${selectedFriend.id === friend.id ? "bg-muted" : ""
                    }`}
                  onClick={() => setSelectedFriend(friend)}
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
          </div>
        </ResizablePanel>
        <ResizableHandle className='w-0 bg-transparent' />

        <ResizablePanel order={2} defaultSize={75} >
          <div className="flex flex-col h-full ">
            {/* Chat Header */}
            <div className="flex items-center gap-3 p-4 border-b  ">
              <Avatar className="select-none flex justify-center items-center rounded-full h-9 w-9 bg-gray-300">
                <AvatarImage src={selectedFriend.avatar} alt={selectedFriend.name} />
                <AvatarFallback>{selectedFriend.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{selectedFriend.name}</p>
                <div className="flex items-center space-x-1">
                  <Badge
                    className={
                      cn(" h-3 w-3 rounded-full p-0 border border-white",
                        selectedFriend.status === 'online' ? "bg-green-500" : "bg-gray-400"
                      )}
                  />
                  <p className="text-sm text-muted-foreground ">
                    {selectedFriend.status === "online" ? "Online" : "Offline"}
                  </p>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/20">
              {/* Example messages - you can replace with real messages */}
              <div className="flex items-start gap-2">
                <Avatar className="select-none flex justify-center items-center rounded-full h-9 w-9 bg-gray-300">
                  <AvatarImage src={selectedFriend.avatar} />
                  <AvatarFallback>{selectedFriend.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="bg-white rounded-lg p-3 shadow-sm max-w-[70%]">
                  <p className="text-sm">Hello! How are you doing today?</p>
                </div>
              </div>

              <div className="flex items-start gap-2 justify-end">

                <div className="flex flex-col items-end space-y-1">
                  <div className="bg-primary text-primary-foreground rounded-lg p-3 shadow-sm ">
                    <p className="text-sm">I'm good! Just working on some projects. </p>
                  </div>
                  <p className="text-xs font-normal">Hôm qua 15:46 </p>
                  <Badge className="bg-gradient-to-br from-orange-400 to-red-500">seen</Badge>
                </div>
                <Avatar className="select-none flex justify-center items-center rounded-full h-9 w-9 bg-gray-300">
                  <AvatarImage src="/avatars/you.jpg" />
                  <AvatarFallback>Y</AvatarFallback>
                </Avatar>
              </div>
            </div>

            {/* Message Input */}
            <div className="flex justify-center">
              <form onSubmit={handleSendMessage} className="w-5xl p-5 mx-7 mb-7 rounded-2xl border">
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" size="icon" disabled={!message.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </React.Fragment>
  );
}
