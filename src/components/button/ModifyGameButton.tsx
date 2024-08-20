import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Select,
} from "@headlessui/react";
import { Field, Input, Label, Description } from "@headlessui/react";
import { FC, useState } from "react";
import { GameType, StatusType } from "../../types";
import { statuses } from "../../constants/statuses";
import { ChevronDown } from "lucide-react";
import { z } from "zod";
import { PartialGameSchema } from "../../schema";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateGame } from "../../hooks/useGame";

type GameInputs = z.infer<typeof PartialGameSchema>;

interface ModifyGameButtonProps {
  game: GameType;
}

const ModifyGameButton: FC<ModifyGameButtonProps> = ({ game }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { updateGame } = useUpdateGame();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GameInputs>({
    resolver: zodResolver(PartialGameSchema),
    defaultValues: {
      name: game.name,
      status: game.status,
    },
  });

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  const updateGameHandler: SubmitHandler<GameInputs> = (data) => {
    const { name, status } = data;
    console.log(data);
    updateGame(game.id, name, status);
  };

  return (
    <>
      <Button
        onClick={open}
        className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-black/5"
      >
        Update
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <form
            onSubmit={handleSubmit(updateGameHandler)}
            className="flex min-h-full items-center justify-center p-4"
          >
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white text-black p-6 shadow-md backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-lg/7 font-semibold">
                Updating Game
              </DialogTitle>
              <Field>
                <Label className="text-sm/6 font-medium">Id</Label>

                <Input
                  className={
                    "mt-3 block w-full rounded-lg border py-1.5 px-3 text-sm/6"
                  }
                  value={game.id}
                  disabled
                />
              </Field>
              <Field>
                <Label className="text-sm/6 font-medium">Name</Label>

                <Input
                  className={
                    "mt-3 block w-full rounded-lg border py-1.5 px-3 text-sm/6"
                  }
                  type="text"
                  defaultValue={game.name}
                  {...register("name")}
                />
                <Description className="text-red-600 text-xs">
                  {errors["name"]?.message}
                </Description>
              </Field>
              <Field>
                <Label className="text-sm/6 font-medium">Release Day</Label>

                <Input
                  className={
                    "mt-3 block w-full rounded-lg border py-1.5 px-3 text-sm/6"
                  }
                  value={game.releaseDay}
                  disabled
                />
              </Field>
              <Field>
                <Label className="text-sm/6 font-medium">Status</Label>
                <div className="relative">
                  <Select
                    className={
                      "mt-3 block w-full appearance-none rounded-lg border bg-white py-1.5 px-3 text-sm/6 text-black"
                    }
                    // defaultValue={game.status}
                    {...register("status")}
                  >
                    {statuses.map((status: StatusType) => (
                      <option key={status.id} value={status.name}>
                        {status.name}
                      </option>
                    ))}
                  </Select>
                  <ChevronDown
                    className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                    aria-hidden="true"
                  />
                </div>
              </Field>

              <div className="mt-4 flex justify-end gap-2">
                <Button
                  onClick={() => console.log(`clicked`)}
                  className="gap-2 w-1/3 text-center rounded-md bg-blue-600 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-blue-500 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  type="submit"
                >
                  Confirm
                </Button>
                <Button
                  className="gap-2 w-1/3 text-center rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Cancel
                </Button>
              </div>
            </DialogPanel>
          </form>
        </div>
      </Dialog>
    </>
  );
};

export default ModifyGameButton;
