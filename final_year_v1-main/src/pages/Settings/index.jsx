import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Switch, Input, TextArea, Heading } from "../../components";
import Header from "../../components/Header";
import Sidebar2 from "../../components/Sidebar2";

export default function SettingsPage() {
  return (
    <>
      <Helmet>
        <title>AuctiGram</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700 pb-[34px] sm:pb-5">
        <div className="flex items-start md:flex-col">
          <Sidebar2 />
          <div className="flex flex-1 flex-col items-center gap-[34px] md:self-stretch md:p-5">
            <Header className="self-stretch p-5" />
            <div className="flex w-[94%] flex-col gap-[30px] md:w-full">
              <div className="flex items-center justify-between gap-5 md:flex-col">
                <div className="flex flex-col items-start justify-center gap-2.5">
                  <Heading size="xl" as="h1">
                    General Settings
                  </Heading>
                  <Text as="p" className="tracking-[0.14px]">
                    Update your photo and personal details here.
                  </Text>
                </div>
                <div className="flex w-[42%] items-center justify-center gap-[18px] md:w-full sm:flex-col">
                  <Text as="p" className="mb-[11px] self-end tracking-[0.14px] !text-black-900">
                    Every change automatically saved
                  </Text>
                  <div className="flex w-full gap-3 sm:w-full">
                    <Button
                      color="gray_900_01"
                      size="3xl"
                      className="w-full rounded-lg font-medium tracking-[0.14px] sm:px-5"
                    >
                      Preview
                    </Button>
                    <Button
                      color="gray_100"
                      size="3xl"
                      className="w-full rounded-lg font-medium tracking-[0.14px] sm:px-5"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-[34px] md:flex-col">
                <div className="flex flex-1 flex-col gap-[30px] md:self-stretch">
                  <div className="flex flex-col items-center gap-7 rounded-[15px] border-[0.5px] border-solid border-gray-100 bg-white-A700 py-6 shadow-xs sm:py-5">
                    <Text size="xl" as="p" className="ml-6 tracking-[0.18px] !text-black-900 md:ml-0">
                      Personal Information
                    </Text>
                    <div className="h-[1px] w-full self-stretch bg-gray-100" />
                    <div className="flex w-[93%] flex-col gap-6 md:w-full md:p-5">
                      <div className="flex gap-6 md:flex-col">
                        <div className="flex w-full flex-col items-start justify-center gap-3">
                          <Text size="lg" as="p" className="tracking-[0.16px] !text-black-900">
                            <span className="text-black-900">First Name</span>
                            <span className="text-red-600">*</span>
                          </Text>
                          <Input
                            color="gray_400"
                            variant="outline"
                            name="firstName"
                            placeholder={`kevin`}
                            prefix={<Img src="images/img_lock.svg" alt="lock" className="h-[24px] w-[24px]" />}
                            className="gap-3 self-stretch rounded-lg tracking-[0.14px] sm:pr-5"
                          />
                        </div>
                        <div className="flex w-full flex-col items-start justify-center gap-3">
                          <Text size="lg" as="p" className="tracking-[0.16px] !text-black-900">
                            <span className="text-black-900">Last Name</span>
                            <span className="text-red-600">*</span>
                          </Text>
                          <Input
                            color="gray_400"
                            variant="outline"
                            name="lastName"
                            placeholder={`Cranel`}
                            className="self-stretch rounded-lg tracking-[0.14px] sm:pr-5"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-center gap-3">
                        <Text size="lg" as="p" className="tracking-[0.16px] !text-black-900">
                          <span className="text-black-900">Email Address</span>
                          <span className="text-red-600">*</span>
                        </Text>
                        <Input
                          color="gray_400"
                          variant="outline"
                          type="email"
                          name="email"
                          placeholder="user@mail.com"
                          prefix={<Img src="images/img_checkmark_gray_500.svg" alt="checkmark" className="h-[24px] w-[24px]" />}
                          suffix={<Img src="images/img_checkmark_green_600_01.svg" alt="checkmark" className="h-[24px] w-[24px]" />}
                          className="gap-3 self-stretch rounded-lg tracking-[0.14px]"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center gap-3">
                        <Text size="lg" as="p" className="tracking-[0.16px] !text-black-900">
                          Username
                        </Text>
                        <Input
                          color="gray_400"
                          variant="outline"
                          name="userName"
                          placeholder={`kevincranel`}
                          prefix={<Img src="images/img_arrowup.svg" alt="arrow up" className="h-[24px] w-[24px]" />}
                          suffix={<Img src="images/img_checkmark_green_600_01.svg" alt="checkmark" className="h-[24px] w-[24px]" />}
                          className="gap-[35px] self-stretch rounded-lg tracking-[0.14px]"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center gap-[11px]">
                        <Text size="lg" as="p" className="tracking-[0.16px] !text-black-900">
                          Biography
                        </Text>
                        <TextArea
                          shape="round"
                          name="searchinput one"
                          placeholder="Dedicated to creating amazing art exhibition information. Please check link below:"
                          className="self-stretch !border-gray-400 tracking-[8.14px] text-black-900 sm:py-5 sm:pr-5"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center gap-3">
                        <Text size="lg" as="p" className="tracking-[0.16px] !text-black-900">
                          Website
                        </Text>
                        <Input
                          color="gray_400"
                          variant="outline"
                          name="weburl"
                          placeholder={'xyz.com'}
                          prefix={<Img src="images/img_globe.svg" alt="globe" className="h-[24px] w-[24px]" />}
                          className="gap-3 self-stretch rounded-lg tracking-[0.14px] sm:pr-5"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-8 rounded-[15px] border-[0.5px] border-solid border-gray-100 bg-white-A700 py-[26px] shadow-xs sm:p-5">
                    <Text size="xl" as="p" className="ml-6 tracking-[0.18px] !text-black-900 md:ml-0">
                      Notification Settings
                    </Text>
                    <div className="h-[1px] w-full self-stretch bg-gray-100" />
                    <div className="flex w-[93%] flex-col gap-[27px] md:w-full md:p-5">
                      <div className="flex items-center justify-between gap-5">
                        <div className="flex flex-col items-start gap-[11px]">
                          <Text size="lg" as="p" className="tracking-[0.16px] !text-black-900">
                            Item Sold
                          </Text>
                          <Text as="p" className="font-normal tracking-[0.14px]">
                            When someone purchases one of your items
                          </Text>
                        </div>
                        <Switch className="mb-2.5 self-end" />
                      </div>
                      <div className="h-[1px] w-[658px] bg-gray-100" />
                      <div className="flex flex-1 flex-col justify-center py-[26px] sm:py-5">
                        <div className="flex items-center justify-between gap-5">
                          <div className="flex flex-col items-start gap-[9px]">
                            <Text size="lg" as="p" className="tracking-[0.16px] !text-black-900">
                              Auction Expires
                            </Text>
                            <Text as="p" className="!font-normal tracking-[0.14px]">
                              When someone purchased one of your items
                            </Text>
                          </div>
                          <Switch className="mb-2.5 self-end" />
                        </div>
                      </div>
                      <div className="h-[1px] w-[658px] bg-gray-100" />
                      <div className="flex flex-1 items-center justify-center py=[26px] sm:py-5">
                        <div className="flex items-center justify-between gap-5">
                          <div className="flex flex-col items-start gap-[9px]">
                          <Text size="lg" as="p" className="tracking-[0.16px] !text-black-900">
                            Owned Item Updates
                          <Text as="p" className="!font-normal tracking-[0.14px]">
                            When a significant update occurs for one of the items you have purchased
                          </Text>
                          </div>
                        </div>
                        <Switch />
                      </div>
                      <div className="h-px w-[658px] bg-gray-100" />
                      <div className="flex flex-1 flex-col pt-6 sm:pt-5">
                        <div className="flex items-center justify-between gap-5">
                          <div className="flex flex-col items-start gap-[11px]">
                            <Text size="lg" as="p" className="tracking-[0.16px] !text-black-900">
                              Successful Purchase
                            </Text>
                            <Text as="p" className="font-normal tracking-[0.14px]">
                              When you successfully buy an item
                            </Text>
                          </div>
                          <Switch className="mb-2.5 self-end" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[32%] flex-col gap-[30px] md:w-full">
                  <div className="flex flex-col items-center gap-8 rounded-[15px] border-[0.5px] border-solid border-gray-100 bg-white-A700 py-6 shadow-xs sm:py-5">
                    <Text size="xl" as="p" className="ml-6 tracking-[0.18px] !text-black-900 md:ml-0">
                      Your Photo
                    </Text>
                    <div className="h-[1px] w-full self-stretch bg-gray-100" />
                    <div className="flex w-[85%] flex-col items-start gap-6 md:w-full md:p-5">
                      <div className="flex w-[67%] items-center gap-4 md:w-full">
                        <Img
                          src="images/img_ellipse_1023.png"
                          alt="circleimage"
                          className="h-[64px] w-[64px] rounded-[50%]"
                        />
                        <div className="flex flex-col items-start justify-center gap-[9px]">
                          <Text size="lg" as="p" className="tracking-[0.16px] !text-black-900">
                            Edit your photo
                          </Text>
                          <div className="flex flex-wrap items-center gap-2.5">
                            <Text as="p" className="!font-normal tracking-[0.14px]">
                              Delete
                            </Text>
                            <Text as="p" className="self-end !font-outfit !font-normal tracking-[0.14px] text-red-600">
                              Update
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-4 self-stretch rounded-[15px] border-[0.5px] border-dashed border-gray-900 bg-white-A700 p-3.5">
                        <Button color="gray_50" size="4xl" shape="circle" className="w-[48px] rounded-[24px]">
                          <Img src="images/img_cloud.svg" />
                        </Button>
                        <div className="flex w-[81%] flex-col items-center gap=[9px] md:w-full">
                        <Text as="p" className="tracking-[0.14px] !text-gray-900">
                          Click to upload or drag and drop
                        </Text>
                        <Text size="s" as="p" className="w-[41%] text-center leading-[130%] tracking-[0.12px] md:w-full">
                          PNG, JPG, or GIF
                          <br />
                          Max 20MB
                        </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-[31px] rounded-[15px] border-[0.5px] border-solid border-gray-100 bg-white-A700 py-[23px] shadow-xs sm:py-5">
                    <div className="flex flex-col items-start gap-6 self-stretch">
                    <Text size="xl" as="p" className="ml-6 tracking-[0.18px] !text-black-900 md:ml-0">
                      Social Links
                    </Text>
                    <div className="h-px w-full self-stretch bg-gray-100" />
                    </div>
                    <div className="flex w-[85%] flex-col gap-[13px] md:w-full md:p-5">
                      <div className="flex items-center justify-between gap-5">
                        <Img
                          src="images/img_settings_blue_a200_01.svg"
                          alt="settings"
                          className="h-[28px] w-[30%]"
                        />
                        <Button
                          color="green_600_01"
                          size="md"
                          className="min-w-[96px] rounded-lg font-medium tracking-[0.14px]"
                        >
                          Connected
                        </Button>
                      </div>
                      <div className="flex w-[83%] flex-col items-start gap-[9px] md:w-full">
                        <Text size="lg" as="p" className="tracking-[0.16px] !text-black-900">
                          Edit your photo
                        </Text>
                        <Text as="p" className="w-full font-normal leading-[180%] tracking-[0.14px]">
                          Use Google to sign in to your account.
                          <br />
                          Click here to learn more.
                        </Text>
         s             </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
