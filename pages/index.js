import { useState } from "react";

import Head from "next/head";

import GoogleMapReact from "google-map-react";

const Marker = ({ onClick }) => {
  return (
    <>
      <div onClick={onClick} className="pin cursor-pointer"></div>
      <div className="pulse"></div>
    </>
  );
};

export default function Home() {
  const defaultProps = {
    center: {
      lat: 40.517994,
      lng: -100.711058,
    },
    zoom: 4,
  };

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [query, setQuery] = useState("");

  return (
    <div>
      <Head>
        <title>DAOchow</title>
        <meta
          name="description"
          content="Using innovative blockchain technologies to provide healthy food for those in need"
        />
        <link rel="icon" href="/ramen.png" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <div className="min-h-full bg-gray-100">
        <div className="py-10">
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex justify-between">
              {selectedLocation && (
                <div className="w-7xl max-h-screen overflow-scroll rounded-lg bg-white shadow w-[38%]">
                  <img
                    className="h-60 w-full object-cover"
                    src={selectedLocation?.properties?.imageUrl}
                  />
                  <div className="px-4 py-5 sm:p-6 ">
                    <div className="text-center m-2 text-2xl font-semibold">
                      {selectedLocation?.properties?.title}
                    </div>
                    <div>
                      <div className="py-4 relative mt-1 flex items-center">
                        <input
                          type="text"
                          name="search"
                          onChange={(e) => setQuery(e.target.value)}
                          value={query}
                          id="search"
                          placeholder="Search food"
                          className="block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                          <svg
                            class="pointer-events-none absolute top-6 right-2 h-6 w-6 fill-slate-400"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedLocation?.properties?.food
                        ?.filter((item) =>
                          item.name.toLowerCase().includes(query.toLowerCase())
                        )
                        ?.map((item) =>
                          item.quantity > 0 ? (
                            <div
                              key={item.name}
                              className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-gray-400"
                            >
                              <div className="flex-shrink-0">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={item.imageUrl}
                                  alt=""
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="truncate text-sm text-gray-500">
                                  x{item.quantity}
                                </p>
                              </div>

                              <button
                                type="button"
                                onClick={() =>
                                  setSelectedLocation({
                                    ...selectedLocation,
                                    properties: {
                                      ...selectedLocation.properties,
                                      food: selectedLocation.properties.food.map(
                                        (foodItem) =>
                                          foodItem.name === item.name
                                            ? {
                                                ...foodItem,
                                                quantity: foodItem.quantity - 1,
                                              }
                                            : foodItem
                                      ),
                                    },
                                  })
                                }
                                className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              >
                                Take
                              </button>
                            </div>
                          ) : null
                        )}
                    </div>
                  </div>
                </div>
              )}
              <div
                style={{
                  height: "100vh",
                  width: selectedLocation ? "60%" : "100%",
                }}
              >
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyDEvHH5eEFNAFSSN8mdlbk7Qs5Pk58o1T4",
                  }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                >
                  {locations.features.map((location) => (
                    <Marker
                      key={location.properties.title}
                      lat={location.geometry.coordinates[1]}
                      lng={location.geometry.coordinates[0]}
                      onClick={() => {
                        setSelectedLocation(location);
                      }}
                    />
                  ))}
                </GoogleMapReact>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
