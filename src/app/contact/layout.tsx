import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "",
  };

export default function AboutLayout({children}:Readonly<{
    children: React.ReactNode;
}>){
    return(
        <div>
            {children}
        </div>
    )
}