import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="relative h-screen bg-black overflow-hidden">
    <div className="absolute bottom-[20%] right-[25%] w-32 h-32 bg-[#27B902CC] clip-triangle rotate-[50deg] transform translate-x-1/2 translate-y-1/2"></div>

    
      <div className="absolute top-[200px] left-[-275px] w-[633px] h-[889px] rounded-[0%_66%_25%_0%_/25%_45%_0%_25%] bg-gradient-to-b from-[#000AFF] to-[#0253B900]"></div>

      <div className="absolute top-1/2 left-1/2 w-[500px] h-[600px] bg-[#FFFFFF0D] shadow-none transform -translate-x-1/2 -translate-y-1/2">
 
        <div className="font-montserrat text-6xl font-normal leading-[107.52px] tracking-wider text-[#FFFFFF80] mt-[50px] ml-[40px]">
          <span>L</span><span>O</span><span>G</span><span>I</span><span>N</span>
        </div>
        <form>
          <div className="w-4/5 ml-[40px] mb-[15px] mt-[10px] text-[#FFFFFF80]">
            <input
              type="email"
              id="email"
              className="w-full p-3 text-base bg-black text-[#FFFFFF80] border border-black outline-none"
              placeholder="Username"
              required
            />
          </div>
          <div className="w-4/5 ml-[40px] mb-[15px] mt-[10px] text-[#FFFFFF80]">
            <input
              type="password"
              id="password"
              className="w-full p-3 text-base bg-black text-[#FFFFFF80] border border-black outline-none"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="w-[182px] h-[54px] rounded-[10px] bg-[#FFFFFF1A] mt-[40px] ml-[40px] flex justify-center items-center cursor-pointer">
            <p className="text-lg font-normal leading-[30.48px] text-center text-[#FFFFFF80] tracking-wider">
              LOGIN
            </p>
          </button>
        </form>


        <div className="flex items-center mt-12">
      <div className="flex items-center justify-center w-[550px] mt-2">
      <div className="flex-grow h-[1px] border-t border-white/80 mx-5"></div>
      <div className="text-center text-white/80 font-semibold text-lg">OR</div>
      <div className="flex-grow h-[1px] border-t border-white/80 mx-5"></div>
      </div>
      </div>

        <div className="flex justify-start items-start mt-[40px] ml-[185px]">
          <img src="./images/image2.png" alt="Google" className="w-[30px] h-[30px] object-cover rounded-[10px]" />
          <img src="./images/image3.png" alt="Facebook" className="w-[30px] h-[30px] object-cover rounded-[10px] ml-[72px]" />
        </div>
      </div>
      <div className="absolute top-[-100px] right-[-275px] w-[633px] h-[889px] rounded-[0%_66%_25%_0%_/25%_45%_0%_25%] bg-gradient-to-b from-[#FF0000] to-[#0253B900] rotate-[180deg] overflow-hidden"></div>
      <div className="absolute top-[50px] left-[300px] w-[116px] h-[121px] bg-[#27B902CC] transform rotate-[-50deg] clip-triangle"></div>
    </div>
  );
};

export default App;
