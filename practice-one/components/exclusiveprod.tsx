"use client"
import React from "react";
import Image from "next/image";

export default function exclusiveprod(){
    return(
        <div style={{backgroundColor: "#80C07B", height: "auto" }}>
            <div className="flex flex-col justify-center items-center p-6">
                <h1 className="text-white text-4xl font-bold">EXCLUSIVE PRODUCTS</h1>
                <h2 className="text-center">Prescription for Savings: Discover Exclusive Medicine Deals!</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6">
                <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col">
                    <Image src="/images/product/prod7.jpg" alt="Card Image" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="mt-4 flex flex-col items-center">
                        <h3 className="text-xl font-semibold">Card Title</h3>
                        <p className="text-center text-gray-600 mt-2">This is a brief description of the card content.</p>
                        <div className="mt-4 flex space-x-4">
                            <button className="bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-600 transition flex items-center space-x-2">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M3 3l1 18h14l1-18M10 14h4m-2-2v4" />
                                </svg>
                                <span className="text-sm">Add to Cart</span>
                            </button>
                            <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">Button 2</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col">
                    <Image src="/images/product/prod6.jpg" alt="Card Image" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="mt-4 flex flex-col items-center">
                        <h3 className="text-xl font-semibold">Card Title</h3>
                        <p className="text-center text-gray-600 mt-2">This is a brief description of the card content.</p>
                        <div className="mt-4 flex space-x-4">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Button 1</button>
                            <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">Button 2</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col">
                    <Image src="/images/product/prod5.jpg" alt="Card Image" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="mt-4 flex flex-col items-center">
                        <h3 className="text-xl font-semibold">Card Title</h3>
                        <p className="text-center text-gray-600 mt-2">This is a brief description of the card content.</p>
                        <div className="mt-4 flex space-x-4">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Button 1</button>
                            <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">Button 2</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col">
                    <Image src="/images/product/prod4.jpg" alt="Card Image" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="mt-4 flex flex-col items-center">
                        <h3 className="text-xl font-semibold">Card Title</h3>
                        <p className="text-center text-gray-600 mt-2">This is a brief description of the card content.</p>
                        <div className="mt-4 flex space-x-4">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Button 1</button>
                            <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">Button 2</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col">
                    <Image src="/images/product/prod3.jpg" alt="Card Image" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="mt-4 flex flex-col items-center">
                        <h3 className="text-xl font-semibold">Card Title</h3>
                        <p className="text-center text-gray-600 mt-2">This is a brief description of the card content.</p>
                        <div className="mt-4 flex space-x-4">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Button 1</button>
                            <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">Button 2</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col">
                    <Image src="/images/product/prod2.jpg" alt="Card Image" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="mt-4 flex flex-col items-center">
                        <h3 className="text-xl font-semibold">Card Title</h3>
                        <p className="text-center text-gray-600 mt-2">This is a brief description of the card content.</p>
                        <div className="mt-4 flex space-x-4">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Button 1</button>
                            <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">Button 2</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col">
                    <Image src="/images/product/prod1.jpg" alt="Card Image" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="mt-4 flex flex-col items-center">
                        <h3 className="text-xl font-semibold">Card Title</h3>
                        <p className="text-center text-gray-600 mt-2">This is a brief description of the card content.</p>
                        <div className="mt-4 flex space-x-4">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Button 1</button>
                            <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">Button 2</button>
                        </div>
                    </div>
                </div>
               
            </div>

        </div>

    );
}