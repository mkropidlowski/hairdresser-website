import { FC } from "react";
import style from "./page.module.scss";
import { EmployeeProps, employeeIcons, OfferListProps, offerList, offerTitle } from "@/app/config/offer/data";
import { useId } from "react";
import { Scissors } from "../icons";

interface OfferProps {
    employee?: EmployeeProps[];
    offerItems?: OfferListProps[];
}

const Offer: FC<OfferProps> = ({ employee = employeeIcons, offerItems = offerList }) => {
    const Id = useId();
    return (
        <div className={style.wrapper}>
            <div className={style.employeeContainer}>
                {Object.values(employee).map(({ name, icon, description }) => (
                    <div key={`${name}${Id}`} className={style.employeeCard}>
                        <div className={style.employeeIcon}>{icon}</div>
                        <div className={style.employeeText}>
                            <h1 className={style.employeeName}>{name}</h1>
                            <p className={style.employeeDescription}>{description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={style.offer}>
                <h2>{offerTitle}</h2>
                <ul className={style.offerItems}>
                    {Object.values(offerItems).map(({ id, serviceName }) => (
                        <li key={id} className={style.items}>
                            <span className={style.icon}>
                                <Scissors width={25} height={25} />
                            </span>
                            <span>{serviceName}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Offer;
