import { FC } from "react";
import { prices } from "@/app/config/priceList/data";
import style from "./page.module.scss";

interface PriceListProps {
    priceList?: PriceListProps[];
}

const PriceList: FC<PriceListProps> = ({ priceList = prices }) => {
    return (
        <div>
            <table className={style.table}>
                <thead className={style.tableThead}>
                    <tr className={style.tableHeading}>
                        <td>Usługa</td>
                        <td>Cena</td>
                    </tr>
                </thead>
                <tbody className={style.tableTbody}>
                    {Object.values(priceList).map(({ index, service, price }) => (
                        <tr key={index}>
                            <td>{service}</td>
                            <td>{price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PriceList;
