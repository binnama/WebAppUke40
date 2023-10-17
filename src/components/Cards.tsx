import { ReactNode } from "react";

//export default function Cards({ children }: {children: ReactNode}) {
export default function Cards({ children }: {children: ReactNode}) {

    return(
        <div className ="border-solid">
            {children}
        </div>
    )
}