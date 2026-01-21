import { useNavigate } from "react-router"

export const Welcome = () => {
        const navigate = useNavigate();
        return <div className="gap-50 bg-black text-red-800 text-7xl flex justify-center flex-col align-middle pt-[10%] h-dvh w-dvw font-robot" > 
                <div className="flex flex-col gap-25 w-full text-center items-center">
                        <div>
                                <div className="">
                                        Welcome
                                </div>
                                <div className="text-xl">
                                        Here we are going to do some evolution
                                </div>
                        </div>
                        <button className="py-3 px-6 rounded-4xl text-3xl border border-red-800 w-max hover:cursor-pointer hover:bg-red-800 hover:text-black duration-200 ease-initial"
                       onClick={() => {navigate("evolution")}} >
                                Let's go
                        </button>
                </div>
        </div>
}
