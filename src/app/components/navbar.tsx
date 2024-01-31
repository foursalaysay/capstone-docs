import { BrainCircuit } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"




export default function Navbar(){
    return(
        <div className='flex flex-row w-screen h-28 items-center justify-between px-10 fixed mb-[400px]'>
            <div className='flex flex-row gap-3 items-center justify-center'>
                <BrainCircuit className='w-20 h-20 text-white' />
                <h1 className='text-3xl text-white font-medium underline-offset-1'>| MS</h1>
            </div>
            <div > 
            <Select>
                <SelectTrigger className="w-[280px] ">
                    <SelectValue placeholder="Member's Profile" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="kyle" >
                    <div className='flex flex-row gap-4 items-center justify-start'>
                        <Avatar className='w-7 h-7'>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h4>Kyle Salaysay</h4>
                    </div>
                </SelectItem>
                <SelectItem value="gino">
                    <div className='flex flex-row gap-4 items-center justify-start'>
                        <Avatar className='w-7 h-7'>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h4>Gino Carrillo</h4>
                    </div>
                </SelectItem>
                <SelectItem value="xyriel">
                    <div className='flex flex-row gap-4 items-center justify-start'>
                        <Avatar className='w-7 h-7'>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h4>Xyriel Cuizon</h4>
                    </div>
                </SelectItem>
                <SelectItem value="toper">
                    <div className='flex flex-row gap-4 items-center justify-start'>
                        <Avatar className='w-7 h-7'>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h4>Christopher Culanag</h4>
                    </div>
                </SelectItem>
                <SelectItem value="taan">
                    <div className='flex flex-row gap-4 items-center justify-start'>
                        <Avatar className='w-7 h-7'>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h4>Chris Ann Service</h4>
                    </div>
                </SelectItem>
                <SelectItem value="tine">
                    <div className='flex flex-row gap-4 items-center justify-start'>
                        <Avatar className='w-7 h-7'>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h4>Cristine Mae Mamac</h4>
                    </div>
                </SelectItem>
                </SelectContent>
            </Select>
            </div>
        </div>
    )
}