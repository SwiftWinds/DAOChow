import Head from "next/head";

import GoogleMapReact from 'google-map-react';

const Marker = () => {
  return <>
    <div onClick={() => console.log("clicked")} className="pin cursor-pointer"></div>
    <div className="pulse"></div>
  </>
}

const locations = {
  "features": [
    {
      "type": "Feature",
      "properties": {
        "title": "Isla Vista, CA"
      },
      "geometry": {
        "coordinates": [-119.85897295511914, 34.415143997683394],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Oakland, CA"
      },
      "geometry": {
        "coordinates": [-122.27244577304657, 37.8049573528661],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Los Angeles, CA"
      },
      "geometry": {
        "coordinates": [-118.24354695451103, 34.05244298548162],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Lower Manhattan, NY"
      },
      "geometry": {
        "coordinates": [-73.9818055594482, 40.72646200200845],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Miami, FL"
      },
      "geometry": {
        "coordinates": [-80.19604743738999, 25.775976998165707],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Dallas City, TX"
      },
      "geometry": {
        "coordinates": [-96.79743906160773, 32.77744363711109],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Denver, CO"
      },
      "geometry": {
        "coordinates": [-104.98752648208819, 39.738544116121176],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Chicago, IL"
      },
      "geometry": {
        "coordinates": [-87.69718852518804, 41.9033605869435],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Nashville, TN"
      },
      "geometry": {
        "coordinates": [-86.78166875632597, 36.162839200942756],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Raleigh, NC"
      },
      "geometry": {
        "coordinates": [-78.63632373575874, 35.778131223351224],
        "type": "Point"
      }
    }
  ],
  "type": "FeatureCollection"
};

export default function Home() {
  const defaultProps = {
    center: {
      lat: 59.955413, 
      lng: 30.337844
    },
    zoom: 15
  };

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

      <div className="min-h-full">
        <div className="py-10">
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div style={{ height: "100vh", width: "100%" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "AIzaSyDEvHH5eEFNAFSSN8mdlbk7Qs5Pk58o1T4" }}
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
                  />))}
                </GoogleMapReact>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
