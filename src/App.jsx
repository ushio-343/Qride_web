import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import MockupLogo from '/MockupLogo.svg';
import MockupPhone from '/MockupPhone.svg';

function App() {
  return (
    <div className="container-full bg-[#070707] h-screen">
      <header className="bg-transparent-700 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={MockupLogo}
              alt="QR Logo"
              className="h-12 w-12   mr-3"
            />
            <h1 className="text-white text-xl font-bold">Qride</h1>
          </div>

        </div>
      </header>
      <section className="flex flex-col md:flex-row items-center justify-center space-y-10">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4 h-full space-y-10">
          <h1 className="text-white text-3xl font-bold mb">Descarga Nuestra App!!!</h1>

          <img
            src={MockupLogo}
            alt="QR"
            className="h-60 w-60 "
          />
          <div className='space-x-5'>
            <a
              href="https://play.google.com/store"
              className="bg-gray-700 text-white font-bold py-3 px-4 rounded-2xl inline-flex items-center hover:bg-blue-700"
            >
              Google play<FaGooglePlay className="ml-2" />
            </a>
            <a
              href="https://play.google.com/store"
              className="bg-gray-700 text-white font-bold py-3 px-4 rounded-2xl inline-flex items-center hover:bg-blue-700"
            >
              Apps store <FaAppStoreIos className="ml-2" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end w-full md:w-1/2 p-4 h-full">
          <img src={MockupPhone} alt="Mockup" className="" />
        </div>
      </section>
    </div>
  );
}

export default App;
