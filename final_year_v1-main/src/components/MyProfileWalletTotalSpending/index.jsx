import { Text, Img, Heading, Button } from "../../components"; // Adjust the path according to your project structure
import React from "react";

export default function MyProfileWalletTotalSpending({
  totalSpending = "Total Spending",
  price = "$432,215.32",
  image = "images/img_trending_up.svg",
  twentyFour = "+2.4%",
  may172022 = "May 17, 2022",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-full gap-[13px] sm:p-5 border-gray-100 border-[0.5px] border-solid bg-white-A700 shadow-xs rounded-[15px]`}
    >
      <Button color="gray_50" size="xl" shape="circle" className="w-[42px] !rounded-[21px]">
        <Img src="images/img_frame_162465.png" alt="frame icon" />
      </Button>
      <div className="flex w-[91%] flex-col gap-1.5">
        <div className="flex flex-col gap-3 pt-1.5">
          <Text size="xl" as="p" className="!font-normal tracking-[0.18px]">
            {totalSpending}
          </Text>
          <Heading size="xl" as="h4">
            {price}
          </Heading>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-start gap-1.5">
            <Img src={image} alt="trending up" className="h-[18px] w-[18px]" />
            <Text as="p" className="!font-normal tracking-[0.14px] text-green-600_01">
              {twentyFour}
            </Text>
            <div className="h-[4px] w-[4px] rounded-sm bg-gray-500" /> 
            <Text as="p" className="self-end !font-normal tracking-[0.14px]">
                {may172022}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
