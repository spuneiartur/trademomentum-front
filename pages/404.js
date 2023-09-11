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
      <div className="flex flex-col items-center justify-center gap-5 py-24 ">
        <div className="">
          <h1 className="text-center text-4xl">
            We are sorry, <br></br> page not found.
          </h1>
        </div>
        <div className="h-auto w-[500px] ">
          <img src="/icons/error-404-page-not-found-page.jpg" alt="404 error icon" />
        </div>

        <div className="flex justify-center py-4">
          <Link href="/">
            <i className="fa fa-arrow-circle-left mr-1"></i>
            <span>Back to main page</span>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
