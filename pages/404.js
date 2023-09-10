import { Link } from '@components';
import { Footer, Header } from '@examples/components';

const Page = () => {
  return (
    <div>
      <Header />
      <div className="bg-overlay relative">
        <div className="bg-header"></div>
        <h2 className="absolute w-full flex-grow text-center text-3xl font-semibold text-white md:text-4xl">
          <span className="text-4xl">Error</span>
        </h2>
      </div>
      <div className="py-24">
        <div className="py-4">
          <h1 className="text-center text-4xl">
            We are sorry, <br></br> page not found.
          </h1>
        </div>
        <div className="flex justify-center py-4">
          <Link href="/">
            <a className="button full secondary hover-transition space-x-2 font-bold">
              <i className="fa fa-arrow-circle-left mr-1"></i>
              <span>Back to main page</span>
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
