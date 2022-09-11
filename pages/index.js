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

const locations = {
  features: [
    {
      type: "Feature",
      properties: {
        title: "Isla Vista, CA",
        imageUrl:
          "https://dailynexus.s3.us-west-1.amazonaws.com/dailynexus/wp-content/uploads/2021/08/26165320/IMG_3445-1024x683.jpg",
        food: [
          {
            name: "salmon",
            quantity: 3,
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS649ljkRapPb9eqoFGEKa67qXXjEcNs_-Ou6NyNpoVl7ve4gwbGvxVJv-isty-GChp1HA&usqp=CAU",
          },
          {
            name: "poultry",
            quantity: 8,
            imageUrl:
              "https://media.istockphoto.com/photos/fresh-raw-chicken-picture-id1282866808?k=20&m=1282866808&s=170667a&w=0&h=hilUQUQHMS4S5pFyLo-yz34py0nwoUq05WgwUUZ2xaY=",
          },
          {
            name: "banana",
            quantity: 1,
            imageUrl: "https://images.heb.com/is/image/HEBGrocery/000377497",
          },
          {
            name: "peanuts",
            quantity: 9,
            imageUrl:
              "https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/4015_Jumbo+Roasted+P-uon1J4CC-zoom.jpg",
          },
          {
            name: "apple",
            quantity: 6,
            imageUrl:
              "https://i5.walmartimages.ca/images/Enlarge/094/514/6000200094514.jpg",
          },
          {
            name: "broccoli",
            quantity: 5,
            imageUrl:
              "https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg",
          },
          {
            name: "grapes",
            quantity: 3,
            imageUrl:
              "https://images.albertsons-media.com/is/image/ABS/184100012?$ng-ecom-pdp-desktop$&defaultImage=Not_Available",
          },
          {
            name: "cheese",
            quantity: 13,
            imageUrl:
              "https://cdn.britannica.com/60/217660-050-DBCC409A/cheddar-cheese-wedge.jpg",
          },
        ],
      },
      geometry: {
        coordinates: [-119.85897295511914, 34.415143997683394],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        title: "Oakland, CA",
        imageUrl:
          "https://cdn.discordapp.com/attachments/766168252056338442/1018387213647609856/unknown.png",
        food: [
          {
            name: "carrot",
            quantity: 31,
            imageUrl:
              "https://www.euroharvest.co.uk/wp-content/uploads/2020/07/carrots_.png",
          },
          {
            name: "poultry",
            quantity: 10,
            imageUrl:
              "https://media.istockphoto.com/photos/fresh-raw-chicken-picture-id1282866808?k=20&m=1282866808&s=170667a&w=0&h=hilUQUQHMS4S5pFyLo-yz34py0nwoUq05WgwUUZ2xaY=",
          },
          {
            name: "kale",
            quantity: 7,
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxAMM2ywgvaGIZcC1TqqVQyfHz4LRzCDpDX30zmUZOD5dCwyZ6hD4EolqW5NadmWRVku4&usqp=CAU",
          },
          {
            name: "banana",
            quantity: 4,
            imageUrl: "https://images.heb.com/is/image/HEBGrocery/000377497",
          },
          {
            name: "kiwi",
            quantity: 20,
            imageUrl:
              "https://media.healthyfood.com/wp-content/uploads/2017/03/Ask-the-experts-Kiwifruit.jpg",
          },
          {
            name: "broccoli",
            quantity: 15,
            imageUrl:
              "https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg",
          },
          {
            name: "grapes",
            quantity: 12,
            imageUrl:
              "https://images.albertsons-media.com/is/image/ABS/184100012?$ng-ecom-pdp-desktop$&defaultImage=Not_Available",
          },
          {
            name: "cheese",
            quantity: 1,
            imageUrl:
              "https://cdn.britannica.com/60/217660-050-DBCC409A/cheddar-cheese-wedge.jpg",
          },
        ],
      },
      geometry: {
        coordinates: [-122.27244577304657, 37.8049573528661],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        title: "Los Angeles, CA",
        imageUrl:
          "https://wpcdn.us-east-1.vip.tn-cloud.net/www.sactownmag.com/content/uploads/2020/10/121610343_2690149421252095_9180172192574381574_n.jpg",
      },
      geometry: {
        coordinates: [-118.24354695451103, 34.05244298548162],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        title: "Lower Manhattan, NY",
        imageUrl:
          "https://cdn.vox-cdn.com/thumbor/tumeGS3tyTzkvlNyQHLk-k98F0s=/0x457:4032x2568/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21927384/IMG_1568.jpg",
      },
      geometry: {
        coordinates: [-73.9818055594482, 40.72646200200845],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        title: "Miami, FL",
      },
      geometry: {
        coordinates: [-80.19604743738999, 25.775976998165707],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        title: "Dallas City, TX",
      },
      geometry: {
        coordinates: [-96.79743906160773, 32.77744363711109],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        title: "Denver, CO",
      },
      geometry: {
        coordinates: [-104.98752648208819, 39.738544116121176],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        title: "Chicago, IL",
      },
      geometry: {
        coordinates: [-87.69718852518804, 41.9033605869435],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        title: "Nashville, TN",
      },
      geometry: {
        coordinates: [-86.78166875632597, 36.162839200942756],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        title: "Raleigh, NC",
      },
      geometry: {
        coordinates: [-78.63632373575874, 35.778131223351224],
        type: "Point",
      },
    },
  ],
  type: "FeatureCollection",
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
        <link rel="icon" href="/favicon.ico" />
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
