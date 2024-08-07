import InputBar from "./InputBar";
import ImageAvatars from "./Avatar";
import image from "../../public/image.png"

function ChatbotInfo() {
  return (
    <div className="relative  min-h-screen w-[100vw]  lg:w-3/4  lg:px-2 lg:p-4  mt-12 lg:mt-0 flex flex-col">
      <div className="flex-grow mx-3">
        <div className="flex items-center py-1 border-b-4">
          <div className="mr-4">
            <img
              className="w-[115px] rounded-md h-[95px]"
              src="https://s3-alpha-sig.figma.com/img/1e3b/8c85/c3f7d1c847c5461c0c2441669bd958db?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jcXH5dDZfhapbEHEQ3Fy50THZLYJ5OCwMsEJkU4-JdLrPe5pvt~UHr9sh1ejDbi7ElWP4ByqhNbX4XxwKj9cUP9upnZdtdjPW5v9OZ7gjUUyQ8rPCLCWOGEOEjUbGks5HKHntaGCFfQQuNwZj~7YZGD0P5ZYMoQ6y0jdWMw1KuSbRp5ylTKxNtEx7ufSPHD0~IWvyJqESs25szz53cLYKupmL-zzCan2s90RznkJ~T8o4ynHB6xyrtEt81~6Cqa7ctfe4NxkmbN8r3xDl8RypO4-mXC5k3sEGSnkLWFdlzh2lUdwu63L09QIWzjd1xZDmTJ0C7c-U~ReOfSqOuTK6w__"
              alt="BMW M3 2020"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold">BMW M3 2020</h1>
            <p className="text-sm">Miles: 54000</p>
            <p className="text-sm">Last Service Date: 05/2024</p>
            <p className="text-sm">Engine Type: V6</p>
          </div>
        </div>
        
        <div className="bg-[#D3D3D3] mt-2 flex py-4 border-b-4 rounded-sm">
          <div className="p-2">
            <ImageAvatars src="https://s3-alpha-sig.figma.com/img/b1b8/cf8c/9cab4790e5f3119ce76099d838feb177?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=exFyiEpOzDNsQ92pgyGmPunjjrjnzxqzojpllNw-2pQuncjslNfEbWIoq2UgJGEMN1ul50~vSti1-4KG4Yx9r8d9me2~2~04ASajZKgsGK8LSi5~hzI2-6TvTAwrcN18b-L2RJNeIkGy-Ll~lAoTKES4dj-d0fGX7nFoknnG-hszKdcLJFn8QJzdrsSzvRRfb26tMbl-qh1TMk-gFW7Hl1Ij1nEPGt71pb5DgtmzYY0H60C0JBcxNruIAOkylxfxew8ubJOeA3W35-fmmR9xjZDchedrx~2EscrM8Biwbeb2lRGLm4WIesixYwK0YI7umuPm~liVyVcdEc2d2KLG2Q__" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Carvis</h3>
            <p className="text-sm">Diagnostic information will appear here</p>
          </div>
        </div>
        
        <div className="bg-[#D3D3D3] mt-4 flex justify-end py-1 border-b-4 ml-3 lg:ml-20 rounded-sm relative z-10">
          <div className="flex items-center">
            <div className="text-right mr-2">
              <h3 className="font-semibold text-lg">User</h3>
              <p className="text-sm mb-6">Help me text text</p>
            </div>
            <div className="p-2">
              <ImageAvatars src="https://s3-alpha-sig.figma.com/img/1cdb/77bd/ce8fbd998763598a67b51c195904d30d?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mVndUmr9JuRdnvX32VFTDBrETAgQqq7bUkz7QuxdnvzApLnAaU89Cn99CjvYtxqMR8crWvgYn-x9XKa7-MOk5XoaTdXzj9GKIcVTF4bRZTXCVgaWjqD47mgK8nQNAH4ypZL0q2P8mZExVw1n8~9joyKfgGUnJ9AMFTaW7Z3vJp5pVqVx-NdjA9WyOfhSwJHy9E~v2L6yrRGK5CgF3ioEk6~rY~CAhqKr7Qz-BZugyexJHp-A6Lno4LjVhLPrkK24YsQwbJAPpsbnEmVUJY4oQ4kyc4HHkLKcsMf1mHnYyotTvkdYkQKvGQcBgivP-y0JVx0Bi-lT~GQVTt1yv2UqlA__" />
            </div>
          </div>
        </div>
        
        <div className="w-[280px] lg:w-[540px] h-[230px] lg:h-[270px] bg-[#FAFAFA] ml-12 lg:ml-64 z-10 lg:z-20 relative -mt-[30px] lg:-mt-[25px] flex flex-col justify-start items-start p-4 rounded-md shadow-md">
          <div className="relative">
            <img
              className="w-[250px]  lg:w-[511px]  h-[150px] lg:h-[200px] rounded-md"
              src="https://s3-alpha-sig.figma.com/img/68ae/10da/7622f6f2b43155b98ff59a8f5c9a3919?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RtU7hpUUhDLZuunozZCSokpLurAziK-7Her5xxCcAZ9c9kuxt7p530Ty3NPZhiOSanrIQ5TF058sWBjDRHBfYUvR6GDZ-cxp7yZD12rQalo0B8QB0SRqhbRbv0hudb0Z~6TGLhrKcwlPqYrsjahbFhKUaKGd-ZLoNlBKqRvgy7pYFbbvozNQ~59qJrWVWaNKY3G2U6qput8PF0~0WD1TUHdzsDX3zLVLyMprVvdCMzntL5xuy-arsJzkpAnCkwF2srFybQ2~00AFNduP2sf5nHXd1QwiEetRpj~Pp2~g9w9fxvsCz5zXyAz2LvGDzAg2o-cpTYUxEy8~4jlc-fXymA__"
              alt=""
            />
            <img 
              src={image} 
              alt="" 
              className="absolute top-0 right-0 w-8 h-8 cursor-pointer"
            />
          </div>
          <div className="mb-2">
            <h1 className="font-bold">Info</h1>
            <p>This means XYZ</p>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-[#D3D3D3] p-2  lg:p-4">
        <InputBar />
      </div>
    </div>
  );
}

export default ChatbotInfo;