import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { FC, useState } from "react";
import { useDeleteGame } from "../../hooks/useGame";

interface ViewGameButtonProps {
  gameId: number;
}

const DeleteGameButton: FC<ViewGameButtonProps> = ({ gameId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { deleteGame } = useDeleteGame();
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const deleteGameHandler = () => {
    deleteGame(gameId);
  };
  return (
    <>
      <Button
        onClick={open}
        className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 text-red-600 font-semibold"
      >
        Delete
      </Button>

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
                Request confirmation
              </DialogTitle>
              <p>Do you want to remove this game?</p>
              <div className="mt-4 flex space-x-2 justify-end">
                <Button
                  className="gap-2 w-1/3 text-center rounded-md bg-red-600 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-red-500 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={deleteGameHandler}
                >
                  Yes
                </Button>
                <Button
                  className="gap-2 w-1/3 text-center rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Cancel
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default DeleteGameButton;
