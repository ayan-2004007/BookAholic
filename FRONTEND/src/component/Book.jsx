import React from 'react';
import Marquee from "react-fast-marquee";

const Book = () => {

    return (
        <>
            <div className="topgrossing flex flex-col mt-16 mb-16">
                <div className="bg-[#B0FFF3] p-4 xl:w-[1172px] mx-5 xl:mx-auto xl:text-[26px]">
                    <h1 className="font-semibold font-['Montserrat'] text-[18px] md:text-[22px] text-black text-center ">NEWEST AND TOP-GROSSING</h1>
                </div>

                <div className="bg-[#000000] w-full mt-9 md:mt-10 lg:mt-11 py-3 sm:py-7 cursor-pointer font-['Montserrat']">
                    <Marquee pauseOnHover direction="right" speed={100} gradient gradientWidth={20} gradientColor='#000000' >
                        <div className="flex gap-14">
                            <div className="w-[400px] flex items-center gap-5 ml-14">
                                <img src="https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif" className="max-w-32 max-h-[204px] sm:max-w-40 sm:max-h-[236px]" />
                                <div className="min-w-40 sm:min-w-60 space-y-2 py-2">
                                    <h1 className="text-lg sm:text-xl text-[#D0BF00]">The Lord of the Rings</h1>
                                    <h1 className="text-sm sm:text-base text-[#E1E1E1]">J.R.R. Tolkien</h1>
                                    <p className="pt-5 text-[#BBBBBB] text-xs">The Lord of the Rings by J.R.R. Tolkien tells the story of the War of the Ring in the fictional world of Middle-earth.</p>
                                </div>
                            </div>
                            <div className="w-[400px] flex items-center gap-5">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/TheAlchemist.jpg/330px-TheAlchemist.jpg" className="max-w-32 max-h-[204px] sm:max-w-40 sm:max-h-[236px]" />
                                <div className="min-w-40 sm:min-w-60 space-y-2 py-2">
                                    <h1 className="text-lg sm:text-xl text-[#D0BF00]">The Alchemist</h1>
                                    <h1 className="text-sm sm:text-base text-[#E1E1E1]">Paulo Coelho</h1>
                                    <p className="pt-5 text-[#BBBBBB] text-xs">'The Alchemist' is a book that is full of wisdom and valuable lessons that can inspire us to live more purposeful and meaningful lives. The book encourages us to follow our dreams, trust in the journey, and embrace the challenges and opportunities that come our way.</p>
                                </div>
                            </div>
                            <div className="w-[400px] flex items-center gap-5">
                                <img src="https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg" className="max-w-32 max-h-[204px] sm:max-w-40 sm:max-h-[236px]" />
                                <div className="min-w-40 sm:min-w-60 space-y-2 py-2">
                                    <h1 className="text-sm sm:text-xl text-[#D0BF00]">One Piece</h1>
                                    <h1 className="text-sm sm:text-base text-[#E1E1E1]">Eiichiro Oda</h1>
                                    <p className="pt-5 text-[#BBBBBB] text-xs">ONE PIECE is a legendary high-seas quest unlike any other. Luffy is a young adventurer who has longed for a life of freedom ever since he can remember. He sets off from his small village on a perilous journey to find the legendary fabled treasure, ONE PIECE, to become King of the Pirates!</p>
                                </div>
                            </div>
                            <div className="w-[400px] flex items-center gap-5">
                                <img src="https://upload.wikimedia.org/wikipedia/en/d/da/The_Women_Kristin_Hannah_book_cover.jpg" className="max-w-32 max-h-[204px] sm:max-w-40 sm:max-h-[236px]" />
                                <div className="min-w-40 sm:min-w-60 space-y-2 py-2">
                                    <h1 className="text-lg sm:text-xl text-[#D0BF00]">The Women</h1>
                                    <h1 className="text-sm sm:text-base text-[#E1E1E1]">Kristin Hannah</h1>
                                    <p className="pt-5 text-[#BBBBBB] text-xs">In Kristin Hannah's The Women, Frankie McGrath is a young woman from a wealthy family who decides to enlist as a nurse in the Vietnam War after her older brother is killed in action.</p>
                                </div>
                            </div>
                            <div className="w-[400px] flex items-center gap-5">
                                <img src="https://upload.wikimedia.org/wikipedia/en/5/51/1984_first_edition_cover.jpg" className="max-w-32 max-h-[204px] sm:max-w-40 sm:max-h-[236px]" />
                                <div className="min-w-40 sm:min-w-60 space-y-2 py-2">
                                    <h1 className="text-lg sm:text-xl text-[#D0BF00]">Nineteen Eighty-Four</h1>
                                    <h1 className="text-sm sm:text-base text-[#E1E1E1]">George Orwell</h1>
                                    <p className="pt-5 text-[#BBBBBB] text-xs">1984 is a dystopian novel that was written by George Orwell and published in 1949. It tells the story of Winston Smith, a citizen of the miserable society of Oceania, who is trying to rebel against the Party and its omnipresent symbol, Big Brother.</p>
                                </div>
                            </div>
                            <div className="w-[400px] flex items-center gap-5">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Adventures_of_sherlock_holmes.jpg/330px-Adventures_of_sherlock_holmes.jpg" className="max-w-32 max-h-[204px] sm:max-w-40 sm:max-h-[236px]" />
                                <div className="min-w-40 sm:min-w-60 space-y-2 py-2">
                                    <h1 className="text-lg sm:text-xl text-[#D0BF00]">The Adventures of Sherlock Holmes</h1>
                                    <h1 className="text-sm sm:text-base text-[#E1E1E1]">Arthur Conan Doyle</h1>
                                    <p className="pt-5 text-[#BBBBBB] text-xs">The Adventures of Sherlock Holmes is a collection of twelve short stories by Arthur Conan Doyle. Published in 1892, the stories involve the peculiar exploits of the sharp-witted detective Sherlock Holmes, whose fierce energy and acute observation and reasoning skills enable him to solve the strangest of crimes.</p>
                                </div>
                            </div>
                            <div className="w-[400px] flex items-center gap-5">
                                <img src="https://m.media-amazon.com/images/I/61J3Uu4jOLL._SY342_.jpg" className="max-w-32 max-h-[204px] sm:max-w-40 sm:max-h-[236px]" />
                                <div className="min-w-40 sm:min-w-60 space-y-2 py-2">
                                    <h1 className="text-lg sm:text-xl text-[#D0BF00]">The 48 Laws Of Power</h1>
                                    <h1 className="text-sm sm:text-base text-[#E1E1E1]">Robert Greene</h1>
                                    <p className="pt-5 text-[#BBBBBB] text-xs">In The 48 Laws of Power, Robert Greene asserts that whether you like it or not, you're part of a never-ending game of power. You're either striving for and wielding power, or you're a pawn being played by someone more powerful than you. You choose your role.</p>
                                </div>
                            </div>
                            <div className="w-[400px] flex items-center gap-5">
                                <img src="https://m.media-amazon.com/images/I/51fRb2sgXzL._SY342_.jpg" className="max-w-32 max-h-[204px] sm:max-w-40 sm:max-h-[236px]" />
                                <div className="min-w-40 sm:min-w-60 space-y-2 py-2">
                                    <h1 className="text-lg sm:text-xl text-[#D0BF00]">Mein Kampf</h1>
                                    <h1 className="text-sm sm:text-base text-[#E1E1E1]">Adolf Hitler</h1>
                                    <p className="pt-5 text-[#BBBBBB] text-xs">Mein Kampf, political manifesto written by Adolf Hitler. It was his only complete book, and the work became the bible of National Socialism (Nazism) in Germany's Third Reich.</p>
                                </div>
                            </div>
                            <div className="w-[400px] flex items-center gap-5">
                                <img src="https://upload.wikimedia.org/wikipedia/en/e/ec/Tenida_samagra.jpg" className="max-w-32 max-h-[204px] sm:max-w-40 sm:max-h-[236px]" />
                                <div className="min-w-40 sm:min-w-60 space-y-2 py-2">
                                    <h1 className="text-lg sm:text-xl text-[#D0BF00]">Tenida Samagra</h1>
                                    <h1 className="text-sm sm:text-base text-[#E1E1E1]">Narayan Gangopadhyay</h1>
                                    <p className="pt-5 text-[#BBBBBB] text-xs">The leader of a group of four young lads who lived in the neighbourhood of Potoldanga, Tenida was depicted as the local big-mouthed airhead, who, although not blessed with academic capabilities, was admired and respected by the other three for his presence of mind, courage, and honesty as well as his vociferous.</p>
                                </div>
                            </div>
                            <div className="w-[400px] flex items-center gap-5">
                                <img src="https://upload.wikimedia.org/wikipedia/en/9/92/Crayon_Shin-chan_vol_1_cover.jpg" className="max-w-32 max-h-[204px] sm:max-w-40 sm:max-h-[236px]" />
                                <div className="min-w-40 sm:min-w-60 space-y-2 py-2">
                                    <h1 className="text-lg sm:text-xl text-[#D0BF00]">Crayon Shin-chan</h1>
                                    <h1 className="text-sm sm:text-base text-[#E1E1E1]">Yoshito Usui</h1>
                                    <p className="pt-5 text-[#BBBBBB] text-xs">Set in the city of Kasukabe of Saitama Prefecture within the Greater Tokyo Area of Japan, the series follows the adventures of the five-year-old Shinnosuke 'Shin' Nohara and his parents, baby sister, dog, neighbours, and best friends.</p>
                                </div>
                            </div>
                        </div>
                    </Marquee>
                </div>
            </div>
        </>
    );
};

export default Book;