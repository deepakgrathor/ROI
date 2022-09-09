import React, { useState } from "react";

const Calculator = () => {
  const [check, setCheck] = useState(false);
  const [apy, setApy] = useState(false);
  const [id1, setId1] = useState();
  const [id2, setId2] = useState();
  return (
    <>
      <section className="h-screen flex items-center justify-center bg-gradient-to-bl from-gray-900 to-gray-600 bg-gradient-to-r">
        <div className="glass w-[400px] p-4">
          <h2 className="text-2xl font-bold">ROI Calculator</h2>
          <div className="">
            <span className={style.span}>
              <h3 className="text-sm font-semibold text-gray-600">CAKE</h3>
              <div class="flex justify-center">
                <div class="form-check form-switch">
                  <input
                    class={style.switch}
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    onClick={() => setCheck(!check)}
                  />
                </div>
              </div>
              <h3 className={style.h3}>USD</h3>
            </span>
            <input
              placeholder={`0.000 ${check ? "USD" : "CAKE"} `}
              className={style.input}
              type="text"
              name=""
              id=""
            />
            <div className="flex justify-between">
              <span className="flex  space-x-3">
                <h3 className={style.h3Dollar}>$1000</h3>
                <h3 className={style.h3Dollar}>$100</h3>
              </span>
              <h2 className={style.h3}>{check ? "USD" : "~CAKE"} 0.000</h2>
            </div>
            <div className="my-7 border-t  pt-6 border-b pb-6 space-y-3">
              <h1 className="font-semibold text-sm">TimeFrame</h1>
              <div className={style.grid}>
                {TimeFrame.map((e, index) => {
                  return (
                    <h2
                      key={index}
                      onClick={() => setId1(index)}
                      className={index === id1 ? style.boxActive : style.boxIn}
                    >
                      {e}
                    </h2>
                  );
                })}
              </div>
            </div>
            <div className="my-5 space-y-3">
              <span className="flex justify-between">
                <h2 className="font-semibold">Enable Accelerated APY</h2>
                <div class="flex justify-center">
                  <div class="form-check form-switch">
                    <input
                      class={style.switch}
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      onClick={() => setApy(!apy)}
                    />
                  </div>
                </div>
              </span>
              <div className={apy ? "flex flex-col space-y-3" : "hidden"}>
                <h1 className="font-medium text-gray-500 text-sm">
                  Select Tier
                </h1>
                <div className={style.grid}>
                  {Tier.map((e, index) => {
                    return (
                      <h2
                        key={index}
                        onClick={() => setId2(index)}
                        className={
                          index === id2 ? style.boxActive : style.boxIn
                        }
                      >
                        {e}
                      </h2>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="">
              <span className={style.span}>
                <h3 className={style.h3}>ROI at Current Rates</h3>
              </span>
              <input
                placeholder={`0.00 ${check ? "USD" : "CAKE"} `}
                className={style.input}
                type="text"
                name=""
                id=""
              />
              <h2 className={`text-right ${style.h3}`}>
                {` ~0.000 ${check ? "USD" : "CAKE"} + 0.0000000 DON`}
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const style = {
  input:
    "w-full placeholder:text-right placeholder:text-black placeholder:font-semibold placeholder:text-lg bg-gray-100 p-2 my-2 rounded-md border-[2px] border-gray-200 ",
  boxActive:
    "bg-yellow-200 cursor-pointer border border-red-300 rounded-full text-center text-xs py-1 font-semibold",
  boxIn:
    "bg-gray-200 cursor-pointer  border-red-300 rounded-full text-gray-500 text-center text-xs py-1 font-semibold",
  h3: "text-xs font-semibold text-gray-600",
  span: "flex relative justify-end space-x-3 items-center",
  switch:
    "form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat ch bg-contain bg-gray-900 focus:outline-none cursor-pointer shadow-sm",
  grid: "grid gap-3 grid-cols-5",
  h3Dollar:
    "text-xs cursor-pointer font-semibold bg-gray-100 border py-1 px-4 rounded-md",
};

const TimeFrame = ["1 Day", "7 Days", "30 Days", "1 Year", "5 Year"];
const Tier = ["Tier 1", "Tier 2", "Tier 3", "Tier 4", "Tier 5"];

export default Calculator;
