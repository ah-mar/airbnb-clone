function Footer() {
  return (
    <footer className="bg-gray-100 mt-10 md:mt-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-32 py-14 text-gray-600 max-w-6xl sm:mx-auto">
        <div className="space-y-4 text-xs ">
          <h3 className="font-bold">Help Centre</h3>
          <a className="block hover:underline" href="#">
            AirCover
          </a>
          <a className="block hover:underline" href="#">
            Safety information
          </a>
          <a className="block hover:underline" href="#">
            Supporting people with disabilities
          </a>
          <a className="block hover:underline" href="#">
            Cancellation options
          </a>
          <a className="block hover:underline" href="#">
            Our COVID-19 Response
          </a>
          <a className="block hover:underline" href="#">
            Report a neighbourhood concern
          </a>
        </div>

        <div className="space-y-4 text-xs ">
          <h3 className="font-bold">Community</h3>
          <a className="block hover:underline" href="#">
            Airbnb.org: disaster relief housing
          </a>
          <a className="block hover:underline" href="#">
            Support Afghan refugees
          </a>
          <a className="block hover:underline" href="#">
            Combating discrimination
          </a>
        </div>

        <div className="space-y-4 text-xs ">
          <h3 className="font-bold">Hosting</h3>
          <a className="block hover:underline" href="#">
            Try hosting
          </a>
          <a className="block hover:underline" href="#">
            AirCover for Hosts
          </a>
          <a className="block hover:underline" href="#">
            Explore hosting resources
          </a>
          <a className="block hover:underline" href="#">
            Visit our community forum
          </a>
          <a className="block hover:underline" href="#">
            How to host responsibly
          </a>
        </div>
        <div className="space-y-4 text-xs ">
          <h3 className="font-bold">About</h3>
          <a className="block hover:underline" href="#">
            Newsroom
          </a>
          <a className="block hover:underline" href="#">
            Learn about new features
          </a>
          <a className="block hover:underline" href="#">
            Letter from our founders
          </a>
          <a className="block hover:underline" href="#">
            Careers
          </a>
          <a className="block hover:underline" href="#">
            Investors
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
