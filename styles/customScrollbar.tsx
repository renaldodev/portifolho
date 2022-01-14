import { Global } from "@emotion/react";

export default function CustomScrollBar() {
  return (
    <Global
      styles={`
            html{
                scroll-behavior: smooth;
            }
            body{
                -moz-osx-font-smoothing: grayscale;
                -webkit-font-smoothing: antialiased;
            }
            *{
                transition:all 300ms ease-in;
            }
            ::-webkit-scrollbar {
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
            `}
    />
  );
}
