import { CircleNotch } from "phosphor-react";

export function Loading() {
  return (
    <div className="flex items-center justify-center">
      <CircleNotch className="text-6xl text-zinc-900 animate-spin " />
    </div>
  );
}
