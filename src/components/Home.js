import React from "react";
import image from "./images1.jpg"

export default function Home() {
    return <main>
        <img
            src={image}
            alt="Images1 Leaves"
            className="absolute object-cover w-full h-full"
        />
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-6">
            <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
                As-salamu alaykum,  <br/>
                I'm Md Asif Alam
            </h1>
        </section>

    </main>
}