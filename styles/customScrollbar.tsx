import {Global} from '@emotion/react'


export default function CustomScrollBar(){
    return (
        <Global styles={
            `::-webkit-scrollbar {
                width: 6px;
              }
              
              /* Track */
              ::-webkit-scrollbar-track {
                background: #072227; 
                border-radius:3px; 
              }
               
              /* Handle */
              ::-webkit-scrollbar-thumb {
                background: #35858B; 
                border-radius:3px; 
            }
            `
        }/>
    )
}