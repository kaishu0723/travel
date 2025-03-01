"use client";
import Image from "next/image";
import React from "react";
import Masonry from "react-masonry-css";
import data from "./data.json";

const list = () => {
    const breakpointColumnsObj = {
        default: 4,
        1200: 3,
        800: 2,
        500: 1,
    };

    return (
        <div className="mx-4">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {data.map((item, id) => (
                    <div key={id} className="my-4 relative">
                        <div className="overflow-hidden rounded-md">
                            <div className="absolute w-[100%] h-[100%] bg-gradient-to-t from-black via-white/10 to-white/10 rounded-md border-white border"></div>
                            <Image
                                src={item.link}
                                alt={item.name}
                                width={640}
                                height={1}
                                className="object-cover"
                            />
                        </div>
                        <p className="p-1 absolute bottom-0">{item.name}</p>
                    </div>
                ))}
            </Masonry>
        </div>
    );
}

export default list;