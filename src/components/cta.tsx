import ContactForm from "./ContactForm";
interface Color {
  bg: string;
}
const Cta = ({ bg }: Color) => {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 [&:lang(en)]:font-inter [&:lang(ar)]:font-almarai">
        <div
          className={`relative overflow-hidden rounded-2xl text-center shadow-md before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:${bg}`}
          data-aos="zoom-y-out"
        >
          {/* Glow */}
          <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2">
            <div className="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl" />
          </div>
          {/* Stripes illustration */}
          <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform">
            <img
              className="max-w-none"
              src={
                "https://blogsbackend.spikecode.net/website/img/stripes-dark.svg"
              }
              width={768}
              height={432}
              alt="Stripes"
            />
          </div>
          <ContactForm color="white" />
        </div>
      </div>
    </section>
  );
};
export default Cta;
