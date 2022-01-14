import {useClickedOutside} from "@hooks/index";

import {Box} from "@chakra-ui/react"
import { useRef } from "react";
export default function Test() {

   const boxRef= useRef<HTMLDivElement>(null)
   useClickedOutside(boxRef,()=>console.log('Ola Mundo!'));
    return (
        <div>
            <p>Text page</p>

            <Box w='48' h='48' bgColor={'red.200'} ref={boxRef}>
                <p>Clik aaqui</p>
            </Box>
        </div>
    )
}
