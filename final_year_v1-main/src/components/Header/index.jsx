import React from "react";
import { CloseSVG } from "../../assets/images";
import { SelectBox, Button, Img, Input } from "./..";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header
      {...props}
      className={`${props.className} flex md:flex-col justify-between items-center gap-5 sm:p-5 border-gray-100 border-b-[0.5px] border-solid bg-white-A700`}
    >
      <Input
        shape="round"
        name="search"
        placeholder="Search items, collections, and users"
        value={searchBarValue}
        onChange={(e) => setSearchBarValue(e.target.value)}
        prefix={
          <img
            src="images/img_contrast_gray_500.svg"
            alt="contrast"
            className="h-[24px] w-[24px] cursor-pointer"
          />
        }
        suffix={
          searchBarValue?.length > 0 ? (
            <CloseSVG
              onClick={() => setSearchBarValue("")}
              height={24}
              width={24}
              fillcolor="#93989A"
            />
          ) : null
        }
        className="w-[44%] gap-4 border border-solid border-gray-300 font-outfit tracking-[0.16px] text-gray-500 md:w-full sm:pr-5"
      />
      <div className="flex w-[31%] justify-between gap-5 md:w-full">
        <Button
          color="gray_100"
          size="6x1"
          variant="outline"
          leftIcon={
            <Img
              src="images/img_television_gray_900_01.svg"
              alt="television"
              className="h-[24px] w-[24px]"
            />
          }
          className="min-w-[137px] gap-2.5 rounded-[10px] font-medium tracking-[0.16px]"
        >
          3,421 ETH
        </Button>
        <a href="#">
          <Button
            color="gray_100"
            size="5x1"
            variant="outline"
            shape="circle"
            className="w-[52px] rounded-[26px]"
          >
            <Img src="images/img_icon.svg" />
          </Button>
        </a>
        <SelectBox
          shape="square"
          name="user_three"
          options={dropDownOptions}
          className="w-[26%]"
        />
      </div>
    </header>
  );
}
