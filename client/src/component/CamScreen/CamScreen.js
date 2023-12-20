// ChatScreen.js
import React from "react";
import { Button } from "./Button";
import { CardHeader, CardContent, Card } from "./Card";
import { AvatarImage, AvatarFallback, Avatar } from "./Avatar";
import { Input } from "./Input";
import { Label } from "./Label";
import { PencilIcon, PlaneIcon } from "./Icon"; // 아이콘 임폴트 추가

export default function ChatScreen() {
  return (
    <div className="grid grid-cols-[3fr_2fr] gap-4 h-screen">
      <div className="bg-black rounded-lg overflow-hidden">
        <div className="w-full h-full object-cover" />
      </div>
      <Card className="h-full overflow-y-auto">
        <CardHeader className="p-4 bg-gray-100 dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Chat</h2>
            <Button
              className="rounded-full w-8 h-8"
              size="icon"
              variant="ghost"
            >
              <PencilIcon className="w-4 h-4" />
              <span className="sr-only">New message</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Avatar className="border w-8 h-8">
                <AvatarImage alt="User's Image" src="/placeholder-user.jpg" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg">
                <p className="text-sm">Hello everyone! 👋</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Avatar className="border w-8 h-8">
                <AvatarImage
                  alt="Participant's Image"
                  src="/placeholder-participant.jpg"
                />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
              <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded-lg">
                <p className="text-sm">Hello! How's it going?</p>
              </div>
            </div>
          </div>
        </CardContent>
        <div className="p-4 border-t">
          <form className="grid gap-2 items-center">
            <Label htmlFor="message">Type your message:</Label>
            <Input
              autoComplete="off"
              className="w-full"
              id="message"
              placeholder="Type your message..."
            />
            <Button size="icon" type="submit">
              <span className="sr-only">Send</span>
              <PlaneIcon className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
