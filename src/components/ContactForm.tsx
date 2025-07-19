import { useState } from "react";
import axios from "axios";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { Loader, Mail } from "lucide-react";

const ContactForm = (color?: string) => {
  const init_form_data = {
    user_name: "",
    phone: "",
    email: "",
    message: "",
  };
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loading, setloading] = useState(false);
  const [data, setData] = useState(init_form_data);
  const { t, i18n } = useTranslation();

  const [errors, setErrors] = useState({});

  const handleSubmit = async () => {
    setloading(true); // Start loading
    console.log(errors);
    try {
      const res = await axios.post(
        "https://blogsbackend.spikecode.net/api/send-mail",
        {
          lang: i18n.language,
          ...data,
        }
      );
      console.log(res);

      setloading(false); // Stop loading after the request completes
      setIsDialogOpen(true); // Open the dialog for success
      // Optionally reset form or handle success
    } catch (error) {
      setloading(false); // Ensure loading is stopped on error

      if (axios.isAxiosError(error) && error.response) {
        console.log(error.response.data); // Log error response
        const errorData = error.response.data;
        setErrors(errorData.errors || []); // Default to an empty array if errors are not present
      } else {
        console.error("An unexpected error occurred:", error);
        alert("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="px-4 py-8 md:px-12 md:py-14">
      <h2
        className={`mb-2 border-y text-3xl font-bold ${
          color === "dark" ? "text-gray-900" : "text-gray-200"
        } [border-image:linear-gradient(to_right,transparent,theme(colors.slate.600/.7),transparent)1] md:mb-2 md:text-4xl`}
      >
        {t("contactComponent.getinTouch")}
      </h2>
      <p
        className={`*:text-xl font-medium ${
          color === "dark" ? "text-gray-800" : "text-gray-400"
        } md:text-base px-5`}
      >
        {t("contactComponent.text")}
      </p>
      <form
        onSubmit={handleSubmit}
        className="[&:lang(en)]:text-left [&:lang(ar)]:text-right "
      >
        <div className="space-y-12 ">
          <div className="pb-6 border-b border-gray-200">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mx-auto sm:w-1/2 max-[600px]:w-full  max-[600px]:mx-auto">
              <div className="sm:col-span-3">
                <label
                  htmlFor="user_name"
                  className={`block text-sm font-medium leading-6 ${
                    color === "dark" ? "text-gray-900" : "text-gray-50"
                  }`}
                >
                  {t("contactComponent.fullname")}
                </label>
                <div className="mt-2">
                  <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    onChange={(e) =>
                      setData({ ...data, user_name: e.target.value })
                    }
                    autoComplete="given-name"
                    placeholder={t("form.user_name")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-blue-500 sm:text-sm sm:leading-6 placeholder:text-xs"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="phone"
                  className={`block text-sm font-medium leading-6 ${
                    color === "dark" ? "text-gray-900" : "text-gray-200"
                  }`}
                >
                  {t("contactComponent.phone")}
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    pattern="[0-9]*"
                    required
                    onChange={(e) =>
                      setData({ ...data, phone: e.target.value })
                    }
                    placeholder={t("form.phone")}
                    className="placeholder:[&:lang(ar)]:text-right block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-blue-500 sm:text-sm sm:leading-6 placeholder:text-xs"
                  />
                </div>
              </div>

              <div className="sm:col-span-full">
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium leading-6 ${
                    color === "dark" ? "text-gray-900" : "text-gray-200"
                  }`}
                >
                  {t("contactComponent.email")}
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    required
                    placeholder={t("form.email")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-blue-500 sm:text-sm sm:leading-6 placeholder:text-xs"
                  />
                </div>
              </div>

              <div className="sm:col-span-full">
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium leading-6 ${
                    color === "dark" ? "text-gray-900" : "text-gray-200"
                  }`}
                >
                  {t("contactComponent.message")}
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    required
                    onChange={(e) =>
                      setData({ ...data, message: e.target.value })
                    }
                    placeholder={t("form.message")}
                    className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-blue-500 sm:text-sm sm:leading-6 placeholder:text-xs"
                  />
                </div>

                <div className="items-center m-2 mx-auto sm:flex sm:justify-center ">
                  <button
                    title="Submit"
                    disabled={false}
                    type="submit"
                    className="btn group  p-3 rounded-md mb-4 w-full bg-gradient-to-t max-w-xs sm:max-w-none from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 max-[600px]:w-full"
                  >
                    <span className="relative inline-flex items-center">
                      {loading ? (
                        <div className="w-20 h-20">
                          <Loader
                            className="text-white animate-spin animate-delay-2000"
                            size={16}
                          />
                        </div>
                      ) : (
                        t("contactComponent.submit")
                      )}
                    </span>
                  </button>

                  <p className="m-3 tracking-normal text-xs text-gray-400 transition-transform group-hover:translate-x-0.5 w-full ">
                    {t("contactComponent.capatcha")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <Example
        isOpen={isDialogOpen}
        onClose={() => {
          setIsDialogOpen(false);
          window.location.reload();
        }}
      />
    </div>
  );
};

interface IExample {
  isOpen: boolean;
  onClose: () => void;
}
function Example({ isOpen, onClose }: IExample) {
  const { t } = useTranslation();

  return (
    <div className="">
      <Dialog open={isOpen} onClose={onClose} className="relative z-50 ">
        <div className="fixed inset-0 flex flex-col items-center justify-center w-screen p-4 bg-gray-400 bg-opacity-50 ">
          <DialogPanel className="flex flex-col items-center justify-center max-w-lg p-12 space-y-4 bg-white border shadow-md rounded-2xl">
            <div>
              <Mail className="text-3xl text-blue-700" />
            </div>
            <DialogTitle className="text-2xl font-bold text-center">
              {t("form.send")}
            </DialogTitle>
            <p>{t("form.replay_message")}</p>

            <div>
              <button
                title="Submit"
                onClick={onClose}
                className="btn group mb-4 py-2 px-6 rounded-lg w-full bg-gradient-to-t max-w-xs sm:max-w-none from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
              >
                {t("form.ok")}
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}

export default ContactForm;
