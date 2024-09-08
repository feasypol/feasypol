"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

interface ImageWeb{
    srcDesktop: string;
    srcMobile: string;
    alt: string;
    widthDesktop:number;
    heightDesktop:number;
    widthMobile:number;
    heightMobile:number;
}

export default function ImageWeb(props:ImageWeb) {
    const [srcImage, setSrcImage] = useState<string>("");
    const [width, setWidth] = useState(window.innerWidth);
    const [heightImage, setHeightImage] = useState(0);
    const [widthImage, setWidthImage] = useState(0);

    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);


    useEffect(() => {

        if (width > 992) {
            setSrcImage(srcImage=>  props.srcDesktop);
            setHeightImage(props.heightDesktop);
            setWidthImage(props.widthDesktop);

        } else {
          setSrcImage(srcImage =>props.srcMobile);
            setHeightImage(props.heightMobile);
            setWidthImage(props.widthMobile);
        }
    }, [width]);


  return (
    <div className="flex justify-center">
      <Image
        src={srcImage}
        alt="placeholder"
        width={1500}
        height={300}
      />
    </div>
  );
}