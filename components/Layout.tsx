import { Router } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import Loader from "./Loader";

interface ILayoutProps {
  children: ReactNode;
  location: Router;
}

export default function Layout({ children, location }: ILayoutProps) {
  const isHome = location.pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);
  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);
  return <div>{isLoading && isHome ? <Loader fineshLoading={()=>setIsLoading(false)} /> : children}</div>;
}
