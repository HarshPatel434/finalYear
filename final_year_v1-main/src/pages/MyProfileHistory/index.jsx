import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import Sidebar111 from "../../components/Sidebar111";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

const table2Data = [
  { itemlist: "Peachy Puch#22", status: "Actived" },
  {
    itemlist: "Mad Ballot Holder",
    status: "Ended",
    openprice: "6.48 ΕΤΗ",
    youroffer: "14.81 ΕΤΗ",
    recentoffer: "12.81 ETH",
    timeleft: "12h 1m 24s",
  },
  {
    itemlist: "Pile of Many Plates",
    status: "Ended",
    openprice: "17.84 ΕΤΗ",
    youroffer: "17.99 ETH",
    recentoffer: "17.84 ETH",
    timeleft: "28h 20m 5s",
  },
  {
    itemlist: "Worldpac Alternator",
    status: "On Going",
    openprice: "8.99 ETH",
    youroffer: "11.70 ETH",
    recentoffer: "10.22 ETH",
    timeleft: "17h 6m 3s",
  },
  {
    itemlist: "Fram Oil Filter",
    status: "On Going",
    openprice: "5.22 ΕΤΗ",
    youroffer: "8.99 ΕΤΗ",
    recentoffer: "6.70 ETH",
    timeleft: "34h 36m 6s",
  },
  {
    itemlist: "Rain X Wiper Blade Front",
    status: "On Going",
    openprice: "3.99 ΕΤΗ",
    youroffer: "5.22 ΕΤΗ",
    recentoffer: "4.84 ETH",
    timeleft: "3h 4m 3s",
  },
];

export default function MyProfileHistoryPage() {
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("itemlist", {
        cell: (info) => (
          <div className="flex flex-col gap-12">
            <div className="flex w-[86%] items-center gap-3.5 md:w-full">
              <Img src="images/img_ellipse_1018_5.png" alt="circleimage" className="h-[42px] w-[42px] rounded-[50%]" />
              <div className="flex flex-col items-start justify-center gap-[3px]">
                <Heading as="h2" className="tracking-[0.16px]">
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
                <Heading as="h3" className="tracking-[0.16px]">
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
        meta: { width: "322px" },
      }),
      table2ColumnHelper.accessor("status", {
        cell: (info) => (
          <div className="flex flex-col items-start gap-[74px] py-[34px] md:gap-[55px] sm:gap-[37px] sm:py-5">
            <div className="flex justify-center">
              <Text as="p" className="tracking-[0.14px] !text-black-900">
                {info?.getValue?.()}
              </Text>
              <Text as="p" className="tracking-[0.14px] !text-black-900">
                On Going
              </Text>
            </div>
            <div className="flex flex-col items-start justify-center gap-[72px] py-[34px] md:gap-[54px] sm:gap-9 sm:py-5">
              <div className="flex items-center gap-1.5">
                <Img src="images/img_television_gray_900_01.svg" alt="television" className="h-[16px] w-[16px]" />
                <Text as="p" className="tracking-[0.14px] !text-black-900">
                  5.62 ETH
                </Text>
              </div>
              <div className="flex items-center gap-1.5">
                <Img src="images/img_television_gray_900_01.svg" alt="television" className="h-[16px] w-[16px]" />
                <Text as="p" className="tracking-[0.14px] !text-black-900">
                  11.70 ΕΤΗ
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-[72px] py-[34px] md:gap-[54px] sm:gap-9 sm:py-5">
              <div className="flex items-center gap-1.5">
                <Img src="images/img_television_gray_900_01.svg" alt="television" className="h-[16px] w-[16px]" />
                <Text as="p" className="tracking-[0.14px] !text-black-900">
                  2.62 ETH
                </Text>
              </div>
              <div className="flex items-center gap-1.5">
                <Img src="images/img_television_gray_900_01.svg" alt="television" className="h-[16px] w-[16px]" />
                <Text as="p" className="tracking-[0.14px] !text-black-900">
                  17.84 ΕΤΗ
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-[72px] py-[34px] md:gap-[54px] sm:gap-9 sm:py-5">
              <div className="flex items-center gap-1.5">
                <Img src="images/img_television_gray_900_01.svg" alt="television" className="h-[16px] w-[16px]" />
                <Text as="p" className="tracking-[0.14px] !text-black-900">
                  2.14 ETH
                </Text>
              </div>
              <div className="flex items-center gap-1.5">
                <Img src="images/img_television_gray_900_01.svg" alt="television" className="h-[16px] w-[16px]" />
                <Text as="p" className="tracking-[0.14px] !text-black-900">
                  11.99 ΕΤΗ
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-[73px] py-8 md:gap-[54px] sm:gap-9 sm:py-5">
              <Text as="p" className="tracking-[0.14px] !text-black-900">
                1h 19m
              </Text>
              <Text as="p" className="mb-1 tracking-[0.14px] !text-black-900">
                18h 18m 25s
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pb-[25px] pt-px tracking-[0.14px] sm:pb-5">
            Status
          </Text>
        ),
        meta: { width: "141px" },
      }),
      table2ColumnHelper.accessor("openprice", {
        cell: (info) => <></>,
        header: (info) => (
          <Text as="p" className="pb-6 pt-0.5 tracking-[0.14px] sm:pb-5">
            Open Price
          </Text>
        ),
        meta: { width: "170px" },
      }),
      table2ColumnHelper.accessor("youroffer", {
        cell: (info) => <></>,
        header: (info) => (
          <Text as="p" className="pb-[26px] tracking-[0.14px] sm:pb-5">
            Your Offer
          </Text>
        ),
        meta: { width: "166px" },
      }),
      table2ColumnHelper.accessor("recentoffer", {
        cell: (info) => <></>,
        header: (info) => (
          <Text as="p" className="pb-[26px] tracking-[0.14px] sm:pb-5">
            Recent Offer
          </Text>
        ),
        meta: { width: "174px" },
      }),
      table2ColumnHelper.accessor("timeleft", {
        cell: (info) => <></>,
        header: (info) => (
          <Text as="p" className="pb-[26px] tracking-[0.14px] sm:pb-5">
            Time Left
          </Text>
        ),
        meta: { width: "97px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>AuctiGram</title>
        <meta name="description" content="web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full items-start justify-center bg-white-A700 md:flex-col">
        <Sidebar111 />
        <div className="flex flex-1 flex-col items-center gap-[39px] md:self-stretch md:p-5">
          <Header className="self-stretch p-[34px]" />
          <div className="flex w-[94%] flex-col items-start md:w-full">
            <Heading size="3xl" as="h1" className="tracking-[0.34px]">
              History
            </Heading>
            <div className="mt-[17px] flex justify-between gap-5 self-stretch sm:flex-col">
              <div className="flex w-[39%] justify-center gap-6 sm:w-full sm:flex-col">
                <Button
                  color="gray_100"
                  size="6xl"
                  variant="outline"
                  shape="round"
                  leftIcon={<img src="images/img_qrcode.svg" alt="qrcode" className="h-[24px] w-[24px]" />}
                  className="min-w-[84px] gap-2.5 font-medium tracking-[0.16px]"
                >
                  All
                </Button>
                <Button
                  color="gray_100"
                  size="6xl"
                  variant="outline"
                  shape="round"
                  leftIcon={
                    <Img src="images/img_settings_black_900.svg" alt="settings" className="h-[24px] w-[24px]" />
                  }
                  className="w-full flex-1 gap-2.5 font-medium tracking-[0.16px] sm:self-stretch"
                >
                  Collection
                </Button>
                <Button
                  color="gray_100"
                  size="6xl"
                  variant="outline"
                  shape="round"
                  leftIcon={<img src="images/img_user_black_900.svg" alt="user" className="h-[24px] w-[24px]" />}
                  className="w-full flex-1 gap-2.5 font-medium tracking-[0.16px] sm:self-stretch"
                >
                  Price Range
                </Button>
              </div>
              <Button
                color="gray_100"
                size="6xl"
                variant="outline"
                shape="round"
                leftIcon={<Img src="images/img_thumbsup.svg" alt="thumbs_up" className="h-[24px] w-[24px]" />}
                className="min-w-[151px] gap-2.5 font-medium tracking-[0.16px]"
              >
                Filter & Sort
              </Button>
            </div>
            <ReactTable
              bodyProps={{ className: "" }}
              headerProps={{ className: "flex-wrap" }}
              rowDataProps={{ className: "md:flex-col" }}
              className="mt-[54px] self-stretch rounded-[15px] border-[0.5px] border-solid border-gray-100 bg-white-A700 shadow-xs"
              columns={table2Columns}
              data={table2Data}
            />
          </div>
        </div>
      </div>
    </>
  );
}
