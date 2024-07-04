"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import { Box, CircularProgress, ToggleButton, ToggleButtonGroup } from "@mui/material";
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import useThemeMode from "../hooks/themeMode";
import { ThemeMode } from "@/context/theme";
import CompanyAppBar from "@/components/menu/appbar";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useLayoutEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = "auto";
    }
  }, []);


  useThemeMode()
  const [isMounted, setIsMounted] = useState<Boolean>(false);

  useEffect(() => {
    setIsMounted(true)

  }, [])
  const onRefChange = useCallback((node: any) => {

    if (node === null) {
      // DOM node referenced by ref has been unmounted
    } else {
      // node.style.overflow = 'auto'
      document.body.style.overflow = "auto"
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  if (!isMounted) {
    return <html>

      <body>


      </body>
    </html>

  }



  return (

    < html>

      <body ref={onRefChange} style={{
        backgroundColor: 'background.default',
        overflow: 'scroll !important',



      }} className={inter.className}>
        <ThemeMode  >
          <CompanyAppBar />

          {children}




        </ThemeMode>
      </body>
    </html >
  );
}
