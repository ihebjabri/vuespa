<template>
    <nav id="nav" class="sm:container sm:mx-auto" >
            <div class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
                <div class="flex justify-between items-center px-6 sm:px-0">
                    <div>
                        <a href="/" aria-current="page" class="nuxt-link-exact-active nuxt-link-active"><img
                                src="https://react-tailwindcss-portfolio.netlify.app/static/media/logo-dark.da150d1d.svg"alt="Color Logo" class="w-36">
                        </a>
                    </div>
               
                    <button   class="sm:hidden ml-8 bg-primary-light dark:bg-ternary-dark px-2 py-1.5 sm:px-3 sm:py-2 shadow rounded-xl cursor-pointer">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-gray-200 hover:text-gray-50 w-6 h-6">
                            <path
                                stroke-linecap="round"stroke-linejoin="round"stroke-width="2"d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
                            </path>
                        </svg>

                        

                  

                          
                    </button>
                    <div class="sm:hidden">
                      <button v-on:click="toggleNavbar()"
                            type="button"aria-label="Hamburger Menu"class="focus:outline-none dark:text-white"  ><svg
                                xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24"class="h-7 w-7 mt-1 fill-current text-secondary-dark dark:text-ternary-light">
                             
                                <path
                                v-bind:class="{'hidden': !showMenu, '': showMenu}"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                              />
                              <path
                              v-bind:class="{'hidden': showMenu, '': !showMenu}"
                                fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                              />

                         
                            </svg>
                        </button>
                    </div>
                </div>
                <div v-bind:class="{'hidden': !showMenu, '': showMenu}" class="font-general-regular m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"  >
                 <router-link  class="block text-left text-lg text-primary-dark dark:text-white hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark" to="/" > Home</router-link>
                 <router-link class="block text-left text-lg text-primary-dark dark:text-white hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark" to="/about" > About</router-link>
                 <router-link  class="block text-left text-lg text-primary-dark dark:text-white hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark" to="/login" > Login</router-link>
                 <router-link class="block text-left text-lg text-primary-dark dark:text-white hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark" to="/register" > Register</router-link>
               
                    <div
                        class="font-general-regular border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
                        <button
                            aria-label="Hire Me Button"class="sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-4 py-2 mt-2">Hire
                            Me </button>
                    </div>
                </div>
                
                <div class="hidden sm:flex justify-between items-center flex-col md:flex-row">
                    <div class="font-general-medium hidden md:block">
                        <button
                            aria-label="Hire Me Button"class="text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5">Hire
                            Me </button>
                    </div>
                    <button 
                        class="sm:ml-6 bg-primary-light dark:bg-ternary-dark px-2 py-2 shadow-sm rounded-lg cursor-pointer">
                        
                        <svg 
                        xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24"stroke="currentColor"class="text-gray-200 hover:text-gray-50 w-6 h-6">
                        <path
                            stroke-linecap="round"stroke-linejoin="round"stroke-width="2"d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
                        </path>
                    </svg>

                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                      </svg>

                        
                    </button>
                </div>
            </div>
     
        </nav>
</template>


<script>
export default {
  name: "pink-navbar",
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>