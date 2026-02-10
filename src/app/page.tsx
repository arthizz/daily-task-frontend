import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-md flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="container mx-auto p-7 border-2 border-indigo-500">
          <h1 className="text-center mb-4 text-3xl">Login</h1>
          <form action="">
            <div className="grid grid-cols-1 gap-y-8">
              <div className="col">
                <label htmlFor="first-name" className="block text-sm/6 font-medium text-white">
                  Username/Email
                </label>
                <div className="mt-2">
                  <input 
                    type="text"
                    name="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="col">
                <label htmlFor="password" className="block text-sm/6 font-medium text-white">
                  Password
                </label>
                <div className="mt-2">
                  <input 
                    type="password"
                    name="password"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
                <div className="mt-5">
                  <button className="
                  block
                  w-full
                  rounded-md 
                  bg-indigo-500 px-3 
                  py-1.5
                  text-sm 
                  font-semibold 
                  text-white 
                  focus-visible:outline-2 
                  focus-visible:outline-offset-2 
                  focus-visible:outline-indigo-500">Login</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
