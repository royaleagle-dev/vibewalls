const FooterComponent = () => {
    return (
        <footer className="bg-green-50 py-8 px-4 md:px-20">
            <div className="md:flex w-full gap-10 justify-between items-center">
                <div className="md:w-1/3">
                    <div className="mb-5">
                        {/*
                        <!-- <div class="flex justify-center md:justify-start">
                            <img src="{{ URL_ROOT }}assets/images/logo-1.png" alt="Firstcare Financial Services Logo" class="object-cover w-auto md:h-12 h-12">
                        </div> -->
                        */}
                        <div className="text-center md:text-left mt-5">
                            <h3 className="mb-3 text-2xl font-semibold montserrat">Vibewalls</h3>
                            <p className="text-sm mb-4 md:text-left">Free wallpapers for desktop, mobile, and tablet. Transform your screens with stunning visuals from our curated collection.</p>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-start gap-5">          
                        {/*<!-- <a href="">
                            <div class="py-3 px-4 bg-green-600 rounded-lg h-16 w-16 flex items-center justify-center">
                            <span class="fab fa-facebook text-2xl text-white"></span>
                            </div>
                        </a>
                        <a href="">
                            <div className="py-3 px-4 bg-green-600 rounded-lg h-16 w-16 flex items-center justify-center">
                                <span className="fab fa-instagram text-2xl text-white"></span>
                            </div>
                        </a>
                        <a href="">
                            <div class="py-3 px-4 bg-green-600 rounded-lg h-16 w-16 flex items-center justify-center">
                                <span class="fas fa-envelope text-xl text-white"></span>
                            </div>
                        </a> 
                        <a href="">
                            <div class="py-3 px-4 bg-green-600 rounded-lg h-16 w-16 flex items-center justify-center">
                                <span class="fas fa-phone-alt text-xl text-white"></span>
                            </div>
                        </a>
                        */}
                    </div>
                </div>
      
                <div className="flex justify-center gap-10 mt-5 md:mt-1 montserrat">
                    <div className="">
                        <h4 className="text-sm font-semibold mb-4 text-green-500">Quick Links</h4>
                        <ul className="text-sm space-y-2">
                            <li><a href="{% url index %}">Home</a></li>
                            <li><a href="{% url wallpapers %}">Wallpapers</a></li>
                            {/*
                             <li><a href="">Desktop Wallpapers</a></li>
                            <li><a href="">Categories</a></li>
                            */}
                        </ul>
                    </div>
                    {/*
                    <!-- <div class="">
                        <h4 class="text-sm font-semibold mb-4 text-red-400">Other Links</h4>
                        <ul class="text-sm space-y-2">
                            <li><a href="">Resources</a></li>
                            <li><a href="">Staff Directory</a></li>
                        </ul>
                    </div>
                    <div class="">
                        <h4 class="text-sm font-semibold mb-4 text-red-400">Client Portal</h4>
                        <ul class="text-sm space-y-2">
                            <li><a href="">Sign up</a></li>
                            <li><a href="">Login</a></li>
                        </ul>
                    </div> -->
                    */}
                </div>
            </div>
            
            <div className="mt-8 text-center text-xs border-t border-green-500 pt-4">
                <p>© 2025 Vibewalls. All rights reserved.</p>
                {/*<!-- 
                <div class="mt-2 space-x-4">
                    <a href="#" class="text-yellow-400 hover:text-yellow-300">Privacy Policy</a>
                    <a href="#" class="text-yellow-400 hover:text-yellow-300">Terms of Service</a>
                    <a href="#" class="text-yellow-400 hover:text-yellow-300">Accessibility</a>
                </div> 
                -->*/}
            </div>
        </footer>
    )
}

export default FooterComponent