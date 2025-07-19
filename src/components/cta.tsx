interface Color {
  bg: string;
}
const Cta = ({ bg }: Color) => {
  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6 ">
        <div
          className={`relative overflow-hidden rounded-2xl text-center shadow-md before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:${bg}`}
        >
          {/* Glow */}
          <div className="absolute bottom-0 -translate-x-1/2 translate-y-1/2 left-1/2 -z-10">
            <div className="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl" />
          </div>
          {/* Stripes illustration */}
          <div className="absolute top-0 transform -translate-x-1/2 pointer-events-none left-1/2 -z-10">
            {/* <img
              className="max-w-none"
              src={
                " https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937910/stripes-dark_wjrxoy.svg"
              }
              width={768}
              height={432}
              alt="Stripes"
            /> */}
          </div>
          {/* <ContactForm /> */}
        </div>
      </div>
    </section>
  );
};
export default Cta;
