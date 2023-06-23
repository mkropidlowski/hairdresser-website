import { Emoi } from "@/app/components/icons";

export interface EmployeeProps {
    icon?: JSX.Element;
    name?: string;
    description?: string;
}

export interface OfferListProps {
    serviceName?: string;
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
        serviceName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        serviceName: "Lorem ipsum dolor sit amet, consectetur.",
    },
    {
        serviceName: "Lorem ipsum dolor sit amet.",
    },
    {
        serviceName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        serviceName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        serviceName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];
