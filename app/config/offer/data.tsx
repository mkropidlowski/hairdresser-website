import { Emoi } from "@/app/components/icons";

export interface EmployeeProps {
    icon?: JSX.Element;
    name?: string;
    description?: string;
}

export interface OfferListProps {
    id: number;
    serviceName: string;
}

export const employeeIcons: EmployeeProps[] = [
    {
        name: "Jan",
        icon: <Emoi width={50} height={50} />,
        description: "Hello!",
    },
    {
        name: "Adam",
        icon: <Emoi width={50} height={50} />,
        description: "Hello!",
    },
    {
        name: "Kasia",
        icon: <Emoi width={50} height={50} />,
        description: "Hello!",
    },
    {
        name: "Tomasz",
        icon: <Emoi width={50} height={50} />,
        description: "Hello!",
    },
];

export const offerList: OfferListProps[] = [
    {
        id: 1,
        serviceName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        serviceName: "Lorem ipsum dolor sit amet, consectetur.",
    },
    {
        id: 3,
        serviceName: "Lorem ipsum dolor sit amet.",
    },
    {
        id: 4,
        serviceName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 5,
        serviceName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 6,
        serviceName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

export const offerTitle: string = "Jako profesjonalny zakład fryzjerski oferujemy usługi takie jak:";
