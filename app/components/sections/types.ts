export interface SectionProps {
    id?: string;
    heading?: string;
    columnContent?: ColumnDataProps;
    className?: string;
    visualContent?: JSX.Element;
    shouldBeRow?: boolean;
    isImageVisible?: JSX.Element;
}

export interface ColumnDataProps {
    columnHeading?: string;
    description?: string;
    subHeading?: string;
    buttonPrimary?: string;
    buttonSecondary?: string;
    formHref?: string;
}
