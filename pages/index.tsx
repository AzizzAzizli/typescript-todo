import { Navigation } from "@/shared/components/Nav";
import { Input } from "@/shared/components/input";
import { Button } from "@/shared/components/button";
import { SetStateAction, useRef, useState } from "react";
import { upperCase } from "@/shared/util";

export default function Home() {
  const ref = useRef<null | HTMLInputElement>(null);

  const [userDatas, setUserData] = useState<string[]>([]);

  function deleteUserData(id: string | number) {
    setUserData((prev) => prev.filter((_, index:string|number) => index != id));
  }

  function handleInputValue(): void {
    let value: string | undefined = ref.current?.value!;
    // console.log(value);
    if (value) {
      setUserData((prev)=> [value, ...prev]);
      ref.current!.value = "";
      // console.log(userDatas);
    }
    // console.log(userDatas);
    return;
  }

  return (
    <div>
      <Navigation />
      <main className=" h-screen flex justify-center   bg-slate-700 w-full">
        <div className=" mt-14 ">
          <div className=" flex flex-col gap-5">
            <div className=" w-full flex gap-2">
              <Input inputRef={ref} />
              <Button onClick={handleInputValue} />
            </div>
            <div className=" bg-slate-300 rounded-md   min-h-36 max-h-40 p-2 overflow-y-auto">
              {userDatas.map((item, index) => (
                <div key={`todo-${index}`}>
                  {" "}
                  <div className=" flex my-1 justify-between items-center">
                    <p className=" font-semibold ">
                      {index + 1}) {upperCase(item)}
                    </p>{" "}
                    <button
                      onClick={() => deleteUserData(index)}
                      className=" text-slate-100 px-2 rounded-md bg-red-800"
                    >
                      X
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
