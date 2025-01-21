import { CONTACT } from "../constants";
import { FaWhatsapp } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-10">
      {/* Judul Halaman */}
      <h2 className="text-center text-xl font-semibold pb-5">Kontak</h2>

      {/* Deskripsi */}
      <div className="w-full">
        <p className="text-center text-base mb-">
          Untuk keperluan lebih lanjut silahkan menghubungi saya melalui kontak di bawah ini.
        </p>

        {/* Kontainer Kontak */}
        <div className="flex flex-col items-center gap-6 p-6 rounded-lg lg:flex-row lg:justify-center lg:gap-10">
          {/* Item WhatsApp */}
          <div className="flex items-center gap-3">
            <FaWhatsapp className="text-green-500 text-2xl" />
            <a
              href="https://wa.me/6281216120922"
              className="text-base font-medium hover:underline"
            >
              {CONTACT.phoneNo}
            </a>
          </div>

          {/* Item Email */}
          <div className="flex items-center gap-3">
            <FaMailBulk className="text-blue-500 text-2xl" />
            <a
              href="mailto:muh.almansur.jr@gmail.com"
              className="text-base font-medium hover:underline"
            >
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
