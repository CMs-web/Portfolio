

const Projects = () => {
    return (
      <section className="overflow-auto w-[100%]">
        <main className="max-w-4xl mx-auto py-20 px-4 md:px-10">
          <span className="text-4xl">⚡</span>
          <h1 className="__className_399708 text-base md:text-xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-black mb-10">
            {" "}
            What I&apos;ve been working on
          </h1>

          <div className="grid grid-cols-1  gap-10">
            <div>
              <a
                target="_blank"
                className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4"
                href="https://crypto-mania-with-redux.vercel.app/"
              >
                <img
                  className="w-44 h-40 object-contain"
                  src="../public/Cryptoapp.png"
                  alt="cryptoapp"
                />

                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="__className_399708 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-black text-lg md:text-lg lg:text-lg">
                      Crypto Tracking
                    </h4>
                    <p className="font-normal text-secondary text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                      A Crypto app tracking current crypto prices.
                    </p>
                  </div>
                  <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
                    <span className="text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary">
                      React js
                    </span>
                    <span className="text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary">
                      Tailwindcss
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <a
              target="_blank"
              className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4"
              href="https://expense-manager-livid.vercel.app/"
            >
              <img
                className="w-44 h-40 object-cover"
                src="../public/expanseManager.png"
                alt=""
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="__className_399708 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-black text-lg md:text-lg lg:text-lg">
                    Expanse Manager
                  </h4>
                  <p className="font-normal text-secondary text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    Don&apos;t remember your Expense so far, here&apos;s your
                    manager to track your expanses
                  </p>
                </div>
                <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
                  <span className="text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary">
                    React js
                  </span>
                  <span className="text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary">
                    Tailwindcss
                  </span>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4"
              href="https://bankist-app-umber.vercel.app/"
            >
              <img
                className="w-48 h-40 object-cover"
                src="../public/bankist.png"
                alt=""
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="__className_399708 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-black text-lg md:text-lg lg:text-lg">
                    Banking App
                  </h4>
                  <p className="font-normal text-secondary text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    Your trusted Banking app
                  </p>
                </div>
                <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
                  <span className="text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary">
                    vanilla js
                  </span>
                  <span className="text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary">
                    css
                  </span>
                </div>
              </div>
            </a>
          </div>
        </main>
      </section>
    );
}

export default Projects
