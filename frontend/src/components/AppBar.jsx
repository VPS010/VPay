
export const AppBar = () => {
    return <div className="shadow h-14 flex justify-between">
        <div className="flex justify-center h-full">
        <img
                className="w-44 h-10 mr-2"
                src="/Untitled_design__2___1_-removebg-preview.png"
                alt="logo"
              />
              <p className="mt-2 ml-0 text-xl text-blue-950">Secure Payments Simplified</p>
        </div>
        <div className="flex ">
            <div className="flex flex-col mt-3 text-lg h-full mr-4 to-blue-800">
                Hello 
            </div>
            <div className="rounded-full h-12 w-12 bg-blue-200 flex justify-center mt-0 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    U
                </div>
            </div>
        </div>
    </div>
}