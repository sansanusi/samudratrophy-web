import Link from "next/link";
import Image from "next/image";

export default function WhatsApp() {
  return (
    <Link
      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_ADMIN}?text=Halo%Samudra,%20saya%20perlu%20di%20bantu.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-28 z-50"
    >
      <div className="relative">
        <div className="md:absolute md:right-0 md:-bottom-1.5 rounded-full shadow-md">
          <Image
            src="/images/whatsapp.svg"
            alt="wa"
            width={100}
            height={100}
            className="w-16 h-16 md:w-16 md:h-16" // Responsive sizing
          />
        </div>
        <div className="bg-white shadow-md rounded-lg px-2 py-1 items-center mr-8 hidden md:block">
          <div className="pr-8">
            <h2 className="font-bold text-base text-right">Butuh Bantuan?</h2>
            <p className="text-sm text-gray-600 text-right">Hubungi kami di WhatsApp</p>
          </div>
        </div>
      </div>
    </Link>
  );
}