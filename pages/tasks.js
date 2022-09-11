import { CalendarIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  FaceSmileIcon,
  FaceFrownIcon,
  CalculatorIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import "@tensorflow/tfjs-backend-cpu";
//import "@tensorflow/tfjs-backend-webgl";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

const defaultTasks = [
  {
    id: 1,
    CityState: "San Francisco, CA",
    Road: "Picasso Rd",
    closeDateFull: "September 7th, 2022",
    cost: 350,
    job: "Purchase a fridge and put in on Hayes Street in San Francisco, CA",
    imageUrl:
      "https://images1.apartments.com/i2/TQj_6gsC8XV_rviAaQ6gi62Eb0qxFh1et5AACMODlIg/111/6694-picasso-rd-goleta-ca-primary-photo.jpg",
  },
  {
    id: 2,
    CityState: "Chicago, IL",
    Road: "N California Ave",
    closeDateFull: "September 10th, 2022",
    cost: 30,
    job: "Collect excess food from local groceries or restaurants",
    imageUrl:
      "https://images1.loopnet.com/i2/mtAKiyXi7p6GSM4I-4rHq96xuWJY_c85Jl4C7dH6OEk/110/2020-N-California-Ave-Chicago-IL-Primary-Photo-1-Large.jpg",
  },
  {
    id: 3,
    CityState: "Miami, FL",
    Road: "NW 1st Ave",
    closeDateFull: "September 11th, 2022",
    cost: 30,
    job: "Collect excess food from local groceries or restaurants",
    imageUrl:
      "https://images1.apartments.com/i2/e60vkQudqQG9oMr7J5YhMd7iFA3lLHLAXbn-cW8fFjY/111/1000-nw-1st-ave-miami-fl-primary-photo.jpg",
  },
];

export default function Example() {
  const [open, setOpen] = useState(false);

  const [isLoading, setLoading] = useState(false);
  const [predictions, setPredictions] = useState([]);
  const [imgData, setImgData] = useState(null);
  const [hasFoundRefrigerator, setHasFoundRefrigerator] = useState(false);
  const [hasPredicted, setHasPredicted] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState(defaultTasks);

  const detectObjectsOnImage = async (imageElement) => {
    const model = await cocoSsd.load({});
    const predictions = await model.detect(imageElement, 6);
    setPredictions(predictions);
    setHasPredicted(true);
    const success = predictions.some(
      (prediction) => prediction.class === "refrigerator"
    );
    setHasFoundRefrigerator(success);
    if (success) {
      setTasks(tasks.filter((task) => task !== selectedTask));
    }
    console.log("Predictions: ", predictions);
  };

  const readImage = (file) => {
    return new Promise((rs, rj) => {
      const fileReader = new FileReader();
      fileReader.onload = () => rs(fileReader.result);
      fileReader.onerror = () => rj(fileReader.error);
      fileReader.readAsDataURL(file);
    });
  };

  const onSelectImage = async (e) => {
    setPredictions([]);
    setLoading(true);

    const file = e.target.files[0];
    const imgData = await readImage(file);
    setImgData(imgData);

    const imageElement = document.createElement("img");
    imageElement.src = imgData;

    imageElement.onload = async () => {
      await detectObjectsOnImage(imageElement);
      setLoading(false);
    };
  };

  return (
    <>
      <h1 className="text-2xl font-normal mt-4 text-center">
            Select a task and earn rewards
      </h1>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div
                      className={
                        "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10 " +
                        (isLoading ? "bg-yellow-100" : "") +
                        (hasPredicted && !hasFoundRefrigerator
                          ? "bg-red-100"
                          : "")
                      }
                    >
                      {isLoading ? (
                        <CalculatorIcon
                          className="h-6 w-6 text-yellow-600"
                          aria-hidden="true"
                        />
                      ) : hasPredicted && !hasFoundRefrigerator ? (
                        <FaceFrownIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      ) : (
                        <FaceSmileIcon
                          className="h-6 w-6 text-green-600"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        {isLoading
                          ? "Verifying..."
                          : hasPredicted
                          ? hasFoundRefrigerator
                            ? "Verified successfully!"
                            : "Verification failed"
                          : "Verify task"}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {isLoading
                            ? "Please wait while we verify your image..."
                            : hasPredicted
                            ? hasFoundRefrigerator
                              ? "Thanks for your help! You've been awarded with 350 MATIC."
                              : "Please try again with a different image."
                            : "Thank you for your help! Please click 'Upload' to take/upload an image of your contribution."}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <label
                      for="file-input"
                      className="cursor-pointer inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Upload
                    </label>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>
                    <input
                      onChange={onSelectImage}
                      id="file-input"
                      className="hidden"
                      type="file"
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="w-2/3 mt-8 mx-auto overflow-hidden bg-white shadow sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {tasks.map((task) => (
            <li key={task.id}>
              <a href="#" className="block hover:bg-gray-50">
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 sm:flex sm:items-start sm:justify-between m-4">
                    <div className="truncate">
                      <div className="flex text-sm">
                        <p className="truncate font-medium text-2xl text-indigo-600">
                          {task.CityState}
                        </p>
                        <p className="ml-1 flex-shrink-0 font-normal text-2xl text-gray-500">
                          on {task.Road}
                        </p>
                      </div>
                      <div className="mt-2 flex">
                        <div className="flex text-sm text-gray-500">
                          <CalendarIcon
                            className="mt-1 mr-2 h-6 w-6 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <p className="text-2xl">
                            Date Posted:{" "}
                            <time dateTime={task.closeDate}>
                              {task.closeDateFull}
                            </time>
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 font-bold flex text-xl text-gray-500">
                        Task: <div className="ml-2 font-normal">{task.job}</div>
                      </div>
                      <div className="mt-4 font-bold flex text-xl text-gray-500">
                        Reward:{" "}
                        <div className="ml-2 font-normal">
                          {task.cost} MATIC
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                      <div className="flex overflow-hidden">
                        <button
                          onClick={() => {
                            setSelectedTask(task);
                            setOpen(true);
                          }}
                          type="button"
                          className="h-12 mt-20 ml-36 mr-4 inline-flex rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Redeem
                        </button>
                        <img
                          className="m-4 inline-block h-40 w-40 object-cover rounded-full ring-4 ring-indigo-300"
                          src={task.imageUrl}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-5 flex-shrink-0">
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
