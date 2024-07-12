// MyProfileWalletPage.js
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import Header from "../../components/Header";
import MyProfilewalletTotalspending from "../../components/MyProfileWalletTotalspending";
import { ReactTable } from "../../components/ReactTable";
import Sidebar10 from "../../components/Sidebar10";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

const data = [
  {
    totalspending: "Total Spending",
    price: "$432,215.32",
    image: "images/img_trending_up.svg",
    twentyfour: "+2.4%",
    may172022: "May 17, 2022",
  },
  {
    totalspending: "Total Income",
    price: "$21,579.22",
    image: "images/img_trending_up_red_600.svg",
    twentyfour: "-2.32",
    may172022: "May 17, 2022",
  },
  {
    totalspending: "Total Saving",
    price: "$68,483.16",
    image: "images/img_trending_up.svg",
    twentyfour: "+2.4%",
    may172022: "May 17, 2022",
  },
];

const table1Data = [
  { itemlist: "Peachy Puch#22", status: "Actived", openprice: "5.62 ETH", youroffer: "5.62 ETH", timeleft: "1h 19m" },
  {
    itemlist: "Pile of Many Plates",
    status: "On Going",
    openprice: "5.62 ETH",
    youroffer: "5.62 ETH",
    timeleft: "1h 19m",
  },
  {
    itemlist: "Worldpac Alternator",
    status: "Ended",
    openprice: "5.62 ETH",
    youroffer: "5.62 ETH",
    timeleft: "1h 19m",
  },
  { itemlist: "Fram Oil Filter", status: "Actived", openprice: "5.62 ETH", youroffer: "5.62 ETH", timeleft: "1h 19m" },
];

export default function MyProfileWalletPage() {
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("itemlist", {
        cell: (info) => (
          <div className="flex flex-col gap-12">
            <div className="flex w-[86%] items-center gap-3.5 md:w-full">
              <Img src="images/img_ellipse_1018_5.png" alt="circleimage" className="h-[42px] w-[42px] rounded-[50%]" />
              <div className="flex flex-col items-start justify-center gap-[3px]">
                <Heading as="h3" className="tracking-[0.16px]">
                  {info?.getValue?.()}
                </Heading>
                <Text size="s" as="p" className="tracking-[0.12px]">
                  From Mindblowonstudio
                </Text>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <Img src="images/img_ellipse_1018_19.png" alt="circleimage" className="h-[42px] w-[42px] rounded-[50%]" />
              <div className="flex flex-col items-start justify-center gap-1">
                <Heading as="h4" className="tracking-[0.16px]">
                  Dayco Serpentine Belt
                </Heading>
                <Text size="s" as="p" className="tracking-[0.12px]">
                  From Marvin McKinney
                </Text>
              </div>
            </div>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pb-[25px] pl-6 pt-px tracking-[0.14px] sm:pb-5 sm:pl-5">
            Item List
          </Text>
        ),
        meta: { width: "266px" },
      }),
      table1ColumnHelper.accessor("status", {
        cell: (info) => (
          <div className="ml-[25px] flex flex-col items-start gap-[74px] md:gap-[55px] sm:ml-0 sm:gap-[37px]">
            <Text as="p" className="tracking-[0.14px] text-black-900">
              {info?.getValue?.()}
            </Text>
            <Text as="p" className="tracking-[0.14px] text-black-900">
              On Going
            </Text>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pb-[25px] pt-px tracking-[0.14px] sm:pb-5">
            Status
          </Text>
        ),
        meta: { width: "111px" },
      }),
      table1ColumnHelper.accessor("openprice", {
        cell: (info) => (
          <div className="flex flex-col items-start justify-center gap-[72px] md:gap-[54px] sm:gap-9">
            <div className="flex items-center gap-1.5">
              <Img src="images/img_television_gray_900_01.svg" alt="television" className="h-[16px] w-[16px]" />
              <Text as="p" className="tracking-[0.14px] text-black-900">
                {info?.getValue?.()}
              </Text>
            </div>
            <div className="flex items-center gap-1.5">
              <Img src="images/img_television_gray_900_01.svg" alt="television" className="h-[16px] w-[16px]" />
              <Text as="p" className="tracking-[0.14px] text-black-900">
                5.62 ETH
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="px-px pb-6 pt-0.5 tracking-[0.14px] sm:pb-5">
            Open Price
          </Text>
        ),
        meta: { width: "141px" },
      }),
      table1ColumnHelper.accessor("youroffer", {
        cell: (info) => (
          <div className="flex flex-col items-start justify-center gap-[72px] md:gap-[54px] sm:gap-9">
            <div className="flex items-center gap-1.5">
              <Img src="images/img_television_gray_900_01.svg" alt="television" className="h-[16px] w-[16px]" />
              <Text as="p" className="tracking-[0.14px] text-black-900">
                {info?.getValue?.()}
              </Text>
            </div>
            <div className="flex items-center gap-1.5">
              <Img src="images/img_television_gray_900_01.svg" alt="television" className="h-[16px] w-[16px]" />
              <Text as="p" className="tracking-[0.14px] text-black-900">
                5.62 ETH
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="px-px pb-[26px] tracking-[0.14px] sm:pb-5">
            Your Offer
          </Text>
        ),
        meta: { width: "137px" },
      }),
      table1ColumnHelper.accessor("timeleft", {
        cell: (info) => (
          <div className="flex flex-col items-start justify-center gap-[73px] md:gap-[54px] sm:gap-9">
            <Text as="p" className="tracking-[0.14px] text-black-900">
              {info?.getValue?.()}
            </Text>
            <Text as="p" className="tracking-[0.14px] text-black-900">
              1h 19m
            </Text>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="px-px pb-[26px] tracking-[0.14px] sm:pb-5">
            Time Left
          </Text>
        ),
        meta: { width: "85px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>AuctiGram</title>
        <meta name="description" content="web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex md:flex-col">
          <Sidebar10 />
          <div className="flex flex-1 flex-col">
            <Header className="bg-white-A700 w-full" />
            <div className="flex flex-col md:px-5">
              <Text as="h2" className="pb-[13px] sm:pl-5 tracking-[0.34px] w-full">
                Wallet
              </Text>
              <div className="gap-0 grid grid-cols-3 items-center justify-start min-h-[auto] w-full">
                {data.map((item, index) => (
                  <React.Fragment key={index}>
                    <MyProfilewalletTotalspending
                      className="bg-white-A700 h-[200px] w-full"
                      totalspending={item?.totalspending}
                      price={item?.price}
                      image={item?.image}
                      twentyfour={item?.twentyfour}
                      may172022={item?.may172022}
                    />
                  </React.Fragment>
                ))}
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col mt-6 pb-[34px] rounded-[16px] shadow-bs1 w-full">
                <div className="flex items-center justify-between w-full">
                  <Text as="h2" className="pb-[13px] sm:pl-5 tracking-[0.34px] w-full">
                    Activity
                  </Text>
                  <Button size="sm" className="mr-4">
                    See All
                  </Button>
                </div>
                <ReactTable columns={table1Columns} data={table1Data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
