import React, { useState } from "react";
import img1 from "../assets/images/dompkong.png";
import img2 from "../assets/images/ft-plane.png";
import img3 from "../assets/images/furniture.png";
import img4 from "../assets/images/lemonwares.png";
import img5 from "../assets/images/exclusivegames.png";
import img6 from "../assets/images/dino.png";
import img7 from "../assets/images/texas.png";
import img8 from "../assets/images/calculator.png";
import img9 from "../assets/images/cloop.png";
import img10 from "../assets/images/lavs248.png";
import img11 from "../assets/images/nextjs.png";
import img12 from "../assets/images/swiperslider.png";
import img13 from "../assets/images/formvalidation.png";
import img14 from "../assets/images/swiperslider.png";
import img15 from '../assets/images/vite.png'
import img16 from '../assets/images/worksheet.png'

const Mywork = () => {
    const [tab, settab] = useState("tab1");
    function handletab(tabs) {
        settab(tabs);
    }

    return (
        <div className=" min-h-screen bg-[#0c111f] flex justify-center items-center">
            <div className="container max-w-[1320px]  mx-auto px-3">
                <div className="flex w-full justify-between items-center pb-5">
                    <h1 className="font-Poppins text-[44px] text-center  font-bold text-white">
                        WORKSHEET-2024
                    </h1>

                    <a href=""> <p className=" px-8 text-2xl font-Poppins font-semibold text-[#6200ea] py-2 bg-white ">
                        MOHINI-402
                    </p></a>
                </div>
                <div className="flex flex-row justify-between pt-4 flex-wrap -mx-3">
                    <div className="w-1/5 px-3 p-4 border-white border-[2px] bg-black">
                        <p className=" px-8 text-2xl font-Poppins bg-[#6200ea] text-center font-semibold  text-white py-2 mb-2 cursor-pointer">
                            Months
                        </p>
                        <button onClick={() => handletab("tab1")} className=" mb-2 w-full font-Poppins px-8 text-2xl text-center font-semibold hover:bg-[#6200ea] hover:text-white duration-[0.5s] text-[#6200ea] bg-white py-2">
                            January
                        </button>
                        <button onClick={() => handletab("tab2")} className=" mb-2 w-full font-Poppins px-8 text-2xl text-center font-semibold  hover:bg-[#6200ea] hover:text-white duration-[0.5s] text-[#6200ea] bg-white py-2">
                            February
                        </button>
                        <button onClick={() => handletab("tab3")} className=" mb-2 w-full font-Poppins px-8 text-2xl text-center font-semibold  hover:bg-[#6200ea] hover:text-white duration-[0.5s]  text-[#6200ea] bg-white py-2">
                            March
                        </button>
                    </div>
                    <div className="w-4/5">
                        {tab === "tab1" && <div className="p-3 border-white max-h-[550px] overflow-y-scroll  border-[2px] bg-black">
                            <p className="text-white text-[32px] font-semibold hover:text-[#6200ea] duration-[0.5s] font-poppins pb-3 ps-5">
                                January
                            </p>
                            <div className="flex flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <div>
                                            <p className="text-white pr-3 text-[30px] font-semibold font-poppins">
                                                1.
                                            </p>
                                        </div>
                                        <img
                                            src={img1}
                                            alt="1"
                                            className="w-full pt-2 max-h-[210px] h-full max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex pb-3 items-center">
                                        <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                                            DOMPKONG
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-white text-xl font-poppins ">
                                            Github-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://github.com/mohini-442/dompkong"
                                                    target="blank"
                                                >
                                                    https://github.com/mohini-442/dompkong
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-white text-xl font-poppins ">
                                            Live-Link :{" "}
                                            <span className="ms-3  hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://dompkong-flax.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://dompkong-flax.vercel.app/
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <div>
                                            <p className="text-white pr-3 text-[30px] font-semibold font-poppins">
                                                2.
                                            </p>
                                        </div>
                                        <img
                                            src={img2}
                                            alt="2"
                                            className="w-full pt-2 h-full max-h-[210px] max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex pb-3 items-center">
                                        <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                                            FT-PLANE
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-white text-xl font-poppins ">
                                            Github-Link :{" "}
                                            <span className="ms-3  hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://github.com/mohini-442/ft-plane"
                                                    target="blank"
                                                >
                                                    https://github.com/mohini-442/ft-plane
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-white text-xl font-poppins ">
                                            Live-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://ft-plane-azure.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://ft-plane-azure.vercel.app/
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <div>
                                            <p className="text-white pr-3 text-[30px] font-poppins">
                                                3.
                                            </p>
                                        </div>
                                        <img
                                            src={img3}
                                            alt="3"
                                            className="w-full h-full max-h-[210px] pt-2 max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex pb-3 items-center">
                                        <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                                            FURNITURE
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-white text-xl font-poppins ">
                                            Github-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://github.com/mohini-442/furniture"
                                                    target="blank"
                                                >
                                                    https://github.com/mohini-442/furniture
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-white text-xl font-poppins ">
                                            Live-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://furniture-coral-iota.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://furniture-coral-iota.vercel.app/
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <div>
                                            <p className="text-white pr-3 text-[30px] font-poppins">
                                                4.
                                            </p>
                                        </div>
                                        <img
                                            src={img4}
                                            alt="3"
                                            className="w-full h-full max-h-[210px] pt-2 max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex pb-3 items-center">
                                        <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                                            LEMONWARES
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-white text-xl font-poppins ">
                                            Github-Link :{" "}
                                            <span className="ms-3  hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://github.com/mohini-442/lemon"
                                                    target="blank"
                                                >
                                                    https://github.com/mohini-442/lemon
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-white text-xl font-poppins ">
                                            Live-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://lemon-tau.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://lemon-tau.vercel.app/
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>}

                        {tab === "tab2" && <div className="p-4 border-white max-h-[550px] overflow-y-scroll  border-[2px]  bg-black">
                            <p className="text-white text-[32px] font-semibold hover:text-[#6200ea] duration-[0.5s] font-poppins pb-3 ps-5">
                                February
                            </p>
                            <div className="flex flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <div>
                                            <p className="text-white pr-3 text-[30px] font-semibold font-poppins ">
                                                1.
                                            </p>
                                        </div>
                                        <img
                                            src={img5}
                                            alt="1"
                                            className="w-full max-h-[210px] pt-2 h-full max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex pb-3 items-center">
                                        <p className="text-white pr-2 font-semibold text-2xl font-poppins ">
                                            EXCLUSIVE-GAMES
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-white text-xl font-poppins ">
                                            Github-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://github.com/mohini-442/exclusive-games"
                                                    target="blank"
                                                >
                                                    https://github.com/mohini-442/exclusive-games
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-white text-xl font-poppins ">
                                            Live-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://exclusive-eight.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://vercel.com/mohinis-projects/exclusive-games-9ai8
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <div>
                                            <p className="text-white pr-3 font-semibold text-[30px] font-poppins pb-3">
                                                2.
                                            </p>
                                        </div>
                                        <img
                                            src={img6}
                                            alt="2"
                                            className="w-full h-full max-h-[210px] pt-2 max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex pb-3 items-center">
                                        <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                                            DINOLFG
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-white text-xl font-poppins ">
                                            Github-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://github.com/mohini-442/dinolfg"
                                                    target="blank"
                                                >
                                                    https://github.com/mohini-442/dinolfg
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-white text-xl font-poppins ">
                                            Live-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://dinolfg-indol.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://vercel.com/mohinis-projects/dinolfg
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <div>
                                            <p className="text-white pr-3 font-semibold text-[30px] font-poppins pb-3">
                                                3.
                                            </p>
                                        </div>
                                        <img
                                            src={img7}
                                            alt="2"
                                            className="w-full h-full max-h-[210px] pt-2 max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex pb-3 items-center">
                                        <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                                            NEX-AI
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-white text-xl font-poppins ">
                                            Github-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://github.com/mohini-442/naxai"
                                                    target="blank"
                                                >
                                                    https://github.com/mohini-442/naxai
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-white text-xl font-poppins ">
                                            Live-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://naxai.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://vercel.com/mohinis-projects/naxai
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <div>
                                            <p className="text-white pr-3 font-semibold text-[30px] font-poppins pb-3">
                                                4.
                                            </p>
                                        </div>
                                        <img
                                            src={img8}
                                            alt="2"
                                            className="w-full h-full max-h-[210px] pt-2 max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex pb-3 items-center">
                                        <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                                            CALCULATOR
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-white text-xl font-poppins ">
                                            Github-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://github.com/mohini-442/clac"
                                                    target="blank"
                                                >
                                                    https://github.com/mohini-442/clac
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-white text-xl font-poppins ">
                                            Live-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://clac-three.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://clac-three.vercel.app/
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <div>
                                            <p className="text-white pr-3 font-semibold text-[30px] font-poppins pb-3">
                                                5.
                                            </p>
                                        </div>
                                        <img
                                            src={img7}
                                            alt="2"
                                            className="w-full h-full max-h-[210px] pt-2 max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex pb-3 items-center">
                                        <p className="text-white pr-2 font-semibold text-2xl font-poppins ">
                                            BOOTSTRAP_NEX-AI
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-white text-xl font-poppins ">
                                            Github-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://github.com/mohini-442/nexai2"
                                                    target="blank"
                                                >
                                                    https://github.com/mohini-442/nexai2
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-white text-xl font-poppins ">
                                            Live-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://nexai2-nine.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://vercel.com/mohinis-projects/nexai2
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>}
                        {tab === "tab3" && <div className="p-4 border-white max-h-[550px] overflow-y-scroll  border-[2px] bg-black">
                            <p className="text-white text-[32px] font-semibold hover:text-[#6200ea] duration-[0.5s] font-poppins pb-3 ps-5">
                                March
                            </p>
                            <div className="flex flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <div>
                                            <p className="text-white pr-3 font-semibold text-[30px] font-poppins pb-3">
                                                1.
                                            </p>
                                        </div>
                                        <img
                                            src={img9}
                                            alt="2"
                                            className="w-full h-full max-h-[210px] pt-2 max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex pb-3 items-center">
                                        <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                                            CLOOP
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-white text-xl font-poppins ">
                                            Github-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://github.com/mohini-442/cloop"
                                                    target="blank"
                                                >
                                                    https://github.com/mohini-442/cloop
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-white text-xl font-poppins">
                                            Live-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://cloop-pi.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://cloop-pi.vercel.app/
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <div>
                                            <p className="text-white pr-3 font-semibold text-[30px] font-poppins pb-3">
                                                2.
                                            </p>
                                        </div>
                                        <img
                                            src={img10}
                                            alt="2"
                                            className="w-full h-full max-h-[210px] pt-2 max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex pb-3 items-center">
                                        <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                                            LABS_248
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-white text-xl font-poppins ">
                                            Github-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://github.com/mohini-442/248labss"
                                                    target="blank"
                                                >
                                                    https://github.com/mohini-442/248labss
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-white text-xl font-poppins ">
                                            Live-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://248labss.vercel.app/"
                                                    target="blank"
                                                >https://248labss.vercel.app/
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <div>
                                            <p className="text-white pr-3 font-semibold text-[30px] font-poppins pb-3">
                                                3.
                                            </p>
                                        </div>
                                        <img
                                            src={img11}
                                            alt="2"
                                            className="w-full h-full max-h-[210px] pt-2 max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex pb-3 items-center">
                                        <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                                            PRACTICE-nextjs
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-white text-xl font-poppins ">
                                            Github-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://github.com/mohini-442/my-nextjs
"
                                                    target="blank"
                                                >
                                                    https://github.com/mohini-442/my-nextjs
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-white text-xl font-poppins ">
                                            Live-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://my-nextjs-wine.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://my-nextjs-wine.vercel.app/
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <div>
                                            <p className="text-white pr-3 font-semibold text-[30px] font-poppins pb-3">
                                                4.
                                            </p>
                                        </div>
                                        <img
                                            src={img12}
                                            alt="2"
                                            className="w-full h-full max-h-[210px] pt-2 max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex pb-3 items-center">
                                        <p className="text-white pr-2 font-semibold text-3xl font-poppins">
                                            SWIPER-SLIDER
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-white text-xl font-poppins ">
                                            Github-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://github.com/mohini-442/swiper-slider"
                                                    target="blank"
                                                >
                                                    https://github.com/mohini-442/swiper-slider
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-white text-xl font-poppins ">
                                            Live-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://swiper-slider-five.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://swiper-slider-five.vercel.app/
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <div>
                                            <p className="text-white pr-3 font-semibold text-[30px] font-poppins pb-3">
                                                5.
                                            </p>
                                        </div>
                                        <img
                                            src={img13}
                                            alt="2"
                                            className="w-full h-full max-h-[210px] pt-2 max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex flex-wrap pb-3 items-center">
                                        <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                                            FORM-VALIDATION
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-white text-xl font-poppins ">
                                            Github-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://github.com/mohini-442/form-validation"
                                                    target="blank"
                                                >
                                                    https://github.com/mohini-442/form-validation
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-white text-xl font-poppins ">
                                            Live-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://form-validation-psi-ashy.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://form-validation-psi-ashy.vercel.app/
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <div>
                                            <p className="text-white pr-3 font-semibold text-[30px] font-poppins pb-3">
                                                6.
                                            </p>
                                        </div>
                                        <img
                                            src={img15}
                                            alt="2"
                                            className="w-full h-full max-h-[210px] pt-2 max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex flex-wrap pb-3 items-center">
                                        <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                                            VITE-PROJECT
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-white text-xl font-poppins ">
                                            Github-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://github.com/mohini-442/vite-project"
                                                    target="blank"
                                                >
                                                    https://github.com/mohini-442/vite-project
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-white text-xl font-poppins ">
                                            Live-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://vite-project-alpha-teal.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://vite-project-alpha-teal.vercel.app/
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <div>
                                            <p className="text-white pr-3 font-semibold text-[30px] font-poppins pb-3">
                                                7.
                                            </p>
                                        </div>
                                        <img
                                            src={img16}
                                            alt="2"
                                            className="w-full h-full max-h-[210px] pt-2 max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex flex-wrap pb-3 items-center">
                                        <p className="text-white pr-2 font-semibold text-3xl font-poppins ">
                                            WORKSHEET
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-white text-xl font-poppins ">
                                            Github-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://github.com/mohini-442/my-worksheet"
                                                    target="blank"
                                                >
                                                    https://github.com/mohini-442/my-worksheet
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-white text-xl font-poppins ">
                                            Live-Link :{" "}
                                            <span className="ms-3 hover:text-[#6200ea] duration-300">
                                                <a
                                                    href="https://my-worksheet.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://my-worksheet.vercel.app/
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mywork;