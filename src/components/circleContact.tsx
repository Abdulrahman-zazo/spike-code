export default function CircleContact() {
  return (
    <>
      {/* Stripes illustration */}

      <div className="relative flex items-center justify-center w-full h-full ">
        <div className="absolute -z-0 w-96 h-96 border before:[border:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]  after:[border:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1] rounded-full   opacity-50 animate-spin-slow">
          <img
            src={
              "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937895/avatar-01_ku36iz.webp"
            }
            alt="Profile"
            className="absolute transform -translate-x-1/2 rounded-full -top-2 left-1/2 opacity-80 "
            width={25}
            height={25}
          />
        </div>
        <div className="absolute w-48 h-48 border rounded-full opacity-50 -z-0 border-gray-50 animate-spin-slow2">
          <img
            src={
              "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937892/avatar-05_jb7szv.webp"
            }
            alt="Profile"
            className="absolute transform -translate-x-1/2 rounded-full -top-2 left-1/2 "
            width={25}
            height={25}
          />
        </div>

        <div className="absolute -z-0  opacity-50 w-64 h-64 border before:[border:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]  after:[border:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]  rounded-full animate-spin-slow3">
          <img
            src={
              "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937890/avatar-02_s2k350.webp"
            }
            alt="Profile"
            className="absolute transform -translate-x-1/2 rounded-full -top-2 left-1/2 opacity-80 "
            width={25}
            height={25}
          />
        </div>

        <div className="absolute border border-gray-100 rounded-full opacity-50 -z-0 w-80 h-80 animate-spin-slow4">
          <img
            src={
              "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937889/avatar-03_hm6uwo.webp"
            }
            alt="Profile"
            className="absolute transform -translate-x-1/2 rounded-full -top-2 left-1/2 "
            width={25}
            height={25}
          />
        </div>
      </div>
    </>
  );
}
