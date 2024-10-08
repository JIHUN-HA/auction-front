import React, { useState } from "react";
import { IMainCategoryProducts } from "../../../../shared";

interface HotAuctionprops {
    data: IMainCategoryProducts;
    key: string;
}

const HotAuctionCard: React.FC<HotAuctionprops> = ({ data }) => {
    const formatKRW = Intl.NumberFormat("ko-kr", {
        style: "decimal",
    }).format(data.price);
    return (
        <div className="card max-w-[300px] min-w-[130px]  h-auto min-h-[230px] max-h-[500px]  mx-1 mb-3 hover:cursor-pointer hover:underline ">
            <div className="image w-auto h-auto aspect-square flex justify-center items-center overflow-hidden">
                <img src={data.image} alt="" className="aspect-square " />
            </div>
            <div className="my-1 time text-xs text-red-500">
                <span>⏰ {data.leftTime}</span>
            </div>
            <div className="title my-1">
                <span className=" line-clamp-2 text-ellipsis">
                    {data.title}
                </span>
            </div>
            <div className="price mb-1 text-xl">
                <span>{formatKRW}원</span>
            </div>
        </div>
    );
};

export default HotAuctionCard;
