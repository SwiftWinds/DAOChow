import { useState, useEffect } from "react";

import { CalendarIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import NoSSR from "react-no-ssr";

const defaultProposals = [
  {
    id: 1,
    CityState: "Santa Barbara, CA",
    Road: "Picasso Rd",
    closeDateFull: "September 5th, 2022",
    cost: 300,
    impact: 1000,
    upvotes: 12,
    imageUrl:
      "https://images1.apartments.com/i2/TQj_6gsC8XV_rviAaQ6gi62Eb0qxFh1et5AACMODlIg/111/6694-picasso-rd-goleta-ca-primary-photo.jpg",
  },
  {
    id: 2,
    CityState: "Chicago, IL",
    Road: "N California Ave",
    closeDateFull: "September 5th, 2022",
    cost: 400,
    impact: 2500,
    upvotes: 11,
    imageUrl:
      "https://images1.loopnet.com/i2/mtAKiyXi7p6GSM4I-4rHq96xuWJY_c85Jl4C7dH6OEk/110/2020-N-California-Ave-Chicago-IL-Primary-Photo-1-Large.jpg",
  },
  {
    id: 3,
    CityState: "Miami, FL",
    Road: "NW 1st Ave",
    closeDateFull: "September 5th, 2022",
    cost: 450,
    impact: 2000,
    upvotes: 9,
    imageUrl:
      "https://images1.apartments.com/i2/e60vkQudqQG9oMr7J5YhMd7iFA3lLHLAXbn-cW8fFjY/111/1000-nw-1st-ave-miami-fl-primary-photo.jpg",
  },
];

export default function Proposals() {
  const [proposals, setProposals] = useState(defaultProposals);
  const calculateTimeLeft = () => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + ((1 + 7 - d.getDay()) % 7 || 7));
    const difference = +d - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  let isFirstComponent = true;
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval] && isFirstComponent) {
      return;
    }

    isFirstComponent = false;

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <>
      <NoSSR>
        <h1 className="text-2xl font-medium mt-4 text-center">
          Time until voting ends:{" "}
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </h1>
      </NoSSR>
      <div className="w-2/3 mt-4 mx-auto overflow-hidden bg-white shadow sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {proposals.map((proposal) => (
            <li key={proposal.id}>
              <a href="#" className="block hover:bg-gray-50">
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 sm:flex sm:items-start sm:justify-between m-4">
                    <div className="truncate">
                      <div className="flex text-sm">
                        <p className="truncate font-medium text-2xl text-indigo-600">
                          {proposal.CityState}
                        </p>
                        <p className="ml-1 flex-shrink-0 font-normal text-2xl text-gray-500">
                          on {proposal.Road}
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
                            <time dateTime={proposal.closeDate}>
                              {proposal.closeDateFull}
                            </time>
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 font-bold flex text-xl text-gray-500">
                        Impact:{" "}
                        <div className="ml-2 font-normal">
                          {proposal.impact} people
                        </div>
                      </div>
                      <div className="mt-4 font-bold flex text-xl text-gray-500">
                        Cost:{" "}
                        <div className="ml-2 font-normal">${proposal.cost}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        const index = proposals.indexOf(proposal);
                        proposals[index].upvotes += 1;
                        setProposals([...proposals]);
                      }}
                      type="button"
                      className="h-12 mt-20 ml-36 inline-flex rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Upvote
                    </button>
                    <div className="inline-flex mt-24 mr-6 rounded-full bg-indigo-100 px-2.5 py-0.4 text-xl font-bold text-indigo-800">
                      {proposal.upvotes}
                    </div>
                    <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                      <div className="flex -space-x-1 overflow-hidden">
                        <img
                          className="m-4 inline-block h-40 w-40 object-cover rounded-full ring-4 ring-indigo-300"
                          src={proposal.imageUrl}
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
