import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { FC, useState } from "react";
import { GameType } from "../../types";

interface ViewGameButtonProps {
  game: GameType;
}

const ViewDetailButton: FC<ViewGameButtonProps> = ({ game }) => {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button
        onClick={open}
        className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-black/5"
      >
        View Details
      </Button>
      {/* <button
        onClick={open}
        className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-black/5"
      >
        View details
      </button> */}

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white text-black p-6 shadow-md backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-lg/7 font-semibold">
                Game Details
              </DialogTitle>
              <p className="mt-2 text-sm/6">Id: {game.id}</p>
              <p className="mt-2 text-sm/6">Name: {game.name}</p>
              <p className="mt-2 text-sm/6">Release Day: {game.releaseDay}</p>
              <p className="mt-2 text-sm/6">Status: {game.status}</p>
              <div className="mt-4 flex justify-end">
                <Button
                  className="gap-2 w-1/3 text-center rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Done
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ViewDetailButton;
