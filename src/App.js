import './App.css';

function App() {
  return (
    <div className="bg-gradient-to-r from-[#7C808C] to-[#4E5158] text-white h-full w-full sm:py-10">
      <div className="container">
        <div id="iphone-13" className='transform sm:translate-x-1/4 md:translate-x-2/4 lg:translate-x-full pt-5 sm:w-[428px] h-[926px] bg-[#1B202D] sm:rounded-[50px] shadow-3xl'>
          <div div className='flex m-5 items-center' >
            <img className=' left-6 top-16 w-11 h-11 rounded-full' src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="" />
            <h2 className='ml-5 font-poppins normal-case font-semibold text-xl '>Danny Hopkins</h2>
          </div >
          <div id="main" className='container px-2 mx-3 mt-10'>
            <h6 className='py-5 text-center font-normal text-sm'>1 FEB 12:00</h6>
            <div id="text-send" className='text-send py-2'>
              <p className='genarel-comment-style rounded-3xl'>I commented on Figma, I want to add some fancy icons. Do you have any icon set?</p>
            </div>
            <div id="text-reply" className='text-reply'>
              <p className='genarel-comment-style'>I am in a process of designing some. When do you need them?</p>
            </div>
            <div id="text-send" className='py-5 text-send w-1/3 mt-3'>
              <p className='genarel-comment-style rounded-3xl'>Next month?</p>
            </div>

            <h6 className='py-5 text-center font-normal text-sm'>08:12</h6>

            <div id="text-reply" className='text-reply'>
              <p className='genarel-comment-style'>I am almost finish. Please give me your email, I will ZIP them and send you as son as im finish.</p>
            </div>

            <div id="text-reply" className='text-reply w-12 float-right mr-6'>
              <p className='genarel-comment-style'>?</p>
            </div>

            <h6 className='py-5 text-center font-normal text-sm'>08:43</h6>

            <div id="text-send" className='py-4 text-send w-[55%] mt-3'>
              <p className='genarel-comment-style rounded-3xl'>maciej.kowalski@email.com</p>
            </div>

            <div id="text-reply" className='text-reply w-12 float-right mr-6'>
              <p className='genarel-comment-style text-[#EE9547]'>👍🏻</p>
            </div>


            <label className="relative block mt-48 sm:mt-36">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-camera " viewBox="0 0 16 16"> <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" /> <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" /> </svg>
              </span>

              <span class="absolute inset-y-0 sm:ml-[80%] ml-[87%] flex items-center pr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16" id="IconChangeColor" transform="rotate(45)"> <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg>
              </span>

              <input class="placeholder:italic placeholder:text-slate-400 block bg-[#3D4354] w-[96%] sm:w-[376px] h-[46px] rounded-full mt-20 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm py-2 pl-12 pr-3" placeholder="Message" type="text" name="search" />
            </label>
          </div>
        </div >
      </div>
    </div >
  );
}

export default App;







