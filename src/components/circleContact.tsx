export default function CircleContact() {
  return (
    <>
      {/* Stripes illustration */}

      <div className="relative w-full h-full flex items-center justify-center ">
        <div className="absolute -z-0 w-96 h-96 border before:[border:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]  after:[border:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1] rounded-full   opacity-50 animate-spin-slow">
          <img
            src={
              "https://blogsbackend.spikecode.net/website/img/avatar-05.webp"
            }
            alt="Profile"
            className="absolute -top-2 left-1/2 transform -translate-x-1/2 rounded-full opacity-80 "
            width={25}
            height={25}
          />
        </div>
        <div className="absolute  -z-0 w-48 h-48 border border-gray-50 rounded-full animate-spin-slow2 opacity-50">
          <img
            src={
              "https://blogsbackend.spikecode.net/website/img/avatar-04.webp"
            }
            alt="Profile"
            className="absolute -top-2 left-1/2 transform -translate-x-1/2 rounded-full  "
            width={25}
            height={25}
          />
        </div>

        <div className="absolute -z-0  opacity-50 w-64 h-64 border before:[border:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]  after:[border:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]  rounded-full animate-spin-slow3">
          <img
            src={
              "https://blogsbackend.spikecode.net/website/img/avatar-02.webp"
            }
            alt="Profile"
            className="absolute -top-2 left-1/2 transform -translate-x-1/2 rounded-full opacity-80 "
            width={25}
            height={25}
          />
        </div>

        <div className="absolute -z-0  w-80 h-80 border border-gray-100 rounded-full animate-spin-slow4   opacity-50">
          <img
            src={
              "https://blogsbackend.spikecode.net/website/img/avatar-03.webp"
            }
            alt="Profile"
            className="absolute -top-2 left-1/2 transform -translate-x-1/2 rounded-full "
            width={25}
            height={25}
          />
        </div>
      </div>
    </>
  );
}
