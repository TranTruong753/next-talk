'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";
import React from "react";


const friends = [
  { id: 1, name: "John Doe", status: "online", avatar: "/avatars/john.jpg", lastMessage: "Hello there!" },
  { id: 2, name: "Jane Smith", status: "offline", avatar: "/avatars/jane.jpg", lastMessage: "See you tomorrow" },
  { id: 3, name: "Mike Johnson", status: "online", avatar: "/avatars/mike.jpg", lastMessage: "How are you?" },
  { id: 4, name: "Sarah Wilson", status: "online", avatar: "/avatars/sarah.jpg", lastMessage: "I sent the documents" },
];

export default function Page() {
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
    <main className="flex flex-col h-full ">
      {/* Chat Header */}
      <div className="flex items-center gap-3 p-4 border-b  ">
        <SidebarTrigger className="-ml-1 cursor-pointer" />
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
          <div className="bg-primary-foreground text-primary rounded-lg p-3 shadow-sm max-w-[70%]">
            <p className="text-sm">Hello How are you doing today?</p>
          </div>
        </div>

        <div className="flex items-start gap-2 justify-end">

          <div className="flex flex-col items-end space-y-1">
            <div className="bg-primary text-primary-foreground rounded-lg p-3 shadow-sm ">
              <p className="text-sm">I am good Just working on some projects.!</p>
            </div>
            <p className="text-xs font-normal">Hôm qua 15:46 </p>
            <Badge className=" bg-gradient-to-br from-purple-500 to-pink-500">seen</Badge>
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
            <Button type="submit" size="icon" disabled={!message.trim()} className="bg-gradient-to-br from-purple-500 to-pink-500">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
