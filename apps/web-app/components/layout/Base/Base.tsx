import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import MenuItem from "../MenuItem";
import SignInSignUp from "../SignInSignUp";

type Props = {
  children?: ReactNode;
};

/** Documentation for Base component */
export function Base({ children }: Props) {
  return (
    <div className="flex min-h-full">
      <div className="bg-white w-1/5 shrink-0 px-4 py-6 flex flex-col gap-4">
        <h1 className="flex justify-center cursor-pointer">
          <Link href="/">
            <Image className="" src="/assets/img/logo.png" alt="" width="177.6" height="194.8" />
          </Link>
        </h1>

        <div className="text-center underline">
          <SignInSignUp />
        </div>

        <div className="flex flex-col">
          <MenuItem href="/" icon={<HomeIcon />} label="Lista zgłoszeń" />

          <MenuItem href="/animal-report" icon={<AnimalIcon />} label="Zgłoś incydent" />
        </div>
      </div>
      <div className="bg-gray-100 w-full p-6">{children}</div>
    </div>
  );
}

function HomeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 20V9.13199L12 4.33199L4 9.13199V20H8V17.25C8 16.1891 8.42143 15.1717 9.17157 14.4216C9.92172 13.6714 10.9391 13.25 12 13.25C13.0609 13.25 14.0783 13.6714 14.8284 14.4216C15.5786 15.1717 16 16.1891 16 17.25V20H20ZM14 22V17.25C14 16.7196 13.7893 16.2108 13.4142 15.8358C13.0391 15.4607 12.5304 15.25 12 15.25C11.4696 15.25 10.9609 15.4607 10.5858 15.8358C10.2107 16.2108 10 16.7196 10 17.25V22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V9.13199C2 8.78662 2.08943 8.44713 2.25959 8.14659C2.42976 7.84604 2.67485 7.59468 2.971 7.41699L10.971 2.61699C11.2818 2.43049 11.6375 2.33197 12 2.33197C12.3625 2.33197 12.7182 2.43049 13.029 2.61699L21.029 7.41699C21.3252 7.59468 21.5702 7.84604 21.7404 8.14659C21.9106 8.44713 22 8.78662 22 9.13199V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H14Z"
        fill="#21272A"
      />
    </svg>
  );
}

function AnimalIcon() {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.74077 10.7401C9.79877 11.5901 9.35077 12.3151 8.73777 12.3591C8.12577 12.4031 7.58176 11.7491 7.52376 10.8991C7.46576 10.0491 7.91477 9.32406 8.52777 9.28006C9.13977 9.23606 9.68377 9.89006 9.74077 10.7401ZM13.9578 7.21606C13.3628 7.06006 12.7148 7.60406 12.5108 8.42906C12.3048 9.25506 12.6208 10.0511 13.2158 10.2061C13.8108 10.3621 14.4598 9.81906 14.6638 8.99306C14.9308 7.91806 14.1008 7.25306 13.9578 7.21606ZM15.3528 10.0001C14.7268 10.0101 14.2308 10.6201 14.2448 11.5661C14.2578 12.5111 14.7748 12.9421 15.4018 12.9331C16.0268 12.9231 16.5238 12.4771 16.5108 11.5311C16.4918 10.3011 15.5028 9.99806 15.3528 10.0011V10.0001ZM10.8198 7.00806C10.2238 7.00806 9.74177 7.69206 9.74177 8.53606C9.74177 9.38006 10.2238 10.0641 10.8198 10.0641C11.4148 10.0641 11.8978 9.38006 11.8978 8.53606C11.8978 7.69206 11.4148 7.00806 10.8198 7.00806ZM10.6818 11.7541C10.3378 12.2611 9.94777 12.7561 9.19077 13.4041C8.43377 14.0521 8.11277 14.4991 8.11277 15.1591C8.11277 15.8191 8.47977 16.9141 9.52277 16.9141C10.5668 16.9141 11.0718 16.6781 11.8978 16.6781C12.7228 16.6781 13.2738 17.0081 14.3178 17.0081C15.3608 17.0081 15.7978 15.9951 15.7978 15.3351C15.7978 14.6751 15.6158 14.3021 14.7798 13.5501C14.2438 13.0671 13.7898 12.6731 13.0788 11.6601C12.7268 11.1601 12.3218 11.0951 11.8978 11.0951C11.4728 11.0951 11.0258 11.2481 10.6818 11.7551V11.7541Z"
        fill="#21272A"
      />
      <path
        d="M6.00977 4C5.47933 4 4.97062 4.21071 4.59555 4.58579C4.22048 4.96086 4.00977 5.46957 4.00977 6V18C4.00977 18.5304 4.22048 19.0391 4.59555 19.4142C4.97062 19.7893 5.47933 20 6.00977 20H18.0098C18.5402 20 19.0489 19.7893 19.424 19.4142C19.7991 19.0391 20.0098 18.5304 20.0098 18V6C20.0098 5.46957 19.7991 4.96086 19.424 4.58579C19.0489 4.21071 18.5402 4 18.0098 4H6.00977ZM6.00977 2H18.0098C19.0706 2 20.088 2.42143 20.8382 3.17157C21.5883 3.92172 22.0098 4.93913 22.0098 6V18C22.0098 19.0609 21.5883 20.0783 20.8382 20.8284C20.088 21.5786 19.0706 22 18.0098 22H6.00977C4.9489 22 3.93148 21.5786 3.18134 20.8284C2.43119 20.0783 2.00977 19.0609 2.00977 18V6C2.00977 4.93913 2.43119 3.92172 3.18134 3.17157C3.93148 2.42143 4.9489 2 6.00977 2V2Z"
        fill="#21272A"
      />
    </svg>
  );
}
