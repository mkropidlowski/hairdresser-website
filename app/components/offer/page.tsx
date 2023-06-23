import { FC } from "react";
import style from "./page.module.scss";
import { EmployeeProps, employeeIcons, OfferListProps, offerList } from "@/app/config/offer/data";
import { useId } from "react";

interface OfferProps {
    employee?: EmployeeProps[];
    offerItems?: OfferListProps[];
}

const Offer: FC<OfferProps> = ({ employee = employeeIcons, offerItems = offerList }) => {
    const Id = useId();
    return (
        <div className={style.wrapper}>
            <h2>Nasi pracownicy</h2>
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
                <h2>Jako profesjonalny zakład fryzjerski oferujemy usługi takie jak:</h2>
                <ul className={style.offerItems}>
                    {Object.values(offerItems).map(({ serviceName }) => (
                        <li key={Id} className={style.items}>
                            {serviceName}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Offer;
