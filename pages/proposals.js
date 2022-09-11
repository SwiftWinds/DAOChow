import { CalendarIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useDebugValue } from 'react'

const proposals = [
  {
    id: 1,
    CityState: 'Santa Barbara, CA',
    Road: 'Picasso Rd',
    closeDateFull: 'September 10th, 2022',
    cost: 300,  
    impact: 1000,
    imageUrl: 'https://images1.apartments.com/i2/TQj_6gsC8XV_rviAaQ6gi62Eb0qxFh1et5AACMODlIg/111/6694-picasso-rd-goleta-ca-primary-photo.jpg',
  },
  {
    id: 2,
    CityState: 'Chicago, IL',
    Road: 'N California Ave',
    closeDateFull: 'September 10th, 2022',
    cost: 400,
    impact: 2500,
    imageUrl: 'https://images1.loopnet.com/i2/mtAKiyXi7p6GSM4I-4rHq96xuWJY_c85Jl4C7dH6OEk/110/2020-N-California-Ave-Chicago-IL-Primary-Photo-1-Large.jpg',
  },
  {
    id: 3,
    CityState: 'Miami, FL',
    Road: 'NW 1st Ave',
    closeDateFull: 'September 10th, 2022',
    cost: 450,
    impact: 2000,
    imageUrl:
    'https://images1.apartments.com/i2/e60vkQudqQG9oMr7J5YhMd7iFA3lLHLAXbn-cW8fFjY/111/1000-nw-1st-ave-miami-fl-primary-photo.jpg',
  },
]

export default function Example() {
  return (
    <div className="w-2/3 mt-8 mx-auto overflow-hidden bg-white shadow sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {proposals.map((proposal) => (
          <li key={proposal.id}>
            <a href="#" className="block hover:bg-gray-50">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-start sm:justify-between m-4">
                  <div className="truncate">
                    <div className="flex text-sm">
                      <p className="truncate font-medium text-2xl text-indigo-600">{proposal.CityState}</p>
                      <p className="ml-1 flex-shrink-0 font-normal text-2xl text-gray-500">on {proposal.Road}</p>
                    </div>
                    <div className="mt-2 flex">
                      <div className="flex text-sm text-gray-500">
                        <CalendarIcon className="mt-1 mr-2 h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        <p className='text-2xl'>
                          Date Posted: <time dateTime={proposal.closeDate}>{proposal.closeDateFull}</time>
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 font-bold flex text-xl text-gray-500">
                        Number of people that will be impacted: <div className="ml-2 font-normal">{proposal.impact}</div>
                    </div>
                    <div className="mt-4 font-bold flex text-xl text-gray-500">
                        Cost: <div className="ml-2 font-normal">${proposal.cost}</div>
                      </div>
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
                  <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}