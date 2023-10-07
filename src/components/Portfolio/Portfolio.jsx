const Portfolio = () => {
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

        <div className="carousel w-full h-[300px] md:h-[600px]">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/bPCwmXp/carousel3.jpg"
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/cbqTkWq/carousel4.jpg"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/NjdL79Q/carousel5.jpg"
              className="w-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/1TRnzSy/carousel2.jpg"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      <div className="w-full flex justify-end"><button className="btn btn-warning btn-sm hover:bg-success mb-10">Go to Gallery</button></div>
      </section>
    </div>
  );
};

export default Portfolio;
