//import React from "react";
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
    return (
        <header className="bg-green-100 p-4 flex items-center justify-between md:px-20">
            <div className="flex items-center">
                {/*
                <!--
                <a href="{% url index %}">
                    <img src="{{ URL_ROOT }}assets/images/logo-1.png" alt="Firstcare Financial Services Logo" class="object-cover w-auto md:h-[30px] h-6">
                </a> 
                -->
                */}
                <h1 className="ml-2 text-xl font-semibold montserrat"><Link to="/">Vibewalls</Link></h1>
            </div>
            <nav className="space-x-4 hidden md:flex md:gap-3 montserrat text-sm">
                {/*
                <a href="{% url wallpapers %}" class="hover:text-green-500">Wallpapers</a>
                <!--
                <a href="{% url what_we_do %}" class="hover:text-green-500">Devices</a>
                <a href="{% url who_we_are %}" class="hover:text-green-500">Popular</a>
                <a href="" class="hover:text-red-800">Contact</a> 
                -->
                */}
            </nav>
            {/*
            <!-- 
            <div class="flex gap-5 justify-right hidden md:flex">
                <a href="#" class="bg-transparent border border-red-600 text-red-600 font-semibold py-3 px-6 rounded-md hover:bg-red-600 hover:text-white text-sm">Sign up</a>
                <a href="#" class="bg-transparent border border-red-600 text-red-600 font-semibold py-3 px-6 rounded-md hover:bg-red-600 hover:text-white text-sm">Sign in</a>
            </div> 
            -->
            */}
            <span className="fas fa-bars text-4xl text-green-600 md:hidden" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation"></span>
        </header>
    )
}

export default HeaderComponent