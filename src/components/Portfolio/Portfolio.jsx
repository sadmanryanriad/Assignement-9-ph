import Marquee from "react-fast-marquee";
import PortfolioPhoto from "./PortfolioPhoto";


const Portfolio = () => {

    const images = [
        'https://i.ibb.co/4Fz1C0f/carousel6.jpg',
        'https://i.ibb.co/1TRnzSy/carousel2.jpg',
        'https://i.ibb.co/86S7TSS/carousel1.jpg',
        'https://i.ibb.co/bPCwmXp/carousel3.jpg',
        'https://i.ibb.co/cbqTkWq/carousel4.jpg',
        'https://i.ibb.co/NjdL79Q/carousel5.jpg',
        
    ]

  return (
    <div>
      <section className="text-neutral-700 dark:text-neutral-300 w-full">
        <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
          <h3 className="mb-6 text-3xl font-bold">Explore Our Portfolio</h3>
          <p className="mb-6 pb-2 md:mb-12 md:pb-0">
            Take a glimpse into the stunning events weve crafted for our
            clients. Each event tells a unique story, and were proud to share
            our portfolio of exceptional moments.
          </p>
        </div>

        {/* <Marquee speed='150'>
    <div className="mx-1 "><PortfolioPhoto></PortfolioPhoto></div>
    <div className="mx-1 "><PortfolioPhoto></PortfolioPhoto></div>
    <div className="mx-1 "><PortfolioPhoto></PortfolioPhoto></div>
  </Marquee> */}

         <Marquee speed='150'>
    {images.map(img=> <PortfolioPhoto key={img} image={img}></PortfolioPhoto>)}
  </Marquee> 



      <div className="w-full flex justify-end"><button className="btn btn-warning btn-sm hover:bg-success mb-10 mt-5">Go to Gallery</button></div>
      </section>
    </div>
  );
};

export default Portfolio;
