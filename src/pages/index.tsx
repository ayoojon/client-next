import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="py-14 min-h-screen sm:grid sm:items-center">
        <div>
          <h1 className="text-4xl md:text-5xl text-center font-medium mb-14 mt-20 sm:mt-0 md:font-normal md:mb-16">
            I am looking for
          </h1>
          <div className="max-w-2xl mx-auto flex justify-evenly flex-wrap">
            <div className="flex flex-col space-y-4 w-60">
              <Image
                height="200px"
                width="200px"
                src="/resources/landing/event.jpg"
                alt="Event thumbnail"
              />
              <h2 className="text-xl font-bold">Nearby Events</h2>
              <p>
                Spend a unforgettable holiday in the enchanting surroundings of
                the town of Cistercians reachable.
              </p>
              <Link href="/events">
                <a className="bg-primary text-white flex justify-between items-center py-2 px-8 rounded-md">
                  <span className="font-semibold">Explore</span>
                  <FiArrowRight />
                </a>
              </Link>
            </div>
            <div className="flex flex-col space-y-4 w-60">
              <Image
                height="200px"
                width="200px"
                src="/resources/landing/service.jpg"
                alt="Service thumbnail"
              />
              <h2 className="text-xl font-bold">Book A Service</h2>
              <p>
                Spend a unforgettable holiday in the enchanting surroundings of
                the town of Cistercians reachable.
              </p>
              <Link href="/home">
                <a className="bg-primary text-white flex justify-between items-center py-2 px-8 rounded-md">
                  <span className="font-semibold">Search</span>
                  <FiArrowRight />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-14 min-h-screen flex flex-col-reverse md:flex-row md:items-center md:justify-between md:space-x-8">
        <div className="md:w-1/2">
          <h1 className="max-w-xs text-3xl font-medium mb-4 md:mb-10 mt-20 md:mt-0 sm:text-4xl md:font-normal md:text-5xl">
            So much stuff, So little time
          </h1>
          <p className="max-w-lg text-xl">
            Spend a unforgettable holiday in the enchanting surroundings of the
            town of Cistercians (reachable from the near airports of Bari and
            Brindisi). Trulls Edeka offers a heaven of peace and tranquillity,
            set in an elevated position with a stunning view. It{`&apos`}s the
            perfect place if you like nature. You can stay
          </p>
        </div>
        <Image
          height="500px"
          width="600px"
          src="/resources/landing/so-much.png"
          alt="SoMuch thumbnail"
        />
      </div>
      <div className="py-14 min-h-screen flex flex-col justify-center">
        <h1 className="max-w-xs md:max-w-md text-3xl font-medium mb-4 md:mb-10 mt-20 md:mt-0 sm:text-4xl md:font-normal md:text-5xl">
          Create your service and open up your opportunity
        </h1>
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <Image
              height="500px"
              width="800px"
              src="/resources/landing/services.jpg"
              alt="SoMuch thumbnail"
            />
          </div>
          <div className="lg:col-span-1 lg:flex lg:flex-col lg:justify-between">
            <p className="max-w-lg text-xl">
              Spend a unforgettable holiday in the enchanting surroundings of
              the town of Cistercians (reachable from the near airports of Bari
              and Brindisi). Trulls Edeka offers a heaven of peace and
              tranquillity, set in an elevated position with a stunning view. It
              {`&apos`}s the perfect place if you like nature. You can stay
            </p>
            <div className="mt-8 lg:text-center">
              <Link href="/home">
                <a className="inline-block bg-primary text-white font-semibold py-3 px-14 rounded-full focus:outline-none">
                  Create My Service
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-14 min-h-screen flex flex-col justify-center">
        <h1 className="max-w-xs md:max-w-md text-3xl sm:text-4xl md:text-5xl font-medium md:font-normal mb-10 mt-20 md:mt-0">
          Everything you need to organize a better event
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-yellow-400 px-8 lg:px-10 py-10 md:py-12 lg:col-span-1">
            <h2 className="max-w-32 text-3xl mb-4">Overview</h2>
            <p className="text-lg">
              Spend a unforgettable holiday in the enchanting surroundings of
              the town of Cistercians (reachable from the near airports of Bari
              and Brindisi). Trulls Edeka offers a heaven of peace and
              tranquillity
            </p>
          </div>
          <div className="px-8 lg:px-10 py-10 md:py-12 lg:col-span-2">
            <h2 className="max-w-32 text-3xl mb-4">Ticket Buy/ Sell</h2>
            <p className="text-lg">
              Spend a unforgettable holiday in the enchanting surroundings of
              the town of Cistercians (reachable from the near airports of Bari
              and Brindisi). Trulls Edeka offers a heaven of peace and
              tranquillity, set in an elevated position with a stunning view. It
              {`&apos`}s the perfect place if you like nature. You can stay y
            </p>
          </div>
          <div className="bg-indigo-600 px-8 lg:px-10 py-10 md:py-12 lg:col-span-2 text-white">
            <h2 className="max-w-32 text-3xl mb-4">Online Booking</h2>
            <p className="text-lg">
              Spend a unforgettable holiday in the enchanting surroundings of
              the town of Cistercians (reachable from the near airports of Bari
              and Brindisi). Trulls Edeka offers a heaven of peace and
              tranquillity, set in
            </p>
          </div>
          <div
            className="bg-yellow-400 px-8 lg:px-10 py-10 md:py-12 lg:col-span-1 text-white"
            style={{ backgroundColor: "#050038" }}
          >
            <h2 className="max-w-32 text-3xl mb-4">Instant Message</h2>
            <p className="text-lg">
              Spend a unforgettable holiday in the enchanting surroundings of
              the town of Cistercians reachable from the near airports of Bari
              and
            </p>
          </div>
        </div>
      </div>
      <div className="py-14 min-h-screen flex flex-col justify-center">
        <h1 className="max-w-sm text-3xl font-medium mb-4 md:mb-10 mt-20 md:mt-0 sm:text-4xl md:font-normal md:text-5xl">
          We care for your business like the way you do
        </h1>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <p className="text-xl my-20">
            Spend a unforgettable holiday in the enchanting surroundings of the
            town of Cistercians (reachable from the near airports of Bari and
            Brindisi). Trulls Edeka offers a heaven of peace and tranquillity,
            set in an elevated position with a stunning view. It{`&apos`}s the
            perfect place if you like nature. You can stay
          </p>
          <Image
            height="480px"
            width="600px"
            className="lg:col-span-2"
            src="/resources/landing/business_care.jpg"
            alt="Business care thumbnail"
          />
        </div>
      </div>
      <div className="py-14 min-h-screen flex flex-col justify-center">
        <h1 className="max-w-xs md:max-w-md text-3xl sm:text-4xl md:text-5xl font-medium md:font-normal mb-10 mt-20 md:mt-0">
          But wait there is more
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-yellow-400 px-8 lg:px-10 py-10 md:py-12 lg:col-span-1">
            <h2 className="max-w-64 text-3xl mb-4">Invoice</h2>
            <p className="text-lg">
              Spend a unforgettable holiday in the enchanting surroundings of
              the town of Cistercians (reachable from the near airports of Bari
              and Brindisi). Trulls Edeka offers a heaven of peace and
              tranquillity
            </p>
          </div>
          <div
            className="px-8 lg:px-10 py-10 md:py-12 lg:col-span-2"
            style={{ backgroundColor: "#ED7078" }}
          >
            <h2 className="max-w-64 text-3xl mb-4">
              Make your data easy to understand
            </h2>
            <p className="text-lg">
              Spend a unforgettable holiday in the enchanting surroundings of
              the town of Cistercians (reachable from the near airports of Bari
              and Brindisi). Trulls Edeka offers a heaven of peace and
              tranquillity, set in an elevated position with a stunning view. It
              {`&apos`}s the perfect place if you like nature. You can stay y
            </p>
          </div>
          <div className="bg-indigo-600 px-8 lg:px-10 py-10 md:py-12 lg:col-span-2 text-white">
            <h2 className="max-w-64 text-3xl mb-4">
              Create your own Custom Booking
            </h2>
            <p className="text-lg">
              Spend a unforgettable holiday in the enchanting surroundings of
              the town of Cistercians (reachable from the near airports of Bari
              and Brindisi). Trulls Edeka offers a heaven of peace and
              tranquillity, set in
            </p>
          </div>
          <div
            className="bg-yellow-400 px-8 lg:px-10 py-10 md:py-12 lg:col-span-1 text-white"
            style={{ backgroundColor: "#050038" }}
          >
            <h2 className="max-w-64 text-3xl mb-4">Meet Your Expert</h2>
            <p className="text-lg">
              Spend a unforgettable holiday in the enchanting surroundings of
              the town of Cistercians reachable from the near airports of Bari
              and
            </p>
          </div>
        </div>
      </div>
      <div className="py-14 min-h-screen flex flex-col-reverse md:flex-row md:items-center md:justify-between md:space-x-8">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-medium mb-4 md:mb-10 mt-20 md:mt-0 sm:text-4xl md:font-normal md:text-5xl">
            Enterprise grad security and privacy
          </h1>
          <p className="max-w-lg text-xl">
            Spend a unforgettable holiday in the enchanting surroundings of the
            town of Cistercians (reachable from the near airports of Bari and
            Brindisi). Trulls Edeka offers a heaven of peace and tranquillity,
            set in an elevated position with a stunning view. It{`&apos`}s the
            perfect place if you like nature. You can stay
          </p>
        </div>
        <div className="text-center md:text-right mt-20 md:mt-0 md:w-1/2">
          <Image
            height="400px"
            width="400px"
            className="inline-block"
            src="/resources/landing/verified.png"
            alt="SoMuch thumbnail"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
