/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/Button";
import { AppDispatch } from "@/redux/store";
import { ClosePreview } from "@/redux/Reducers/preview";

export default function Preview() {
  const isOpen = useSelector((state: any) => state.preview.value);
  const dispatch = useDispatch<AppDispatch>();
  isOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <div
      className={cn(
        isOpen
          ? "fixed inset-0 z-50 w-full h-screen bg-black/20 grid place-content-center"
          : "hidden"
      )}
    >
      <div className="w-full min-w-[80rem] h-[40rem] bg-white relative">
        <Button
          onClick={() => {
            dispatch(ClosePreview());
          }}
          className="absolute bg-slate-200 top-2 -right-12 rounded-full"
          variant="default"
          size="icon"
        >
          ❌
        </Button>
      </div>
    </div>
  );
}
