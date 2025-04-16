/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from "react";
import CardClients from "./CardClients";

function ClientsSlideWrapper({ clients }) {
  return (
    <section className="flex flex-col items-center justify-center h-full w-full gap-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
        {clients &&
          clients.map((client, i) => {
            if (i <= 1) {
              return (
                <CardClients key={client.name} imgUrl={client.logo}>
                  {client.name}
                </CardClients>
              );
            }
          })}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
        {clients &&
          clients.map((client, i) => {
            if (i >= 2) {
              return (
                <CardClients key={client.name} imgUrl={client.logo}>
                  {client.name}
                </CardClients>
              );
            }
          })}
      </div>
    </section>
  );
}

export default ClientsSlideWrapper;
