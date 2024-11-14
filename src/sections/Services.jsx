import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div>
      <section className="max-container flex flex-wrap justify-center gap-9">
        {services.map(service => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </section>
    </div>
  )
}

export default Services