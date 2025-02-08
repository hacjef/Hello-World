"use client"
import React from "react";
import Image from "next/image";

export default function products(){
    return(
        <div style={{backgroundColor: "#FFFFFF", height: "auto" }}>
            <div className="flex flex-col justify-center items-start p-6">
                <h1 className="text-black text-4xl font-bold">EXCLUSIVE PRODUCTS</h1>
                <h2 className="text-black text-center">Prescription for Savings: Discover Exclusive Medicine Deals!</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6">
                <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col">
                    <Image src="/images/product/prod7.jpg" alt="Card Image" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="mt-4 flex flex-col items-center">
                        <h3 className="text-xl font-semibold">Lumivane</h3>
                        <p className="text-center text-gray-600 mt-2">A sedative used to treat chronic insomnia and improve sleep quality.</p>
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
                        <h3 className="text-xl font-semibold">Zentrelis</h3>
                        <p className="text-center text-gray-600 mt-2">An antidepressant that targets serotonin and norepinephrine reuptake for mood stabilization.</p>
                        <div className="mt-4 flex space-x-4">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Add to Cart</button>
                        <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col">
                    <Image src="/images/product/prod5.jpg" alt="Card Image" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="mt-4 flex flex-col items-center">
                        <h3 className="text-xl font-semibold">Cardiovax</h3>
                        <p className="text-center text-gray-600 mt-2">A blood pressure medication that helps manage hypertension and reduces the risk of heart attacks.</p>
                        <div className="mt-4 flex space-x-4">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Add to Cart</button>
                        <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col">
                    <Image src="/images/product/prod4.jpg" alt="Card Image" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="mt-4 flex flex-col items-center">
                        <h3 className="text-xl font-semibold">Glucotrim</h3>
                        <p className="text-center text-gray-600 mt-2">An oral medication for type 2 diabetes that helps regulate blood sugar levels.</p>
                        <div className="mt-4 flex space-x-4">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Add to Cart</button>
                        <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col">
                    <Image src="/images/product/prod3.jpg" alt="Card Image" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="mt-4 flex flex-col items-center">
                        <h3 className="text-xl font-semibold">Dermacure</h3>
                        <p className="text-center text-gray-600 mt-2">A topical cream for treating eczema, psoriasis, and other inflammatory skin conditions.</p>
                        <div className="mt-4 flex space-x-4">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Add to Cart</button>
                        <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col">
                    <Image src="/images/product/prod2.jpg" alt="Card Image" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="mt-4 flex flex-col items-center">
                        <h3 className="text-xl font-semibold">Neurozan</h3>
                        <p className="text-center text-gray-600 mt-2">A medication for managing symptoms of Parkinson’s disease, including tremors and muscle stiffness.</p>
                        <div className="mt-4 flex space-x-4">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Add to Cart</button>
                        <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col">
                    <Image src="/images/product/prod1.jpg" alt="Card Image" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="mt-4 flex flex-col items-center">
                        <h3 className="text-xl font-semibold">Asthmalin</h3>
                        <p className="text-center text-gray-600 mt-2">An inhaler for quick relief of asthma symptoms and bronchospasms.</p>
                        <div className="mt-4 flex space-x-4">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Add to Cart</button>
                        <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col">
                    <Image src="/images/product/prod6.jpg" alt="Card Image" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="mt-4 flex flex-col items-center">
                        <h3 className="text-xl font-semibold">Gastrolief</h3>
                        <p className="text-center text-gray-600 mt-2">A proton pump inhibitor (PPI) for treating acid reflux and gastroesophageal reflux disease (GERD).</p>
                        <div className="mt-4 flex space-x-4">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Add to Cart</button>
                        <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col">
                    <Image src="/images/product/prod5.jpg" alt="Card Image" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="mt-4 flex flex-col items-center">
                        <h3 className="text-xl font-semibold">Arthroflex</h3>
                        <p className="text-center text-gray-600 mt-2">A nonsteroidal anti-inflammatory drug (NSAID) for pain relief in arthritis patients.</p>
                        <div className="mt-4 flex space-x-4">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Add to Cart</button>
                        <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col">
                    <Image src="/images/product/prod4.jpg" alt="Card Image" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="mt-4 flex flex-col items-center">
                        <h3 className="text-xl font-semibold">Immunovate</h3>
                        <p className="text-center text-gray-600 mt-2">An immunosuppressant used to prevent organ rejection in transplant patients.</p>
                        <div className="mt-4 flex space-x-4">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Add to Cart</button>
                        <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col">
                    <Image src="/images/product/prod3.jpg" alt="Card Image" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="mt-4 flex flex-col items-center">
                        <h3 className="text-xl font-semibold">Migranix</h3>
                        <p className="text-center text-gray-600 mt-2">A fast-acting medication for relieving migraine headaches and associated symptoms.</p>
                        <div className="mt-4 flex space-x-4">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Add to Cart</button>
                        <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col">
                    <Image src="/images/product/prod2.jpg" alt="Card Image" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="mt-4 flex flex-col items-center">
                        <h3 className="text-xl font-semibold">Virostop</h3>
                        <p className="text-center text-gray-600 mt-2">An antiviral medication for treating influenza and reducing the duration of symptoms.</p>
                        <div className="mt-4 flex space-x-4">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Add to Cart</button>
                        <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col">
                    <Image src="/images/product/prod1.jpg" alt="Card Image" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="mt-4 flex flex-col items-center">
                        <h3 className="text-xl font-semibold">Osteofix</h3>
                        <p className="text-center text-gray-600 mt-2">A bisphosphonate used to strengthen bones and prevent osteoporosis.</p>
                        <div className="mt-4 flex space-x-4">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Add to Cart</button>
                            <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">Buy Now</button>
                        </div>
                    </div>
                </div>
               
            </div>

        </div>

    );
}