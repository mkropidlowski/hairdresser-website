import { SectionProps } from "@/app/components/sections/types";
import { navbarLinks } from "@/app/components/navbar/helpers/data";
import hairdresserImage from "../../../public/images/hairdresser.jpeg";
import Image from "next/image";
import Offer from "@/app/components/offer/page";
import ImageSlider from "@/app/components/slider/page";

const { about, offer, gallery, contact, price } = navbarLinks ?? {};
export const SectionsContent: SectionProps[] = [
    {
        id: about.id,
        heading: "O salonie",
        columnContent: {
            columnHeading: "Lorem lorem colum heading",
            description:
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.",
            buttonPrimary: "Umów się na wizytę!",
        },
        shouldBeRow: true,
        isImageVisible: <Image src={hairdresserImage} alt="hairdresser" style={{ objectFit: "fill" }} fill priority />,
    },
    {
        id: offer.id,
        heading: "Nasz zespół",
        shouldBeRow: false,
        visualContent: <Offer />,
    },
    {
        id: gallery.id,
        heading: "Galeria prac",
        shouldBeRow: false,
        visualContent: <ImageSlider />,
    },
    {
        id: price.id,
        heading: "Cennik",
        shouldBeRow: false,
    },
    {
        id: contact.id,
        heading: "Kontakt",
        columnContent: {
            columnHeading: "Lorem lorem colum heading",
            description:
                "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
        },
        shouldBeRow: false,
    },
];
