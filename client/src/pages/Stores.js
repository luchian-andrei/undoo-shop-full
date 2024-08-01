import React from "react";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import StoresCard from "../components/Cards/StoresCard";

const Stores = () => {
  const positionRomania = { lat: 45.64, lng: 25.59 };
  const positionHerastrau = { lat: 44.47, lng: 26.08 };
  const positionTabacarie = { lat: 44.21, lng: 28.63 };
  const positionCopou = { lat: 47.17, lng: 27.56 };

  const [openInfoHerastrau, setOpenInfoHerastrau] = useState(false);
  const [openInfoTabacarie, setOpenInfoTabacarie] = useState(false);
  const [openInfoCopou, setOpenInfoCopou] = useState(false);

  return (
    <section className=" w-full flex overflow-x-hidden flex-col text-center mt-20">
      <p className="text-3xl font-bold my-10">
        Pay us a visit in one of our physical stores !
      </p>
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StoresCard
          name="Magazin Constanta"
          location="Alexandru Lapuseanu nr. 134"
          program="08:00 - 20:00"
          handleClick={() => setOpenInfoTabacarie(!openInfoTabacarie)}
        />
        <StoresCard
          name="Magazin Bucuresti"
          location="Pavel D. Kiseleff nr. 32"
          program="08:00 - 20:00"
          handleClick={() => setOpenInfoHerastrau(!openInfoHerastrau)}
        />
        <StoresCard
          name="Magazin Iasi"
          location="Carol I nr. 31"
          program="08:00 - 20:00"
          handleClick={() => setOpenInfoCopou(!openInfoCopou)}
        />
      </section>
      <section className="mx-auto my-10">
        <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
          <Map
            defaultZoom={7}
            defaultCenter={positionRomania}
            mapId={process.env.REACT_APP_GOOGLE_MAPS_VECTOR_ID}
            gestureHandling={"greedy"}
            style={{ width: "80vw", height: "70vh" }}
          >
            <AdvancedMarker
              position={positionHerastrau}
              onClick={() => setOpenInfoHerastrau(true)}
            >
              <Pin background={"red"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker
              position={positionTabacarie}
              onClick={() => setOpenInfoTabacarie(true)}
            >
              <Pin background={"red"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker
              position={positionCopou}
              onClick={() => setOpenInfoCopou(true)}
            >
              <Pin background={"red"} glyphColor={"white"} />
            </AdvancedMarker>
            {openInfoTabacarie && (
              <InfoWindow
                position={positionTabacarie}
                onCloseClick={() => setOpenInfoHerastrau(false)}
              >
                You can visit us here
              </InfoWindow>
            )}
            {openInfoHerastrau && (
              <InfoWindow
                position={positionHerastrau}
                onCloseClick={() => setOpenInfoTabacarie(false)}
              >
                Or you can visit us here
              </InfoWindow>
            )}
            {openInfoCopou && (
              <InfoWindow
                position={positionCopou}
                onCloseClick={() => setOpenInfoCopou(false)}
              >
                You can also visit us here
              </InfoWindow>
            )}
          </Map>
        </APIProvider>
      </section>
    </section>
  );
};

export default Stores;
