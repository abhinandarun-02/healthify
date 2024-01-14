"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import us from "@/public/icons/us.svg";
import india from "@/public/icons/in.svg";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const LangSelector = () => {
  const pathname = usePathname();
  const { replace } = useRouter();
  return (
    <Select
      defaultValue={pathname.substring(1, 3)}
      onValueChange={(value) => {
        console.log(value);
        replace(`/${value}${pathname.substring(3)}`);
      }}
    >
      <SelectTrigger className="w-44">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en" className="cursor-pointer">
          <div className="flex items-center gap-2">
            <Image src={us} width={14} height={14} alt="English (US)" />
            English (US)
          </div>
        </SelectItem>

        <SelectItem value="hi" className="cursor-pointer">
          <div className="flex items-center gap-2">
            <Image src={india} width={14} height={14} alt="English (US)" />
            Hindi (IN)
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
