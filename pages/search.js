import { format } from "date-fns";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Infocard from "../components/Infocard";
import MapApp from "../components/MapApp";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, guests, startDate, endDate } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate}- ${formattedEndDate}`;

  return (
    <div className="relative">
      <Header placeholder={`${location} | ${range} | ${guests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays -{range} for {guests} {guests == 1 ? "guest" : "guests"}
          </p>
          <h1 className=" text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex gap-3 text-gray-800 whitespace-nowrap">
            <button className="filter">Cancellation Flexibility</button>
            <button className="filter">Type of Place</button>
            <button className="filter">Price</button>
            <button className="filter">Rooms and Beds</button>
            <button className="filter">More Filters</button>
          </div>
          <div className="flex flex-col">
            {searchResults.map((item) => (
              <Infocard key={item.title} roomData={item} />
            ))}
          </div>
        </section>
        <section className=" hidden xl:block min-w-[600px]">
          <MapApp searchResults={searchResults}/>
        </section>
      </main>

      <Footer />
    </div>
  );
}
export default Search;

export async function getServerSideProps(context) {
  const response = await fetch("https://jsonkeeper.com/b/5NPS");
  const searchResults = await response.json();

  return {
    props: {
      searchResults,
    },
  };
}
