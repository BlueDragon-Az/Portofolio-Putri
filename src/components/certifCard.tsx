type CertificateCardProps = {
    title: string;
    description: string;
    year: string;
    image: string,
    pdf: string;
};

function CertificateCard({
    title,
    description,
    year,
    image,
    pdf,
}: CertificateCardProps) {
    return (
        <div className="group mt-6 rounded-lg border border-[#FFFFFF]/20 bg-[#00111D]/60 p-5 transition-all duration-300 hover:border-[#07eaff]/60">

            <div className="flex flex-col gap-6 md:flex-row">

                {/* LEFT - Certificate Information */}
                <div className="flex flex-1 flex-col">

                    {/* Label */}
                    <div className="flex items-center gap-2">
                        <span className="font-mono text-sm text-[#07eaff]">
                            [ CERTIFICATE ]
                        </span>
                    </div>

                    {/* Title */}
                    <div className="mt-3">
                        <h2 className="font-montserrat text-xl font-bold text-[#FFFFFF]">
                            {title}
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="mt-3">
                        <p className="font-montserrat text-md leading-6 text-[#C2C2C2]">
                            {description}
                        </p>
                    </div>

                    {/* Year */}
                    <div className="mt-auto pt-6">
                        <div className="flex items-center gap-2 border-t border-[#E67219] pt-3">
                            <span className="font-mono text-sm text-[#07eaff]">
                                YEAR
                            </span>

                            <span className="font-mono text-md font-semibold text-[#d0f81e]">
                                {year}
                            </span>
                        </div>
                    </div>

                </div>

                {/* RIGHT - Certificate Image */}
                <div className="w-full md:w-70">

                    <div className="overflow-hidden rounded-md border border-[#FFFFFF]/30 bg-[#000B12]">
                        <a
                            href={pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block overflow-hidden rounded-md border border-[#FFFFFF]/30 bg-[#000B12]"
                        >
                            <img
                                src={image}
                                alt={`${title} certificate`}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                            />
                        </a>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default CertificateCard;