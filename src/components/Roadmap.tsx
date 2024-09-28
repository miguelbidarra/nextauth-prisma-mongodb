import React from "react";

const Roadmap = () => {
  return (
    <>
      {/* Features Section */}
      <section className="text-foreground body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-4xl text-4xl font-bold text-center title-font text-text mb-2">
              How it works?
            </h1>
            <div className="flex mt-4 justify-center">
              <div className="w-60 h-1 rounded-full bg-primary inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center mx-auto">
              <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-secondary text-primary mb-5 flex-shrink-0">
                <span className="text-4xl font-bold">1</span>
              </div>
              <div className="flex-grow">
                <h1 className="text-foreground text-xl title-font font-medium mb-3">
                  Choose a bike and schedule a meeting
                </h1>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center mx-auto">
              <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-secondary text-primary mb-5 flex-shrink-0">
                <span className="text-4xl font-bold">2</span>
              </div>
              <div className="flex-grow">
                <h1 className="text-foreground text-xl title-font font-medium mb-3">
                  Ride your bike until you no longer need it
                </h1>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center mx-auto">
              <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-secondary text-primary mb-5 flex-shrink-0">
                <span className="text-4xl font-bold">3</span>
              </div>
              <div className="flex-grow">
                <h1 className="text-foreground text-xl title-font font-medium mb-3">
                  Return the bike for the next person to use
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;