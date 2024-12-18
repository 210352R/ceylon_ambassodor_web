import React from "react";

const LatestNewsComponent = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-customBlue mb-10 font-MontserratSemiBold">
          Latest News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* News Card 1 */}
          <div className="flex flex-col">
            {/* Placeholder for News Image */}
            <div className="bg-gray-300 h-64 mb-4"></div>

            {/* Date and Divider */}
            <div className="flex items-center justify-center mt-4 lg:items-start mb-2">
              <div className="flex flex-col items-center">
                {" "}
                {/* Modified */}
                <div className="text-4xl font-bold text-customBlue font-MontserratSemiBold">
                  09
                </div>
                <div className="text-sm text-customBlue font-Montserrat">
                  Aug
                </div>
              </div>
              <div className="border-l-4 border-customBlue ml-4 h-full"></div>

              <div className="ml-4 font-Montserrat">
                <h3 className="text-lg font-semibold text-customBlue mb-2">
                  Your Global Logistics <br /> Partner for Seamless
                </h3>

                {/* News Description */}
                <p className="text-sm text-customBlue mb-4 text-justify">
                  UFS is a leader in logistics and supply chain management,
                  offering a full suite of services including air, sea, and
                  inland freight,
                </p>

                {/* View More Button */}
                <div className="flex items-center">
                  <a
                    href="#"
                    className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg transition-all duration-300 cursor-pointer"
                  >
                    {/* Circle with Plus Icon */}
                    <div className="flex justify-center items-center w-10 h-10 bg-orange-300 rounded-full transition-transform duration-300 hover:scale-110">
                      <svg
                        className="w-5 h-5 text-customBlue"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="4"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                    <div className="text-customBlue font-kollektif">
                      <p className="font-medium">View more</p>
                      <p>about our services</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* News Card 2 */}
          <div className="flex flex-col">
            {/* Placeholder for News Image */}
            <div className="bg-gray-300 h-64 mb-4"></div>

            {/* Date and Divider */}
            <div className="flex items-center mt-4  lg:items-start justify-center mb-2">
              <div className="flex flex-col items-center">
                {" "}
                {/* Modified */}
                <div className="text-4xl font-bold text-customBlue font-MontserratSemiBold">
                  09
                </div>
                <div className="text-sm text-customBlue font-Montserrat">
                  Aug
                </div>
              </div>
              <div className="border-l-4 border-customBlue ml-4 h-full"></div>

              <div className="ml-4 font-Montserrat">
                <h3 className="text-lg font-semibold text-customBlue mb-2">
                  Your Global Logistics <br /> Partner for Seamless
                </h3>

                {/* News Description */}
                <p className="text-sm text-customBlue mb-4 text-justify">
                  UFS is a leader in logistics and supply chain management,
                  offering a full suite of services including air, sea, and
                  inland freight,
                </p>

                {/* View More Button */}
                <div className="flex items-center">
                  <a
                    href="#"
                    className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg transition-all duration-300 cursor-pointer"
                  >
                    {/* Circle with Plus Icon */}
                    <div className="flex justify-center items-center w-10 h-10 bg-orange-300 rounded-full transition-transform duration-300 hover:scale-110">
                      <svg
                        className="w-5 h-5 text-customBlue"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="4"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                    <div className="text-customBlue font-kollektif">
                      <p className="font-medium">View more</p>
                      <p>about our services</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* News Card 3 */}
          <div className="flex flex-col">
            {/* Placeholder for News Image */}
            <div className="bg-gray-300 h-64 mb-4"></div>

            {/* Date and Divider */}
            <div className="flex items-center mt-4  lg:items-start justify-center mb-2">
              <div className="flex flex-col items-center lg:items-start">
                {" "}
                {/* Modified */}
                <div className="text-4xl font-bold text-customBlue font-MontserratSemiBold">
                  09
                </div>
                <div className="text-sm text-customBlue font-Montserrat">
                  Aug
                </div>
              </div>
              <div className="border-l-4 border-customBlue ml-4 h-full"></div>

              <div className="ml-4 font-Montserrat">
                <h3 className="text-lg font-semibold text-customBlue mb-2">
                  Your Global Logistics <br /> Partner for Seamless
                </h3>

                {/* News Description */}
                <p className="text-sm text-customBlue mb-4 text-justify ">
                  UFS is a leader in logistics and supply chain management,
                  offering a full suite of services including air, sea, and
                  inland freight,
                </p>

                {/* View More Button */}
                <div className="flex items-center">
                  <a
                    href="#"
                    className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg transition-all duration-300 cursor-pointer"
                  >
                    {/* Circle with Plus Icon */}
                    <div className="flex justify-center items-center w-10 h-10 bg-orange-300 rounded-full transition-transform duration-300 hover:scale-110">
                      <svg
                        className="w-5 h-5 text-customBlue"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="4"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                    <div className="text-customBlue font-kollektif">
                      <p className="font-medium">View more</p>
                      <p>about our services</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsComponent;
