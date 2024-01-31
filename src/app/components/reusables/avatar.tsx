import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

   
  export function AvatarDemo(profilepic : String) {
    return (
      <Avatar>
        <AvatarImage src={profilepic}alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  }