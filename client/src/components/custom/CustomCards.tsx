import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Rating from "./Rating";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { OpenPreview } from "@/redux/Reducers/preview";

type Props = {
  Tabs?: boolean;
  TabTitle?: string[];
  productId?: string;
};

export default function CustomCards(params: Props) {
  const [Active, setActive] = React.useState(-1);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <div>
        {params.Tabs ? (
          <Tabs value={params.TabTitle?.[0]}>
            <TabsList>
              {params.TabTitle?.map((item, index) => (
                <TabsTrigger key={index} value={item}>
                  {item}
                </TabsTrigger>
              ))}
            </TabsList>

            {params.TabTitle?.map((item, index) => (
              <TabsContent
                key={index}
                value={item}
                className="grid grid-cols-4 gap-2"
              >
                {Array.from({ length: 8 }).map((_, index) => (
                  <Card key={index} className="h-full">
                    <CardContent
                      className="grid place-content-center gap-2 h-full"
                      onMouseEnter={() => {
                        setActive(index);
                      }}
                      onMouseLeave={() => {
                        setActive(-1);
                      }}
                    >
                      <picture className="relative grid place-content-center">
                        <img
                          src="./images/products/Image-1.png"
                          alt=""
                          className="w-auto h-auto"
                          width={500}
                          height={500}
                        />
                        <div
                          className={cn(
                            "absolute",
                            Active === index
                              ? "visible grid place-content-center"
                              : "hidden",
                            "absolute w-full h-full bg-black/20 z-50 "
                          )}
                        >
                          <div className="flex items-center gap-4">
                            {[
                              <svg
                                fill="none"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className="stroke-current size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                />
                              </svg>,
                              <svg
                                fill="none"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className="stroke-current size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                />
                              </svg>,
                              <svg
                                fill="none"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className="stroke-current size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                              </svg>,
                            ].map((item, index) => (
                              <Button
                                variant="ghost"
                                size="icon"
                                key={index}
                                className="bg-white rounded-full hover:bg-orange-700 hover:text-white"
                                onClick={() => {
                                  if (index == 2) {
                                    dispatch(OpenPreview());
                                  }
                                }}
                              >
                                {item}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </picture>
                      <Rating value="100.1" />
                      <span>
                        Portable Wshing Machine, 11lbs capacity Model 18NMF...
                      </span>
                      <span>$ 1,299.00</span>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <Card key={index}>
                <CardContent
                  className="grid place-content-center gap-3"
                  onMouseEnter={() => {
                    setActive(index);
                  }}
                  onMouseLeave={() => {
                    setActive(-1);
                  }}
                >
                  <picture className="relative grid place-content-center">
                    <img
                      src="./images/products/Image-1.png"
                      alt="products"
                      className="w-full h-auto"
                      width={500}
                      height={500}
                    />
                    <div
                      className={cn(
                        "absolute",
                        Active === index
                          ? "visible grid place-content-center"
                          : "hidden",
                        "absolute w-full h-full bg-black/20 z-50 "
                      )}
                    >
                      <div className="flex items-center gap-4">
                        {[
                          <svg
                            fill="none"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            className="stroke-current size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                            />
                          </svg>,
                          <svg
                            fill="none"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            className="stroke-current size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                          </svg>,
                          <svg
                            fill="none"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            className="stroke-current size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>,
                        ].map((item, index) => (
                          <Button
                            variant="ghost"
                            size="icon"
                            key={index}
                            className="bg-white rounded-full hover:bg-orange-700 hover:text-white"
                            onClick={() => {
                              if (index === 2) {
                                dispatch(OpenPreview());
                              }
                            }}
                          >
                            {item}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </picture>
                  <Rating value="100.1" />
                  <span>
                    Portable Wshing Machine, 11lbs capacity Model 18NMF...
                  </span>
                  <span>$ 1,299.00</span>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
