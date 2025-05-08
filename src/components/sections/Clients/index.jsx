import { SectionContainer } from "@/components/Containers";
import { SectionTitle } from "@/components/Typography";
import ClientsMarquee from "@/components/sections/Clients/ClientsMarquee";

function Clients() {
  return (
    <SectionContainer className="mt-20 relative z-0">
      <SectionTitle className="my-4 md:my-8 px-4">
        Telah membantu
        <span className="text-blue-700"> 30+ Pesantren </span>
        di Indonesia
      </SectionTitle>
      <ClientsMarquee />
    </SectionContainer>
  );
}

export default Clients;
