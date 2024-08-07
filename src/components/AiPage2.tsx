import { useState } from 'react';
import InputBar from "./InputBar";
import ImageAvatars from "./Avatar"
import info from '../assets/information.png'
import Information from "./Information";
import { Button } from "../components/ui/moving-border";

function AiPage() {
  const [showInformation, setShowInformation] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = () => {
    setShowInformation(true);
  };

  const handleMouseLeave = () => {
    setShowInformation(false);
  };

  const handleOpenPopup = () => {

    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };


  return (
    <div className='relative min-h-screen w-full lg:w-3/4  lg:px-2 lg:p-4  mt-12 lg:mt-0  '>
      <div className='flex items-center py-1 border-b-4  mx-3'>
        <div className='mr-4'>
          <img className='w-[115px] rounded-md h-[95px]' src="https://s3-alpha-sig.figma.com/img/1e3b/8c85/c3f7d1c847c5461c0c2441669bd958db?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jcXH5dDZfhapbEHEQ3Fy50THZLYJ5OCwMsEJkU4-JdLrPe5pvt~UHr9sh1ejDbi7ElWP4ByqhNbX4XxwKj9cUP9upnZdtdjPW5v9OZ7gjUUyQ8rPCLCWOGEOEjUbGks5HKHntaGCFfQQuNwZj~7YZGD0P5ZYMoQ6y0jdWMw1KuSbRp5ylTKxNtEx7ufSPHD0~IWvyJqESs25szz53cLYKupmL-zzCan2s90RznkJ~T8o4ynHB6xyrtEt81~6Cqa7ctfe4NxkmbN8r3xDl8RypO4-mXC5k3sEGSnkLWFdlzh2lUdwu63L09QIWzjd1xZDmTJ0C7c-U~ReOfSqOuTK6w__" alt="BMW M3 2020" />
        </div>
        <div>
          <h1 className='text-lg font-bold'>BMW M3 2020</h1>
          <p className='text-sm'>Miles: 54000</p>
          <p className='text-sm'>Last Service Date: 05/2024</p>
          <p className='text-sm'>Engine Type: V6</p>
        </div>
      </div>

      <div className="bg-[#D3D3D3] mt-2 flex justify-between py-2  border-b-4 rounded-sm mx-3">
        <div className="flex flex-row">
        <div className="p-2">
          <ImageAvatars src="https://s3-alpha-sig.figma.com/img/b1b8/cf8c/9cab4790e5f3119ce76099d838feb177?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=exFyiEpOzDNsQ92pgyGmPunjjrjnzxqzojpllNw-2pQuncjslNfEbWIoq2UgJGEMN1ul50~vSti1-4KG4Yx9r8d9me2~2~04ASajZKgsGK8LSi5~hzI2-6TvTAwrcN18b-L2RJNeIkGy-Ll~lAoTKES4dj-d0fGX7nFoknnG-hszKdcLJFn8QJzdrsSzvRRfb26tMbl-qh1TMk-gFW7Hl1Ij1nEPGt71pb5DgtmzYY0H60C0JBcxNruIAOkylxfxew8ubJOeA3W35-fmmR9xjZDchedrx~2EscrM8Biwbeb2lRGLm4WIesixYwK0YI7umuPm~liVyVcdEc2d2KLG2Q__" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Carvis</h3>
          <p className="text-sm">Diagnostic information will appear here</p>
        </div>
        </div>
        <div className="relative">
          <img 
            src={info} 
            className="w-5 mx-2 lg:mx-10 my-2 cursor-pointer" 
            alt=""
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          {showInformation && (
            <div className="absolute right-[calc(100%+10px)] top-0">
              <Information />
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-[#D3D3D3]  mt-4 flex justify-end py-1 border-b-4  mx-3  lg:ml-20 rounded-sm">
  <div className="flex items-center">
    <div className="text-right mr-2">
      <h3 className="font-semibold text-lg">James</h3>
      <p className="text-sm">Show me the writing diagram parts i need</p>
    </div>
    <div className="p-2">
      <ImageAvatars src="https://s3-alpha-sig.figma.com/img/c6d0/a643/f66e5709c0ce7ae8e0ae19daeadd464a?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OTDnf4BoVDJKDdMuIWXUBGZknK3Uq2Uo-WNesZLt8yrMb4EqNV-I7NvrFtGemFfBfrhVYshKkAmck2YNoqDFSo51nebfu9-jcXXr9AXBoKHTfEKmiGCM1xBJAAuiq0CRU2LJzjnnUCPWnr8MpsIXOsvjlmRWjJW3XcWsu-Gj37uBZ-HCH2doIGhWpUWtW7eZkkPXkjHIf3Y8p54Xk5qLopbAc-mDJz9Vg6r1I0xfuusKJd4oveMPpFI4TgQZ0T-7IY6R5t7thlbP6Aos8WRpP-oDbONOQ0H96gnD1HHrMQV-evtymzImhNmgdLaasnDbNx-AWTgtLKdwzdSI5C~InQ__" />
         </div>
       </div>
   </div>

   <div className="bg-[#D3D3D3]  rounded-md mt-8 mx-3" >
      <div className="top-[346px] left-[448px] px-6 lg:px-24 pt-3">
        <h3 className="font-medium">Carvis</h3>
        <p>Sure, here's the wiring diagram for engine misfire. I would suggest to focus on cylinder 1. It is the red wire in the diagram
        below. Here are the parts you need:</p>
      </div>
      <div className="lg:flex px-8 lg:px-24 mt-3 pb-5 mb-2">
          <div  className="lg:flex lg:flex-row ">
            <img 
            className="w-[550px] cursor-pointer lg:w-[306px] rounded-md h-[200px] lg:h-[222px]" 
            onClick={() => handleOpenPopup()}
            src="https://s3-alpha-sig.figma.com/img/d37f/87a0/02d8da7d2756c9d4799d91a585d1fe61?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iylvW2tCrIXSdPBGnb44NQ0JBdX8ehrE34n5Qql~Yx9QkMVa1LiMOXPbtBbryP1w8i8HV1pdWcF1bDS~LjmZ6sx6Md70Bivy4QL0gDzSeI7Gzm6Cg6Nu~BRyFcKvAQ~mrnGebQxSD-nXIFLt8Cnyr7vjLk8U1iUe31~ESF8qnhV7Kg-DK1eGuvKALcAKA5OBsw1mvIrQbUTjfpsSCvdc6PhyLBhV~bTyTClTUCv0rtrxgeVxCla0FLfxlG4KDojvyUwZSwS6cGZFeHdoqADEccG0rC0C4UWhZiqedoVMd5h7~-mocsA5r88b6zYc3vRqir9bAROkzxBaL2eFsaaKgg__" alt="" />
          </div>

          {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 shadow-xl ">
          <div className="bg-white p-4  rounded-md relative mx-3">
            <button
              className="absolute top-2 right-2 w-8 h-8 bg-black rounded-full text-white text-xl font-bold flex items-center justify-center"
              onClick={handleClosePopup}
            >
              &times;
            </button>
             <div className='shadow-xl'>
             <img
              className="w-[600px] rounded-md"
              src="https://s3-alpha-sig.figma.com/img/d37f/87a0/02d8da7d2756c9d4799d91a585d1fe61?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iylvW2tCrIXSdPBGnb44NQ0JBdX8ehrE34n5Qql~Yx9QkMVa1LiMOXPbtBbryP1w8i8HV1pdWcF1bDS~LjmZ6sx6Md70Bivy4QL0gDzSeI7Gzm6Cg6Nu~BRyFcKvAQ~mrnGebQxSD-nXIFLt8Cnyr7vjLk8U1iUe31~ESF8qnhV7Kg-DK1eGuvKALcAKA5OBsw1mvIrQbUTjfpsSCvdc6PhyLBhV~bTyTClTUCv0rtrxgeVxCla0FLfxlG4KDojvyUwZSwS6cGZFeHdoqADEccG0rC0C4UWhZiqedoVMd5h7~-mocsA5r88b6zYc3vRqir9bAROkzxBaL2eFsaaKgg__"
              alt="Popup"
            />
             </div>
            <div className='mt-8 mx-5'>
              <h1 className='font-bold text-lg'>This is all about above diagram</h1>
              <p>Hey! here you will get complete information about image . Good Day Buddy!</p>
            </div>
          </div>
        </div>
      )}
          <div className="mt-8 lg:ml-16 ">
               <div className="lg:flex lg:p-4">
                  <div  className="">
                  <img className="w-[250px] lg:w-[120px] h-[120px] lg:h-[72px]" src="https://s3-alpha-sig.figma.com/img/07c9/14d5/d02f3dbc902b2b7f583fbbe051bd7f9a?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YFaO8vHSrg6kTp8eN0bw8P2zYZV71l~7CHTMqGkcVUuiMNqV-Xls3rEEB75n59uO1ZftWaokqmkD~9W2i4yPI2gp4uCPuK8RwBvVxQxEJLGbmaUSGJWl2ZXTmCmqk0FXu0gvWZGLyo1-BMeZE7I591XAvmJDY36eUSIJxWwZg3yZvTeYnbVnPV3E6HWIx5wIBLH4fEFqp4Gu~sYE~J03asArqmF7tDEpC~Ih379JNMa7SIRLeE~kQPVnGFBdbwBZtlSpwUVztIpElvTaucuSP9uepEnNqERx6kFs2m7LF64NtG1vHgRIbsz5Yj98LxWcfn0sHclabXMCesGMGCVgSw__" alt="" />

                  </div>
                  <div>
                    <p className="mx-4 mt-2 lg:mt-0 font-semibold "> 
                    Autolite Iridium XP Automotive
                    Replacement Spark Plugs, XP3924
                    (4 Pack)
                    </p>
                  </div>
               </div>
               <div className="lg:flex p-4 mt-6 lg:mt-0">
                  <div>
                  <img className="w-[250px] lg:w-[120px] h-[120px] lg:h-[72px]" src="https://s3-alpha-sig.figma.com/img/a168/cdbb/5ec6ea95298abc1e3ecf90161b4f6d1b?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kgtx7aSJwGjojEi3D~FsWOkaGkm68XYP~5s4MW8fQmq8Wm~hVjgRF2HBCYFD4MQm5JL3bHT42sNyZDe9vcjkViSSHJUwU9bS0hhSWs1kCek5d0J~O9F8sUkJ00XK26WTCkq9aMoMAuGgGCiqHokQz6nm2baT76nWQbZp0T2L6JgwBK6-8WOWIh9e0~ZTOvGav6jwIZs00WJyZckyWrCgZjrJO7bxjArjd1EaUHGYzRExF2jufvuF-CmS95-2S-hTHXE9gVjf7jPx8gqEQy-LgapuWI2sziWXRIjX6SYUziyAiydlkkvU9EUs0jMEYVzY3YuhM5DJILPlWGzoft3vtg__" alt="" />

                  </div>
                  <div>
                    <p className="ml-4 mt-2 lg:mt-0 font-semibold"> 
                    Denso Direct Ignition Coil OE Quality
                    - 673-2313
                    </p>
                  </div>
               </div>
          </div>
      </div>
   </div>

   <div className="lg:flex lg:flex-row justify-between mt-8 mx-6 lg:mx-28">
  {/* <div className="border-2 font-medium border-black rounded-md mt-4 p-4">Start Diagnosis</div>
  <div className="border-2 font-medium border-black rounded-md mt-4 p-4">Suggestion 2</div>
  <div className="border-2 font-medium border-black rounded-md mt-4 p-4">Suggestion 3</div> */}
  {/* <button className='bg-blue-600 text-white font-medium rounded-3xl p-3 px-4 mt-4'>Suggestion 2</button>
  <button className='bg-blue-600 text-white font-medium rounded-3xl p-3 px-4 mt-4'>Suggestion 3</button>
  <button className='bg-blue-600 text-white font-medium rounded-3xl p-3 px-4 mt-4'>Start Diagnosis</button> */}
<Button
  className="text-[0.7rem] md:text-lg hover:bg-slate-600"
  containerClassName="w-20 lg:w-40 lg:h-14 mx-2"
>
  Start Diagnosis
</Button>


 <Button
 className="text-[0.7rem] md:text-lg hover:bg-slate-600"
 containerClassName="w-20 lg:w-40 lg:h-14 mx-2"
  >
    Suggestion 2
 </Button>

 <Button
 className="text-[0.7rem] md:text-lg hover:bg-slate-600"
 containerClassName="w-20 lg:w-40 lg:h-14 mx-2"
  >
    Suggestion 3
 </Button>
      
</div>
      
      <div className="w-full mt-10 bg-[#D3D3D3] p-2 lg:p-4">
        <InputBar />
      </div>
    </div>
  );
}

export default AiPage;