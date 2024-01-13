"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import GoogleIcon from "@/public/icons/google.svg";
import Image from "next/image";

import {
  Calendar,
  CreditCard,
  LogOut,
  Mail,
  MessageSquare,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "../ui/skeleton";

const SigninButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading")
    return (
      <div className="flex gap-4 ml-auto items-center">
        <Skeleton className="flex h-10 w-10 shrink-0 overflow-hidden rounded-full" />
        <Skeleton className="w-20 h-9 px-3" />
      </div>
    );

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto items-center">
        <UserDropDown
          image={session.user.image || ""}
          name={session.user.name || ""}
        />
        <Button
          onClick={() => signOut()}
          variant="ghost"
          size="sm"
          className="text-red-600"
        >
          Sign Out
        </Button>
      </div>
    );
  }
  return (
    <Button
      variant="outline"
      className="text-primary p-0 w-28 justify-between px-4"
      onClick={() => signIn("google")}
    >
      <Image src={GoogleIcon} width={25} height={25} alt="Google Icon" />
      Sign In
    </Button>
  );
};

export default SigninButton;

const UserDropDown = ({ image, name }: { image: string; name: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback delayMs={600}>{"AB"}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Appointments</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users className="mr-2 h-4 w-4" />
            <span>Family</span>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
