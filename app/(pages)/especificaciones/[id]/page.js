import { Footer } from "@/components/home/Footer";
import { EspecificacionesMinca } from "@/components/especificaciones-component/EspecificacionesMinca";
import { HeroContext } from "@/components/reusable/HeroContext";
import { HeroVideoSingleProduct } from "@/components/reusable/HeroVideoSingleProduct";
import { PuedeInteresarte } from "@/components/sigle-product/PuedeInteresarte";
import { CarruselAccesorios } from "@/components/carruseles/accesorios/CarruselAccesorios";
import { SingleProductosWoocommerce } from "@/lib/graphQLRequest";

const Especificaciones = async ({ params }) => {
  const { id } = params;

  const scooters = await SingleProductosWoocommerce(decodeURIComponent(id));

  return (
    <div className="Especificaciones">
      <HeroContext titulo="MINCA" tituloNegrita="SCOOTERS" />
      <EspecificacionesMinca scooters={scooters} />
      <HeroVideoSingleProduct
        titulo="MINCA"
        tituloSecundarioNegrita="Scooters"
        urlVideo="https://test.mincaelectric.com/wp-content/uploads/2024/03/Minca-Electric-Carro-o-Scooter_.mp4"
      />
      <PuedeInteresarte />
      <hr className="border-1 hidden lg:m-auto lg:block lg:w-[90%]"></hr>
      <br></br>
      <br></br>
      <CarruselAccesorios />
      <Footer />
    </div>
  );
};

export default Especificaciones;
